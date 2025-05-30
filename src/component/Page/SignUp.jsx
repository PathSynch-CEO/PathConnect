import React, { useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Link, useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email) {
      setError('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Invalid email address');
    } else {
      setError('');
      navigate('/merchantSignup', { state: { email } });
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError('');
  };
  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    navText: [
      `<img src="/rc.svg" alt="Prev" style="width: 30px; height: 30px;" />`,
      `<img src="/lc.png" alt="Next" style="width: 30px; height: 30px;" />`,
    ],
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  return (
 
     <div>
     <Header />
     <div className="auth-screen">
       {/* Left Side - Authentication Form */}
       <div className="auth-form">
         <button className="google-btn">Sign up with Google</button>
         <div className="divider">OR</div>
         <input
                className="signup-input"
                type="email"
                placeholder="Enter your work email"
                name="buisnessname"
                value={email}
                // style={{backgroundColor:"#4a7c59"}}
                onChange={handleInputChange} />
        
          {error && <p className='error'>{error}</p>}

         <p className="terms">
           By signing up, I accept the PathSynch <a href="#">Terms</a> and
           acknowledge the <a href="#">Privacy Policy</a>.
         </p>
          {/* <button className="auth-button">Continue</button> */}
          <button className="continue-btn"  onClick={handleContinue} >Continue</button>
         <p className="login-link">
           Already have a PathSynch account? <a href="#">Login</a>
         </p>
       </div>

       {/* Right Side - Slider */}
       <div className="login-slider">
         <OwlCarousel {...options}>
            <div className="item item-bg">
             <h1>
               Let’s start you off on the<br></br> right path. Get started -
               <br></br> it’s free.
             </h1>
             <div className="item-img">
               <img src="slidelogo.png" />
             </div>
             <div className="item-img">
               {" "}
               <p>New Customers Await and Build Brand Loyalty</p>
             </div>
           </div>
           <div className="item item-bg">
             {" "}
             <h1>
               Let’s start you off on the<br></br> right path. Get started -
               <br></br> it’s free.
             </h1>
             <div className="item-img">
               <img src="slidelogo.png" />
             </div>
             <div className="item-img">
               {" "}
               <p>New Customers Await and Build Brand Loyalty</p>
             </div>
           </div> 
           <div className="item item-bg">
             <div className="white-div">
               <h5>Discover New Customers</h5>
               <p>
                 PathSynch helps you reach high-intent, local audiences through
                 targeted promotions across web, mobile, and our growing
                 Marketplace—connecting your business with customers ready to
                 engage.
               </p>
             </div>
             <div className="white-div">
               <h5>Discover New Customers</h5>
               <p>
                 PathSynch helps you reach high-intent, local audiences through
                 targeted promotions across web, mobile, and our growing
                 Marketplace—connecting your business with customers ready to
                 engage.
               </p>
             </div>
             <div className="white-div">
               <h5>Discover New Customers</h5>
               <p>
                 PathSynch helps you reach high-intent, local audiences through
                 targeted promotions across web, mobile, and our growing
                 Marketplace—connecting your business with customers ready to
                 engage.
               </p>
             </div>
           </div>
         </OwlCarousel>
       </div>
     </div>
     <Footer />
   </div>
  );
};

export default SignUp;

