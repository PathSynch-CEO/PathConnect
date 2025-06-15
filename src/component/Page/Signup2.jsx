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
      finalFormData = {
        ...finalFormData,
        sessionId: sessionId,
        paymentId: paymentId || '',
        paymentDate: paymentDate || '',
        amount: amount || '',
        subscriptionPlan: subscriptionPlan || '',
      };
    }
  
    try {
      const response = await fetch('https://api.pathsynch.com/v2/auth/register/merchant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalFormData),
      });
      const result = await response.json();
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