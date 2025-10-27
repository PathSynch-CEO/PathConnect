import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

import Footer from '../Footer';
import Header from '../Header';

const Signup2 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || '';
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [formData, setFormData] = useState({
    buisnessname: '',
    profile: "",
    dob: "",
    trail: "",
    address: '',
    city: '',
    state: '',
    zip: '',
    fname: '',
    lname: '',
    email: email,
    landline: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedAddress = localStorage.getItem('address');
    const storedBuisnessname = localStorage.getItem('buisnessname');
    const storedCountry = localStorage.getItem('state');
    const storedEmail = localStorage.getItem('email');
    const storedState = localStorage.getItem('city');
    const storedZip = localStorage.getItem('zip');

    setFormData(prevData => ({
      ...prevData,
      address: storedAddress || prevData.address,
      buisnessname: storedBuisnessname || prevData.buisnessname,
      email: storedEmail || prevData.email,
      city: storedState || prevData.state,
      state: storedCountry,
      zip: storedZip || prevData.zip,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const newErrors = {};
  
    Object.entries(formData).forEach(([key, value]) => {
      if (!['dob', 'trail', 'profile'].includes(key) && !value) {
        newErrors[key] = `${key} is required`;
      }
    });
  
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
  
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
  
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const formatPhoneNumber = (number) => {
      if (!number) return number;
      const cleaned = number.replace(/\D/g, '');
      const formatted = cleaned.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
      return formatted;
    };

    var finalFormData = {
      ...formData,
      profile: formData.profile || '',
      dob: formData.dob || '',
      trail: formData.trail || '',
      landline: formatPhoneNumber(formData.landline),
    };

    if(sessionId){
      const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails") || '{}');
      const paymentId = paymentDetails.paymentIntentId;
      const paymentDate = paymentDetails.paymentDate;
      const amount = paymentDetails.amount;
      const subscriptionPlan = paymentDetails.product.plan;
      const subscription_id = paymentDetails.subscription_id;
      const invoice_id = paymentDetails.invoice_id;
      const invoice_number = paymentDetails.invoice_number;
      const payment_frequency = paymentDetails.payment_frequency;
      finalFormData = {
        ...finalFormData,
        sessionId: sessionId,
        paymentId: paymentId || '',
        paymentDate: paymentDate || '',
        amount: amount || '',
        subscriptionPlan: subscriptionPlan || '',
        stripe_subscription_id: subscription_id || '',
        invoice_id: invoice_id || '',
        invoice_number: invoice_number || '',
        payment_frequency: payment_frequency || '',
      };
    }
  
    try {
      const response = await fetch(`https://api.pathsynch.com/v2/auth/register/merchant`, {
      // const response = await fetch('http://localhost:8181/v2/auth/register/merchant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalFormData),
      });
      const result = await response.json();
      //console.log("wats up",response);
      if (response.ok) {
        navigate('/email-confirmation', { state: { email: formData.email } });
      } else {
        alert(`Signup failed: ${result.message}`);
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };


  const onGoogleSignup = async () => {
    try {
      setLoading(true);

      // 1) Build finalFormData EXACTLY as you do for password flow
      const formatPhoneNumber = (number) => {
        if (!number) return number;
        const cleaned = number.replace(/\D/g, '');
        return cleaned.replace(/^(\d{3})(\d{3})(\d{4})$/, '($1) $2-$3');
      };

      let finalFormData = {
        ...formData,
        profile: formData.profile || '',
        landline: formatPhoneNumber(formData.landline),
      };

      if (sessionId) {
        const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails") || "{}");
        finalFormData = {
          ...finalFormData,
          sessionId,
          paymentId: paymentDetails.paymentIntentId,
          paymentDate: paymentDetails.paymentDate,
          amount: paymentDetails.amount,
          subscriptionPlan: paymentDetails.product?.plan,
          stripe_subscription_id: paymentDetails.subscription_id,
          invoice_id: paymentDetails.invoice_id,
          invoice_number: paymentDetails.invoice_number,
          payment_frequency: paymentDetails.payment_frequency,
          currency: paymentDetails.currency || "usd",
        };
      }

      // 2) Stash in server cookie
      const ctxRes = await fetch(`https://api.pathsynch.com/v2/auth/register/merchant/google/paid/ctx`, {
      // const ctxRes = await fetch(`http://localhost:8181/v2/auth/register/merchant/google/paid/ctx`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalFormData),
      });

      if (!ctxRes.ok) {
        const j = await ctxRes.json().catch(() => ({}));
        alert(j?.message || "Could not prepare Google signup.");
        setLoading(false);
        return;
      }

      // 3) Hop to Google
      window.location.assign(`https://api.pathsynch.com/v2/auth/register/merchant/google/paid/start`);
      // window.location.assign(`http://localhost:8181/v2/auth/register/merchant/google/paid/start`);
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
      setLoading(false);
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
      <div className='signup-wrap'>
        <div className='heading-wrap'>
          <h2 className="signup-title">Promote your Business with PathSynch Merchant</h2>
          <p className="signup-description">Reach new customers, build loyalty, and grow your brand!</p>
          <p className="signup-description">Get Started Today with $0 Upfront Costs!</p>
        </div>
        <div className="signup-container">
          <div className="signup-card">
            <div className='signup-input-row'>
              <input
                className="signup-input"
                type="text"
                placeholder="Business Name"
                name="buisnessname"
                value={formData.buisnessname}
                onChange={handleChange}
              />
            </div>
            {errors.buisnessname && <p className='error'>{errors.buisnessname}</p>}
            
            <div className='signup-input-row'>
              <input
                className="signup-input"
                type="text"
                placeholder="Business Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            {errors.address && <p className='error'>{errors.address}</p>}

            {/* City Field - Separate Row */}
            <div className='signup-input-row'>
              <input
                className="signup-input"
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && <p className='error'>{errors.city}</p>}
            </div>

            {/* State and Zip - Combined Row */}
            <div className='signup-input-row grid-wrap'>
              <div className='grid-item'>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && <p className='error'>{errors.state}</p>}
              </div>
              <div className='grid-item'>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="Zip Code"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                />
                {errors.zip && <p className='error'>{errors.zip}</p>}
              </div>
            </div>

            <div className='signup-input-row grid-wrap'>
              <div className='grid-item'>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                />
                {errors.fname && <p className='error'>{errors.fname}</p>}
              </div>
              <div className='grid-item'>
                <input
                  className="signup-input"
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                />
                {errors.lname && <p className='error'>{errors.lname}</p>}
              </div>
            </div>

            <div className='signup-input-row'>
              <input
                className="signup-input"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                readOnly={!!email}
              />
            </div>

            <div className='signup-input-row'>
              <input
                className="signup-input"
                type="text"
                placeholder="Business Number"
                name="landline"
                value={formData.landline}
                onChange={handleChange}
              />
            </div>
            {errors.landline && <p className='error'>{errors.landline}</p>}

            <div className='signup-input-row password-container'>
              <input
                className="signup-input"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <span 
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
            {errors.password && <p className='error'>{errors.password}</p>}

            <div className='signup-input-row password-container'>
              <input
                className="signup-input"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              <span 
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
            {errors.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}

            <div className='google-btn'>
              <button className="signup-button" onClick={handleSubmit} disabled={loading}>
                {loading ? 'Signing up...' : 'Sign Up'}
              </button>
            </div>

            <p style={{ marginBottom: 0, color: 'white' }}>Or Sign up with</p>
          <button
            type="button"
            onClick={onGoogleSignup}
            disabled={loading}
            aria-label="Continue with Google"
            className='google-btn'
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
            {loading ? "Starting Google…" : " Google"}
          </button>

          </div>
          <div className="hero-section-wrap">
            <img src='signup2.png' alt="Signup" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup2;