// import React, { useState } from "react";
// import { QrCode } from "lucide-react";
// import { Link } from "react-router-dom";

// import "./freesignup.css";

// const API_BASE = "http://localhost:8181"

// export default function FreeSignupPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [error, setError] = useState(null);
//   const [agree, setAgree] = useState(false);
//   const [loadingGoogle, setLoadingGoogle] = useState(false);

//   const validate = () => {
//     if (!email || !password)
//       return setError("Please enter email and password."), false;
//     if (!/.+@.+\..+/.test(email))
//       return setError("Enter a valid email address."), false;
//     if (password.length < 8)
//       return setError("Password must be at least 8 characters."), false;
//     if (password !== confirm) return setError("Passwords do not match."), false;
//     if (!agree) return setError("Please accept the Terms to continue."), false;
//     setError(null);
//     return true;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validate()) return;
//     // TODO: replace with your real API call
//     alert(`Signed up as ${email}`);
//   };

//   const handleGoogle = () => {
//     try {
//       setLoadingGoogle(true);
//       const returnTo = "/dashboard"; // where you want to land after auth
//       const url = `${API_BASE}/v2/auth/register/merchant/google/start?returnTo=/dashboard`;
//       window.location.assign(url); // full-page redirect to backend → Google → callback
//     } catch {
//       setLoadingGoogle(false);
//     }
//   };

//   return (
//     <div className="ps-split">
//       {/* LEFT: Sign-up card */}
//       <div className="ps-left">
//         <div className="ps-card">
//           <h1 className="ps-title">Create your account</h1>
//           <p className="ps-subtitle">We do not share your personal data.</p>

//           <button
//             type="button"
//             onClick={handleGoogle}
//             disabled={loadingGoogle}
//             className="ps-btn ps-btn-google"
//             aria-label="Continue with Google"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               x="0px"
//               y="0px"
//               width="20"
//               height="20"
//               viewBox="0 0 48 48"
//             >
//               <path
//                 fill="#FFC107"
//                 d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
//               ></path>
//               <path
//                 fill="#FF3D00"
//                 d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
//               ></path>
//               <path
//                 fill="#4CAF50"
//                 d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
//               ></path>
//               <path
//                 fill="#1976D2"
//                 d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
//               ></path>
//             </svg>
//             {loadingGoogle ? "Starting Google…" : "Continue with Google"}
//           </button>

//           <div className="ps-divider">
//             <span>OR</span>
//           </div>

//           <form onSubmit={handleSubmit} className="ps-form">
//             <label className="ps-label">
//               Email
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="you@company.com"
//                 className="ps-input"
//                 autoComplete="email"
//                 required
//               />
//             </label>

//             <label className="ps-label">
//               Password
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="••••••••"
//                 className="ps-input"
//                 autoComplete="new-password"
//                 required
//               />
//             </label>

//             <label className="ps-label">
//               Confirm password
//               <input
//                 type="password"
//                 value={confirm}
//                 onChange={(e) => setConfirm(e.target.value)}
//                 placeholder="••••••••"
//                 className="ps-input"
//                 autoComplete="new-password"
//                 required
//               />
//             </label>

//             <label className="ps-check">
//               <input
//                 type="checkbox"
//                 checked={agree}
//                 onChange={(e) => setAgree(e.target.checked)}
//               />
//               <span>
//                 By creating an account, you agree to PathSynch’s
//                 <a href="https://pathsynch.com/terms-of-use"> Terms of Service</a>, and
//                 <a href="https://pathsynch.com/privacy-policy"> Privacy Policy</a>.
//               </span>
//             </label>

//             {error && (
//               <p className="ps-error" role="alert">
//                 {error}
//               </p>
//             )}

//             <button type="submit" className="ps-btn ps-btn-primary">
//               Create free account
//             </button>
//           </form>
//         </div>
//       </div>

