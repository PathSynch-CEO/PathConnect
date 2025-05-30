import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Footer from "../Footer";
import Header from "../Header";

const AuthScreen = () => {
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

export default AuthScreen;
