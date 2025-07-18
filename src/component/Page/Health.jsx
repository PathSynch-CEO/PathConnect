import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CommonTab from './CommonTab'
import AccordianHealth from './AccordianHealth'
import CommonHealth from './CommonHealth'

const Health = () => {
  return (
    <div>
      <Header />
      <section class="product-section">
        <div class="container">
          <h1>Health and Beauty</h1>
          <p>Connect with Clients, Boost Bookings, and Build Lasting Relationships.</p>
          {/* <button className='common_btn'>Create a free account to get started</button> */}
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>

      <section className="why-join-section">
        <h2>Why Join PathSynch Marketplace for Health & Beauty?</h2>
        <p>
          The PathSynch Marketplace is tailored to help health and beauty businesses—salons, spas, wellness studios, personal care providers, and beauty retailers—reach new clients, increase bookings, and grow customer loyalty. Whether you’re looking to promote your services, fill appointment slots, or launch exclusive offers, PathSynch provides the tools you need to thrive in a competitive market.

          With integrated solutions like PathConnect for real-time customer feedback and CommerceSynch for gamified loyalty programs, PathSynch empowers you to elevate the client experience and drive long-term growth.
        </p>
      </section>
      <section>
        <h4 className='common-heading'>Benefits for Health & Beauty Businesses</h4>
        <div className='accordian-wrap'>
          <AccordianHealth />
          <div className='accor-img'>
            <div>
              <img src='ac2.svg' />
            </div>
            <div>
              <img src='ac1.svg' />
            </div>
          </div>
        </div>

      </section>
      <div className="restaurant-growth">
        <h2>How PathSynch Can Grow Your Health & Beauty Business</h2>
        <CommonHealth />

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
                <p>Complete the merchant intake form to begin.</p>
              </div>
            </div>

            <div className="step middle-step">
              <span className="step-number">02</span>

              <div className="step-content">
                <p>Step 02</p>
                <h4>Set Up Your Account</h4>
                <p>Access the self-service Marketplace Manager to build and customize your promotions.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Create Offers</h4>
                <p>
                Take your deals live and start attracting clients within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div>
       <h2>Why PathSynch is Perfect for Event Organizers</h2>
        <div class="choice-list">
          <div class="choice-item">
            <div class="choice-header measurable">Targeted Visibility</div>
            <p>Reach customers who are actively searching for health and beauty services in your area.</p>
            <div class="choice-number">01</div>
          </div>
          <div class="choice-item">
            <div class="choice-header growth">Integrated Solutions</div>
            <p>Combine customer acquisition, loyalty rewards, and real-time feedback into a single platform.</p>
            <div class="choice-number">02</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Measurable Results</div>
            <p>Use PathManager to track campaign performance, client feedback, and loyalty engagement.</p>
            <div class="choice-number">03</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Pay-for-Performance</div>
            <p>Only pay for results—new clients, completed bookings, or redeemed deals.</p>
            <div class="choice-number">04</div>
          </div>
        </div>
       </div>
          <div className="business-growth growth-section">
            <h3>Grow Your Health & Beauty Business with PathSynch</h3>
            <p>Attract new clients, fill appointment slots, and keep customers coming back with the power of PathSynch Marketplace, CommerceSynch, and PathConnect. Take your business to the next level by combining customer acquisition, engagement, and loyalty into one seamless platform.</p>
            <button className="join-btn">Join the Marketplace Today</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default Health
