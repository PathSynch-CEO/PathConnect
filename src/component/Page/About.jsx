import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import AboutCaraousel from "./CarouselComponent";
import CarouselComponent from "./CarouselComponent";

function About() {
  return (
    <div className="about-main-wrap">
      <Header />
      <section class="product-section">
        <div class="container">
          <h1>About Us</h1>
          {/* <p>Donec pulvinar ligula sit amet ultricies tincidunt.</p> */}
          {/* <button className="common_btn">
            Create a free account to get started
          </button> */}
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>
      <div class="container-about">
        <div class="content">
          <div class="text-section">
            <p class="section-title">About Us</p>
            <h1>
            "Redefining Loyalty, Reinventing Commerce."
            </h1>
          </div>
          <div class="text-box">
            <p>
            At PathSynch, we are reshaping the future of customer engagement by seamlessly integrating cutting-edge technology with innovative solutions. By leveraging the power of artificial intelligence (AI), we provide businesses with actionable insights that enable them to connect with their customers on a deeper level. Our approach is designed to help businesses understand consumer behavior more effectively, offering them the tools to not only engage with customers but to also build meaningful, long-term relationships.
            </p>
            <p>
            For businesses ranging from local shops to global eCommerce brands, PathSynch provides the tools to drive measurable success and growth. Local businesses benefit from the ability to attract new customers while nurturing existing ones through targeted loyalty campaigns. Enterprises can optimize customer engagement at scale, using data-driven insights to refine strategies and improve overall efficiency.
            </p>
            <p>
              Vestibulum habitant morbi tristique senectus et netus et malesuada
              fames ac turpis egestas. Maecenas ullamcorper neque vitae nibh
              bibendum, nec sodales nisl facilisis.
            </p>
          </div>
        </div>
      </div>
      <div>
        <CarouselComponent />
      </div>
      <section className="our-story">
        <div className="container">
          {/* <h5>Our Story</h5> */}
          <h2>
            <strong>Join Us on the Path to Success</strong>
          </h2>
          <p className="intro-text">
          We’re more than just a technology company—we’re your partner in growth. Whether you’re looking to enhance your customer engagement, improve your review strategy, or create a loyalty program that truly works, PathSynch has the solutions to help you succeed.
          </p>
          <p className="description">
          We envision a world where businesses and customers are more connected than ever, where loyalty isn’t just about rewards—it’s about experiences, trust, and engagement
          </p>
          <div className="image-gallery">
            <img
              src="/os1.png"
              alt="Team Collaboration"
              className="image-large"
            />
            <img src="/os2.png" alt="Team Discussion" className="image-small" />
          </div>
        </div>
      </section>
      <div className="timeline-container">
        <h2>What We do</h2>
        <p>  PathSynch is a comprehensive loyalty, feedback, and engagement platform that combines</p>
        <div className="timeline">
          <div className="timeline-wrap">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>PathSynch Marketplace</h3>
                <p>
                A dynamic two-sided marketplace where businesses promote deals, events, and experiences to engaged customers.
                </p>
              </div>
            </div>
            <div className="empty-div"></div>
          </div>

          <div className="timeline-wrap right-timeline">
            <div className="empty-div"></div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>PathConnect</h3>
                <p>
                AI-powered, NFC-enabled feedback collection tools that allow businesses to gather and analyze customer sentiment in real tim
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-wrap">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>CommerceSynch</h3>
                <p>
                A gamified loyalty engine that helps businesses drive repeat visits, increase customer retention, and incentivize engagement.
                </p>
              </div>
            </div>
            <div className="empty-div"></div>
          </div>
          <div className="timeline-wrap right-timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>PathManager</h3>
                <p>
                  Duis at risus, fermentum non tempus quis, cursus convallis
                  nunc. Sed ultricies id id tristique tempus ultricies eu ex.A powerful analytics dashboard providing businesses with insights into customer behavior, loyalty trends, and review performance.
                </p>
              </div>
            </div>
          </div>
          
        </div>
        <h5>By integrating customer acquisition, engagement, and loyalty into one seamless ecosystem, we provide businesses with a holistic solution to thrive in an increasingly digital and competitive landscape.</h5>
      </div>
      <div className="values-container">
        {/* <h2>Our Values</h2> */}
        <div className="values-grid">
          <div className="value-card">
            <div className="icon">
              <img src="t1.png" alt="Value Icon 1" />
            </div>
            <h3>Our Vision</h3>
            <p>We envision a world where businesses and customers are more connected than ever, where loyalty isn’t just about rewards—it’s about experiences, trust, and engagement.</p>
          </div>
          <div className="value-card">
            <div className="icon">
              <img src="t2.png" alt="Value Icon 2" />
            </div>
            <h3>Our Mission</h3>
            <p>We believe that customer loyalty should be more than just transactions—it should be about authentic connections and shared experiences. Our mission is to empower businesses with smarter engagement tools.</p>
          </div>
          <div className="value-card">
            <div className="icon">
              <img src="t3.png" alt="Value Icon 3" />
            </div>
            <h3>PathSynch</h3>
            <p>The Future of Customer Loyalty & Engagement Starts Here.By leveraging the latest in AI, blockchain-based loyalty, and real-time customer insights, PathSynch is setting a new standard for customer relationships in the digital age.</p>
          </div>
        </div>
      </div>
      {/* <div class="restaurant-choices">
        <section className="steps-section">
          <div className="business-growth growth-section">
            <h3>Duis condimentum eu nisl et mollis</h3>
            <p>
            Vestibulum quis dictum leo. Maecenas turpis neque, posuere blandit volutpat cursus.
            </p>
            <button className="join-btn">Buy Now</button>
          </div>
        </section>
      </div> */}
      <Footer />
    </div>
  );
}

export default About;
