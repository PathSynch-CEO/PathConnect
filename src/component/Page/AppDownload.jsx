import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';


const AppDownload = () => {
  return (
    <div>

        <Header/>
        <div className="app-download">
        <div className="image-section">
        <img src="download.png" alt="App preview" className="phones-img" />
      </div>
      <div className="content">
        <h2 className="title">Discover Great Deals on Your Path</h2>
        <p className="subtitle">
          Search, purchase, and redeem Memberships directly from your mobile device.
        </p>

        <h3 className="download-heading">Download the free app now!</h3>
        <p className="download-text">
          Enter your 10-digit mobile number and we’ll send a download link directly to your phone.
        </p>

        <div className="input-container">
          <input
            type="tel"
            placeholder="(xxx) xxx-xxxx"
            className="phone-input"
          />
         <Link to="/app-download2"><button className="send-btn">Send Link</button></Link> 
        </div>

        <p className="message">
          <strong>Message and data rates may apply.</strong><br />
          By providing your mobile number, you agree to receive a text with a download link. If you
          reply “STOP” to the link text, you will no longer receive messages from PathSynch. You
          may also reply with “HELP” for further assistance. If you switch mobile carriers or change
          numbers, you’ll need to request a new link.
        </p>

        <div className="store-icons">
          <Link to="https://apps.apple.com/us/app/pathsynch/id6477720135?l"><img src="appstore.png" alt="App Store" className="icon" /></Link>
          <img src="gplay.png" alt="Google Play" className="icon" />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AppDownload;
