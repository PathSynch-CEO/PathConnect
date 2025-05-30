import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import GoogleAccordian from "./GoogleAccordian";

const GoogleManagement = () => {
  return (
    <div>
      <Header />
      <section class="product-section">
        <div class="container">
          <h1>Google My Business Management</h1>
          <p>
            Enhance your local online presence with PathSynch's Google My
            Business (GMB) Management Services. Our <br></br> comprehensive
            solutions are designed to optimize your GMB listing, ensuring your
            business stands out in local<br></br> searches and attracts more
            customers.
          </p>
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>
      <div className="gmb-optimization-container">
        <div className="gmb-content">
          <h2>Why Google My Business Optimization Matters</h2>
          <p>
            A well-managed GMB profile is crucial for local SEO success. It
            enhances your visibility on Google Search and Maps, making it easier
            for potential customers to find and engage with your business.
            Effective GMB management leads to increased website traffic,
            customer inquiries, and, ultimately, higher sales.
          </p>
        </div>
        <div className="gmb-image">
          <img src="go1.png" alt="Business meeting" />
        </div>
      </div>
      <div className="gmb-services">
        <h2>Our GMB Management Services</h2>

        <div className="service-card">
          <h3 className="service-title">
            1. Comprehensive Business Listing Management
          </h3>
          <ul>
            <li>
              <img src="ga.png" />
              <strong>Accurate Information:</strong> We ensure your business
              name, address, phone number, and operating hours are consistently
              <br></br> updated across all platforms.
            </li>
            <li>
              <img src="ga.png" />
              <strong>Category Optimization:</strong> Selecting the most
              relevant categories to improve your search ranking.
            </li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">2. Engaging Multimedia Content</h3>
          <ul>
            <li>
              <img src="ga.png" />
              <strong>High-Quality Photos and Videos:</strong> Regularly
              updating your profile with professional images and videos to
              <br></br>
              attract potential customers.
            </li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">3. Customer Review Management</h3>
          <ul>
            <li>
              <img src="ga.png" />
              <strong>Review Monitoring:</strong> Keeping track of customer
              feedback to maintain a positive online reputation.
            </li>
            <li>
              <img src="ga.png" />
              <strong>Response Strategy:</strong> Crafting personalized
              responses to reviews to foster customer trust and engagement.
            </li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">
            4. Insightful Analytics and Reporting
          </h3>
          <ul>
            <li>
              <img src="ga.png" />
              <strong>Performance Tracking:</strong> Providing detailed reports
              on your GMB profile’s performance, including<br></br> search
              views, customer actions, and engagement metrics.
            </li>
            <li>
              <img src="ga.png" />
              <strong>Actionable Insights:</strong> Analyzing data to inform
              strategies for continuous improvement.
            </li>
          </ul>
        </div>

        <div className="service-card">
          <h3 className="service-title">5. Regular Posts and Updates</h3>
          <ul>
            <li>
              <img src="ga.png" />
              <strong>Promotional Posts:</strong> Sharing updates about offers,
              events, and news to keep your audience informed and engaged.
            </li>
            <li>
              <img src="ga.png" />
              <strong>Q&A Management:</strong> Addressing common customer
              questions to enhance the user experience.
            </li>
          </ul>
        </div>
      </div>
      <section>
        <h4 className="common-heading">
          Benefits of Our GMB Management Services
        </h4>
        <div className="accordian-wrap">
          <GoogleAccordian />
          <div className="accor-img">
            <div className="short-img">
              <div>
                <img src="gb1.png" />
              </div>
              <div>
                <img src="gb2.png" />
              </div>
            </div>
            <div className="large-img">
              <img src="gb3.png" />
            </div>
          </div>
        </div>
      </section>
      <div class="restaurant-choices">
        <section className="steps-section">
          <div className="business-growth growth-section">
            <h3>Get Started with PathSynch Today</h3>
            <p>
              Partner with PathSynch to maximize your business's potential on
              Google. Our tailored GMB management services are designed to meet
              your unique needs and drive measurable results.
            </p>
            <button className="join-btn">Contact Us Today to Learn More</button>
          </div>
        </section>
      </div>

      <section className="inline-stats">
      <p>
        By leveraging Perfeqta's GMB Management Services, your business can achieve
        greater visibility, attract more customers, and maintain a strong online
        reputation. Let us help you navigate the complexities of local SEO and position
        your business for success.
      </p>
      <h3>Work in these stats</h3>
      <div className="stats-container">
        <div className="stat-card">
          <p>
            A survey found that 85% of consumers felt that key services within the first
            two weeks impacted their decision in 2021.
          </p>
        </div>
        <div className="stat-card">
          <p>
            Research suggests that 49% of customers won't choose something from a
            business with less than an average star rating of four.
          </p>
        </div>
        <div className="stat-card">
          <p>
            35% of customers stated they were highly unlikely to leave a review if a
            business failed to respond to all of its online reviews.
          </p>
        </div>
        <div className="stat-card">
          <p>
            Did you know that displaying positive reviews can increase conversion rates
            by 20%?
          </p>
        </div>
      </div>
    </section>
    <div className="contact-form-container">
      <h2>Curabitur rutrum, dui vel commodo maximus</h2>
      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="form-row">
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Restaurant Name" />
          <input type="text" placeholder="Other POS" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Address" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="Zip Code" />
        </div>
        <div className="form-row">
          <textarea placeholder="Message"></textarea>
        </div>
        <button type="submit">Get In Touch</button>
      </form>
    </div>
      <Footer />
    </div>
  );
};

export default GoogleManagement;