//       <aside className="ps-right">
//         <div className="ps-right-card">
//           <div className="ps-right-head">
//             {/* Tagline right */}
//             <div className="ps-right-tagline">
//               <span>Experience</span>
//               <span className="ps-chip">QRSynch</span> for
//               <span className="ps-free-badge">free  </span>
//               {/* <span className="ps-powered">powered by   </span>
//             <img
//               src="/logohome.svg"
//               alt="PathSynch"
//               className="ps-inline-logo"
//             /> */}
//             </div>
//           </div>

//           <h2 className="ps-right-title">Power your links & QR codes</h2>
//           <p className="ps-right-sub">
//             Create short links, branded QR codes, and track real engagement
//             across campaigns — all inside PathSynch.
//           </p>

//           <ul className="ps-right-list">
//             <li>
//               <span className="dot" /> Branded short URLs with UTM support
//             </li>
//             <li>
//               <span className="dot" /> Dynamic QR codes (SVG/PNG) with logos &
//               colors
//             </li>
//             <li>
//               <span className="dot" /> GA4 + BigQuery analytics integration
//             </li>
//             <li>
//               <span className="dot" /> Geo & device insights, top pages, sources
//             </li>
//             <li>
//               <span className="dot" /> One dashboard for links, scans, and
//               conversions
//             </li>
//           </ul>

//           <div className="ps-right-cta-row">
//             <a className="ps-btn ps-btn-outline" href="/qrsynch-page">
//               Explore QRSynch
//             </a>
//             <a className="ps-btn ps-btn-soft" href="https://qrsyn.ch/">
//               See how it works
//             </a>
//           </div>
//         </div>
//       </aside>
//     </div>
//   );
// }

// FreeSignUp.jsx  — full file with UI preserved + new fields + working submit

import React, { useState } from "react";
import { QrCode } from "lucide-react";
import { Link } from "react-router-dom";

import "./freesignup.css";

const API_BASE = "https://api.pathsynch.com";

