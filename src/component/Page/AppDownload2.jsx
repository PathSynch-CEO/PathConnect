import React from 'react';
import Header from '../Header';
import Footer from '../Footer';


const AppDownload2 = () => {
  return (
    <div>

        <Header/>
        <div className="app-download">
        <div className="image-section">
        <img src="download.png" alt="App preview" className="phones-img" />
      </div>
      <div className="content content2">
        <h2 className="title">Great Deals on Your<br></br> Path</h2>
        

       
        <p className="download-text">
        Search, purchase, and redeem<br></br> Memberships directly from your mobile<br></br> device.
        </p>

       

        

        <div className="store-icons">
          <img src="appstore.png" alt="App Store" className="icon" />
          <img src="gplay.png" alt="Google Play" className="icon" />
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default AppDownload2;
