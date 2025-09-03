import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loadingGoogle, setLoadingGoogle] = React.useState(false);

  const handleGoogleSignin = () => {
    setLoadingGoogle(true);
    // full-page redirect to backend signin start → Google → callback
    window.location.assign(
      `https://api.pathsynch.com/v2/auth/signin/merchant/google/start?returnTo=/`
    );
  };

  const handleLogin = async () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    }
    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    setLoading(true);
    const loginData = { email, password };

    try {
      const response = await fetch(
        "https://api.pathsynch.com/v2/auth/signin/merchant",
        // "http://localhost:8181/v2/auth/signin/merchant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const result = await response.json();
      //console.log("resp :",result.data);
      if (response.ok) {
        //window.location.href = `https://pathmanager.pathsynch.com?merchantcode=${result?.data?.mcnt_code}&token=${result?.data?.accesstoken}`;
        window.location.href = `http://localhost:5173?merchantcode=${result?.data?.mcnt_code}&token=${result?.data?.accesstoken}`;
      } else {
        alert("Login failed: " + (result.message || "Invalid credentials"));
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const handleInputChange = (e, field) => {
    const { value } = e.target;
    if (field === "email") {
      setEmail(value);
      setErrors((prev) => ({ ...prev, email: "" }));
    }
    if (field === "password") {
      setPassword(value);
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <div>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
      <Header />
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <p className="personal-data">We do not share your personal data.</p>
          <div className="input-wrap">
            <p>Email*</p>
            <input
              autoComplete="off"
              type="email"
              placeholder="E-mail address"
              value={email}
              onChange={(e) => handleInputChange(e, "email")}
            />
            {errors.email && <p className="eww  ">{errors.email}</p>}
          </div>
          <div className="input-wrap ">
            <p>Password*</p>
            <input
              autoComplete="off"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => handleInputChange(e, "password")}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button onClick={handleLogin} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
          <p style={{ marginBottom: 0 }}>Or Sign in with</p>
          <button
            type="button"
            onClick={handleGoogleSignin}
            disabled={loadingGoogle}
            aria-label="Continue with Google"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            {loadingGoogle ? "Starting Google…" : "Google"}
          </button>
          <div className="mt-4 text-center">
            <p className="text-sm text-white mb-2">Don't have an account?</p>
            <button
              onClick={() => navigate("/pricing-page")}
              className="bg-[#FFE816] text-[#336633] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#FFD700]"
            >
              Choose a subscription to sign up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginScreen;
