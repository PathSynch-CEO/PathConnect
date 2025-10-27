// import React from "react";
// import { useEffect } from "react";

// const GoogleConnect = ({ disabled, buttonText = "Connect Google Account", onSuccess })=> {
//   const handleConnect = () => {
//     //const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID; // Put your Client ID in .env
//     const clientId = "218613212853-2rfnv2rcs9tifdea7p9mqdd7r10f4368.apps.googleusercontent.com"
//     const redirectUri = "http://localhost:8181/v2/auth/oauth2/callback"; // Backend endpoint
//     const scopes = [
//       "openid",
//       "email",
//       "profile",
//       "https://www.googleapis.com/auth/webmasters.readonly",
//       "https://www.googleapis.com/auth/analytics.readonly",
//       "https://www.googleapis.com/auth/business.manage"
//     ];

//     const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
//       redirectUri
//     )}&scope=${encodeURIComponent(
//       scopes.join(" ")
//     )}&access_type=offline&prompt=consent`;

//     window.location.href = authUrl; // Redirect user to Google OAuth
//   };

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const connected = params.get("google_connected");
  
//     const alreadyStored = localStorage.getItem("googleConnected");
  
//     if (connected === "true" && alreadyStored !== "true") {
//       localStorage.setItem("googleConnected", "true");
//       onSuccess?.();
//     }
//   }, []);
  

//   return (
//     <div className="text-center mt-6">
//       <button
//         onClick={handleConnect}
//         disabled={disabled}
//         style={{
//           backgroundColor: disabled ? "#999" : "#4285F4",
//           color: "white",
//           padding: "10px 16px",
//           borderRadius: "6px",
//           border: "none",
//           cursor: disabled ? "not-allowed" : "pointer",
//           fontSize: "16px",
//           fontWeight: "bold"
//         }}
//       >
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// export default GoogleConnect;

import React from "react";
import { useEffect } from "react";

const GoogleConnect = ({ disabled, buttonText = "Connect Google Account", onSuccess, selectedServices = [] })=> {

  const handleConnect = () => {
    const id = localStorage.getItem("merchantId") || 'b3a6c11923be42e4633e6541a18b25MTc0NjA5MzQxODczOQ';

    //console.log("mcnttt,",id);
    // Save the selected services before redirecting
    sessionStorage.setItem('pendingGoogleServices', JSON.stringify(selectedServices));

    const clientId = "218613212853-2rfnv2rcs9tifdea7p9mqdd7r10f4368.apps.googleusercontent.com";
    //const redirectUri = "http://localhost:8181/v2/auth/oauth2/callback";
    const redirectUri = "https://api.pathsynch.com/v2/auth/oauth2/callback"

    const scopeMap = {
      'google-business': 'https://www.googleapis.com/auth/business.manage',
      'search-console': 'https://www.googleapis.com/auth/webmasters.readonly',
      'analytics': 'https://www.googleapis.com/auth/analytics.readonly',
      'site-verification':'https://www.googleapis.com/auth/siteverification',
    };
    const baseScopes = ["openid", "email", "profile"];
    const dynamicScopes = selectedServices.map(serviceId => scopeMap[serviceId]).filter(Boolean);
    const allScopes = [...baseScopes, ...dynamicScopes];

    // Put id (and optionally other state) into the state param, URL-safe
    const stateObj = { id };
    const state = encodeURIComponent(JSON.stringify(stateObj));
  
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(
      allScopes.join(" ")
    )}&access_type=offline&prompt=consent&state=${state}`;

    window.location.href = authUrl;
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const connected = params.get("google_connected");
    
    if (connected === "true") {
      localStorage.setItem("googleConnected", "true");
      onSuccess?.();
    }
  }, [onSuccess]);
  
  return (
    <div className="text-center mt-3">
      <button
        onClick={handleConnect}
        disabled={disabled}
        style={{
          backgroundColor: disabled ? "#999" : "#FFE816",
          color: "black",
          padding: "12px 24px",
          borderRadius: "6px",
          border: "none",
          cursor: disabled ? "not-allowed" : "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          transition: "background-color 0.2s"
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default GoogleConnect;