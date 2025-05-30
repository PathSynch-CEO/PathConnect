import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const options = {
  items: 5,
  loop: true,
  nav: false,
  margin: 20,
  dots: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 5 },
  },
};

const BenefitsCarousel = () => {
  return (
    <div className="benefits-carousel">
      <h2 className="carousel-title">The Benefits to Your Business</h2>
      <OwlCarousel {...options}>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl1.png"/></div>
            <h4>Hassle-Free Reviews</h4>
            <p>Tap NFC cards and make getting reviews faster and easier for your customers.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl1.png"/></div>
            <h4>Save Time & Boost Efficiency</h4>
            <p>Reduce the hassle of manually collecting reviews. Our system makes it quick and convenient.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl2.png"/></div>
            <h4>SEO Boosts</h4>
            <p>More positive reviews mean higher search engine rankings and increased organic traffic.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl3.png"/></div>
            <h4>Works with All Smartphones</h4>
            <p>Our NFC technology works seamlessly with any smartphone, no matter the brand.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl4.png"/></div>
            <h4>Works with All Smartphones</h4>
            <p>Our NFC technology works seamlessly with any smartphone, no matter the brand.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl1.png"/></div>
            <h4>Save Time & Boost Efficiency</h4>
            <p>Reduce the hassle of manually collecting reviews. Our system makes it quick and convenient.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl2.png"/></div>
            <h4>SEO Boosts</h4>
            <p>More positive reviews mean higher search engine rankings and increased organic traffic.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl3.png"/></div>
            <h4>Works with All Smartphones</h4>
            <p>Our NFC technology works seamlessly with any smartphone, no matter the brand.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl4.png"/></div>
            <h4>Works with All Smartphones</h4>
            <p>Our NFC technology works seamlessly with any smartphone, no matter the brand.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl1.png"/></div>
            <h4>Save Time & Boost Efficiency</h4>
            <p>Reduce the hassle of manually collecting reviews. Our system makes it quick and convenient.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl2.png"/></div>
            <h4>SEO Boosts</h4>
            <p>More positive reviews mean higher search engine rankings and increased organic traffic.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl3.png"/></div>
            <h4>Works with All Smartphones</h4>
            <p>Our NFC technology works seamlessly with any smartphone, no matter the brand.</p>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <div className="icon"><img src="sl4.png"/></div>
            <h4>Works with All Smartphones</h4>
            <p>Our NFC technology works seamlessly with any smartphone, no matter the brand.</p>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default BenefitsCarousel;
