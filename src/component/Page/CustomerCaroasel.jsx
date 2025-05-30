import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Custom w arrow with image
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img src="rc.svg" alt="Next" />
    </div>
  );
};

// Custom previous arrow with image
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img src="lc.png" alt="Previous" />
    </div>
  );
};

const CustomerCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="customer-carousel">
      <h2>What Our Customers Are Saying</h2>
      <Slider {...settings}>
        <div className="testimonial-card">
          <div className="quote"><img src="test.png"/></div>
          <div className="test-txt">
          ⭐⭐⭐⭐⭐
          </div>
          <h3>Convenience King</h3>
          <p>
            Gone are the days of fumbling for business cards! PathSync Cards are
            a game-changer. My clients snap my phone and instantly have all my
            contact info, website, and social media links. Makes networking a
            breeze!
          </p>
          <span className="author">- Ryan S.</span>
        </div>

        <div className="testimonial-card">
        <div className="quote"><img src="test.png"/></div>
          <div className="test-txt">
          ⭐⭐⭐⭐⭐
          </div>
          <h3>Multitasking Marvel</h3>
          <p>
            I love the versatility of PathSync Cards! I use them for everything —
            sharing my portfolio, linking my social media profiles, and even
            letting clients access my booking page. All with a simple tap!
          </p>
          <span className="author">- Trina J.</span>
        </div>

        <div className="testimonial-card">
        <div className="quote"><img src="test.png"/></div>
          <div className="test-txt">
          ⭐⭐⭐⭐⭐
          </div>
          <h3>Professional Vibes</h3>
          <p>
            PathSync Cards make my brand stand out. The sleek, modern design and
            easy-to-use functionality impress everyone I meet. It’s the perfect
            tool for growing my business!
          </p>
          <span className="author">- Alex M.</span>
        </div>
      </Slider>
    </div>
  );
};

export default CustomerCarousel;
