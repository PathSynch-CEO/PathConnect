import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { useLocation } from 'react-router-dom';


function EmailConfirmation() {
  const location = useLocation();
  const stateEmail = location.state?.email || '';
  const qpEmail = new URLSearchParams(location.search).get('email') || '';
  const email = stateEmail || qpEmail;

  return (
    <div>
        <Header/>
        <div className="email-confirmation-container">

      <div className="email-card">
      <div className='google-btn'>
     <button className="success-banner">
        <img src='em.png'/>
        <span>Submitted Successfully</span>
      </button>
     </div>
        <h2 className="email-heading">Check Your Email</h2>

        <div className="email-info">
        <img src='envelope.png'/>
          <span className="email-address">{email}</span>
        </div>

        <p className="email-instructions">
          Check your email and use the link provided to create your Merchant<br></br> Center account. Then, use our guided Campaign Builder to create<br></br> your PathSynch campaign.
        </p>
        <p className="email-instructions">
          Be sure to double-check your spam folder if you didn’t receive this email.
        </p>
        <p className="email-instructions">
          We’re looking forward to seeing your deal page live on the PathSynch platform!
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default EmailConfirmation;