export default function FreeSignupPage() {
  // NEW fields
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");

  // existing fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const [agree, setAgree] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);

  // stronger validation + new fields enforced
  const validate = () => {
    if (!fname || !lname)
      return setError("First and last name are required."), false;
    if (!/.+@.+\..+/.test(email))
      return setError("Enter a valid email address."), false;
    if (!phone) return setError("Phone is required."), false;
    // strong: 8+ with upper, lower, number, special
    const strong = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!strong.test(password))
      return (
        setError(
          "Password must be 8+ chars and include upper, lower, number, and special."
        ),
        false
      );
    if (password !== confirm) return setError("Passwords do not match."), false;
    if (!agree) return setError("Please accept the Terms to continue."), false;
    setError(null);
    return true;
  };

  // UPDATED: real API call (email-password free signup)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      const res = await fetch(`${API_BASE}/v2/auth/register/merchant/free`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email,
          password,
          fname,
          lname,
          landline: phone, // matches Merchant schema (per your direction)
        }),
      });
      // after: const res = await fetch(...);
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.message || "Could not complete sign-up.");
      }

      // NOTE: your Response helper wraps data -> result.data
      const token = result?.data?.accesstoken || result?.accesstoken;
      const merchant = result?.data?.mcnt_code || result?.mcnt_code;

      if (!token || !merchant) {
        throw new Error(
          "Signup succeeded but token/merchantcode missing in response."
        );
      }

      // Exactly the same shape as LoginScreen does:
      window.location.href = `https://pathmanager.pathsynch.com/?merchantcode=${encodeURIComponent(
        merchant
      )}&token=${encodeURIComponent(token)}`;
      
    } catch (err) {
      setError(err.message || "Signup failed.");
    }
  };

  const handleGoogle = () => {
    try {
      setLoadingGoogle(true);
      const url = `${API_BASE}/v2/auth/register/merchant/google/start?returnTo=/dashboard`;
      window.location.assign(url);
    } catch {
      setLoadingGoogle(false);
    }
  };

  return (
    <div className="ps-split">
      <section className="ps-left">
        <div className="ps-card">
          <h1 className="ps-title">Create your account</h1>
          <p className="ps-subtitle">We do not share your personal data.</p>

          <div className="ps-oauth">
            <button
              onClick={handleGoogle}
              disabled={loadingGoogle}
              className="ps-btn ps-btn-google"
              aria-label="Continue with Google"
            >
              {/* google logo svg preserved */}
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
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.96,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-4.934C29.675,35.091,26.955,36,24,36 c-5.176,0-9.549-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.266,4.166-4.147,5.571l6.19,4.934 C39.205,36.971,44,29.268,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
              {loadingGoogle ? "Starting Google…" : "Continue with Google"}
            </button>
            <div className="ps-or">or</div>
          </div>

          {/* ---- FORM (UI preserved, with added fields) ---- */}
          <form onSubmit={handleSubmit} className="ps-form">
            {/* NEW: First/Last name row */}
            <div className="ps-row">
              <label
                className="ps-label"
                style={{ flex: 1, marginRight: "8px" }}
              >
                First name
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="First name"
                  className="ps-input"
                  autoComplete="given-name"
                  required
                />
              </label>
              <label
                className="ps-label"
                style={{ flex: 1, marginLeft: "8px" }}
              >
                Last name
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Last name"
                  className="ps-input"
                  autoComplete="family-name"
                  required
                />
              </label>
            </div>

            {/* NEW: Phone */}
            <label className="ps-label">
              Phone
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(###) ###-####"
                className="ps-input"
                autoComplete="tel"
                required
              />
            </label>

            {/* existing: Email */}
            <label className="ps-label">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="ps-input"
                autoComplete="email"
                required
              />
            </label>

            {/* existing: Password */}
            <label className="ps-label">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="ps-input"
                autoComplete="new-password"
                required
              />
            </label>

            {/* existing: Confirm */}
            <label className="ps-label">
              Confirm password
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••"
                className="ps-input"
                autoComplete="new-password"
                required
              />
            </label>

            {/* NEW: visible password policy text */}
            <p className="ps-help">
              Password must be at least 8 characters and include uppercase,
              lowercase, number, and a special character.
            </p>

            {/* existing: TOS */}
            <label className="ps-check">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <span>
                By creating an account, you agree to PathSynch’s
                <a href="https://pathsynch.com/terms-of-use">
                  {" "}
                  Terms of Service
                </a>
                , and
                <a href="https://pathsynch.com/privacy-policy">
                  {" "}
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {error && (
              <p className="ps-error" role="alert">
                {error}
              </p>
            )}

            <button type="submit" className="ps-btn ps-btn-primary">
              Create free account
            </button>
          </form>
        </div>

        <footer className="ps-footer">
          <p>
            Already have an account? <Link to="/login">Sign in</Link>
          </p>
        </footer>
      </section>

      {/* right marketing panel preserved */}
      <aside className="ps-right">
        <div className="ps-right-card">
          <div className="ps-right-head">
            {/* Tagline right */}
            <div className="ps-right-tagline">
              <span>Experience</span>
              <span className="ps-chip">QRSynch</span> for
              <span className="ps-free-badge">free </span>
              {/* <span className="ps-powered">powered by   </span>
            <img
              src="/logohome.svg"
              alt="PathSynch"
              className="ps-inline-logo"
            /> */}
            </div>
          </div>

          <h2 className="ps-right-title">Power your links & QR codes</h2>
          <p className="ps-right-sub">
            Create short links, branded QR codes, and track real engagement
            across campaigns — all inside PathSynch.
          </p>

          <ul className="ps-right-list">
            <li>
              <span className="dot" /> Branded short URLs with UTM support
            </li>
            <li>
              <span className="dot" /> Dynamic QR codes (SVG/PNG) with logos &
              colors
            </li>
            <li>
              <span className="dot" /> GA4 + BigQuery analytics integration
            </li>
            <li>
              <span className="dot" /> Geo & device insights, top pages, sources
            </li>
            <li>
              <span className="dot" /> One dashboard for links, scans, and
              conversions
            </li>
          </ul>

          <div className="ps-right-cta-row">
            <a className="ps-btn ps-btn-outline" href="/qrsynch-page">
              Explore QRSynch
            </a>
            <a className="ps-btn ps-btn-soft" href="https://qrsyn.ch/">
              See how it works
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
