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
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      const result = await response.json();
      console.log("resp :",result.data);
        if (response.ok) {
          window.location.href = `https://pathmanager.pathsynch.com?merchantcode=${result?.data?.mcnt_code}&token=${result?.data?.accesstoken}&result=${result?.data}`;
          //window.location.href = `http://localhost:5173?merchantcode=${result?.data?.mcnt_code}&token=${result?.data?.accesstoken}&result=${result?.data}`;
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
          <div className="mt-4 text-center">
            <p className="text-sm text-white mb-2">Don't have an account?</p>
            <button
              onClick={() => navigate("/pricing-page")}
              className="bg-[#FFE816] text-[#336633] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#FFD700]"
            >
              Choose a subscription to sign up
            </button>
          </div>

          {/* <p>Or Sign in with</p>
          <div className='google-btn'>
            <button className="google-signin" disabled={loading}>
              <span><img src='google.png' alt="Google" /> Sign in with Google</span>
            </button>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginScreen;
