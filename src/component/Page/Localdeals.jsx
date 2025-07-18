import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AccordianLocal from './AccordianLocal'
import CommanTabLocal from './CommanTabLocal'

const Localdeals = () => {
  return (
    <div>
      <Header />
      <section class="product-section">
        <div class="container">
          <h1>Local Deals</h1>
          <p>Connect with Local Shoppers, Drive Foot Traffic, and Build Lasting Loyalty.</p>
          {/* <button className='common_btn'>Create a free account to get started</button> */}
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>

      <section className="why-join-section">
        <h2>Why Local Businesses Choose PathSynch Marketplace?</h2>
        <p>
          The PathSynch Marketplace is designed to help local merchants, from retailers and service providers to wellness studios and event hosts, connect with nearby customers and create irresistible local offers. Whether you want to boost foot traffic, attract new clients, or increase repeat business, PathSynch provides the tools to help your business thrive.
        </p>
      </section>
      <section>
        <h4 className='common-heading'>
        Benefits for Local Businesses
        </h4>
      <div className='accordian-wrap'>
       <AccordianLocal />
       <div className='accor-img'>
        <div>
        <img src='ac2.svg'/>
        </div>
        <div>
        <img src='ac1.svg'/>
        </div>
       </div>
       </div>
       
      </section>
      <div className="restaurant-growth">
        <h2>How PathSynch Adds Value to Local Businesses</h2>
        <CommanTabLocal />

      </div>
      <div class="restaurant-choices">
          <section className="steps-section">
            <div></div>
          <h2>How to Get Started</h2>
          <p>Joining the PathSynch Marketplace is quick and easy:</p>

          <div className="steps-container">
            <div className="step">
              <span className="step-number">01</span>
              <div className="step-content">
                <p>Step 01</p>
                <h4>Sign Up</h4>
                <p>Complete the merchant intake form on our website.</p>
              </div>
            </div>

            <div className="step middle-step">
              <span className="step-number">02</span>

              <div className="step-content">
                <p>Step 02</p>
                <h4>Set Up Your Account</h4>
                <p>Follow the instructions to access your self-service Marketplace Manager.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Create Offers</h4>
                <p>
                Build, customize, and launch promotions tailored to your business goals.
                </p>
              </div>
            </div>
          </div>
          <div>
       <h2>Why PathSynch is Perfect for Local Deals</h2>
        <div class="choice-list">
          <div class="choice-item">
            <div class="choice-header measurable">Hyper-Local Reach</div>
            <p>Connect with customers near you who are ready to shop, book services, or attend events.</p>
            <div class="choice-number">01</div>
          </div>
          <div class="choice-item">
            <div class="choice-header growth">Seamless Integration</div>
            <p>Combine customer acquisition, loyalty rewards, and feedback into one unified platform.</p>
            <div class="choice-number">02</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Real-Time Results</div>
            <p>Track deal performance, monitor customer engagement, and respond to feedback instantly.</p>
            <div class="choice-number">03</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Pay-for-Performance</div>
            <p>No upfront costs—only pay for actual customers who redeem your offers.</p>
            <div class="choice-number">04</div>
          </div>
        </div>
       </div>
          <div className="business-growth growth-section">
            <h3>Grow Your Local Business with PathSynch</h3>
            <p>Whether you’re a boutique shop, a wellness center, or a community-focused business, PathSynch Marketplace helps you attract new customers, engage your community, and retain clients with powerful tools like CommerceSynch and PathConnect.</p>
            <button className="join-btn">Join the Marketplace Today</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Localdeals
