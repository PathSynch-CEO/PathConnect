import React from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const CarouselComponent = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
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
      600: { items: 2 },
      1000: { items: 3 },
    },
  };

  return (
    <div className="carousel-container">
      <h2>Why choose PathSynch</h2>
      <OwlCarousel {...options}>
        <div className="item">
          <img src="bl1.png" alt="Image 1" />
          <h3>Data-Driven Insights</h3>
          <p>Our AI-powered analytics and feedback tools provide real-time, actionable data to help businesses make informed decisions.</p>
        </div>
        <div className="item">
          <img src="bl2.png" alt="Image 2" />
          <h3>Effortless Customer Engagement</h3>
          <p>Businesses can implement gamified loyalty programs and automated feedback solutions with ease, leading to higher retention and satisfaction.</p>
        </div>
        <div className="item">
          <img src="bl3.png" alt="Image 3" />
          <h3>Scalable for Any Business</h3>
          <p>Whether you’re a small business, a growing brand, or a multi-location enterprise, PathSynch’s flexible solutions adapt to your needs.</p>
        </div>
        <div className="item">
          <img src="bl3.png" alt="Image 3" />
          <h3>Seamless Integration</h3>
          <p>Our platform integrates with Google My Business, social media, eCommerce platforms, and CRM tools, ensuring businesses have everything they need in one place.</p>
        </div>
        <div className="item">
          <img src="bl3.png" alt="Image 3" />
          <h3>Proven Results</h3>
          <p>Studies show that displaying positive reviews can increase conversion rates by 270%, and businesses that respond to reviews are 89% more likely to gain trust. Our tools ensure businesses capitalize on these opportunities.</p>
        </div>
        {/* <div className="item">
          <img src="bl3.png" alt="Image 3" />
          <h3>Nulla pretium eros non massa</h3>
          <p>Vivamus at nunc diam. Fusce sed aliquet turpis. Maec enas ac risus at ipsum elementum imperdiet.</p>
        </div> */}
      </OwlCarousel>
    </div>
  );
};

export default CarouselComponent;
