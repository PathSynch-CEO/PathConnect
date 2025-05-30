import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import AccordianExperinces from './AccordianExperinces'
import CommonExperinces from './CommonExperinces'

const Experiences = () => {
    return (
        <div>
            <Header />
            <section class="product-section">
                <div class="container">
                    <h1>Experiences</h1>
                    <p>Connect with Adventurers, Inspire New Memories, and Drive Repeat Engagement.</p>
                    <button className='common_btn'>Create a free account to get started</button>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>

            <section className="why-join-section">
                <h2>Why Choose PathSynch Marketplace for Your Experiences Business?</h2>
                <p>
                    The PathSynch Marketplace is designed to help businesses offering unique experiences—from adventure tours and workshops to cultural events and entertainment—connect with customers actively looking for memorable activities. Whether you’re looking to fill seats, increase bookings, or drive repeat customers, PathSynch offers the tools to help your business grow, engage, and succeed.
                </p>
            </section>
            <section>
        <h4 className='common-heading'>Benefits for Experience Providers</h4>
        <div className='accordian-wrap'>
          <AccordianExperinces />
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
        <h2>How PathSynch Supports Your Experiences Business</h2>
        <CommonExperinces />

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
                <p>Follow the instructions to access the self-service Marketplace Manager.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Create Offers</h4>
                <p>
                Create and publish tailored promotions that attract customers and drive bookings.
                </p>
              </div>
            </div>
          </div>
          <div>
       <h2>Why PathSynch is Perfect for Experience Providers</h2>
        <div class="choice-list">
          <div class="choice-item">
            <div class="choice-header measurable">Broader Reach</div>
            <p>Connect with a growing audience eager for unique experiences and adventures.</p>
            <div class="choice-number">01</div>
          </div>
          <div class="choice-item">
            <div class="choice-header growth">Seamless Integration</div>
            <p>Combine customer acquisition, loyalty, and feedback tools into one streamlined platform.</p>
            <div class="choice-number">02</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Pay-for-Performance Model</div>
            <p>No upfront costs—only pay when you acquire new customers.</p>
            <div class="choice-number">03</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Real-Time Analytics</div>
            <p>Use PathManager to track deal performance, customer engagement, and loyalty metrics.</p>
            <div class="choice-number">04</div>
          </div>
        </div>
       </div>
          <div className="business-growth growth-section">
            <h3>Grow Your Experiences Business with PathSynch</h3>
            <p>PathSynch Marketplace is the perfect partner for experience providers looking to inspire, engage, and retain customers. With integrated tools like CommerceSynch and PathConnect, you can build long-term relationships, improve your offerings, and drive sustainable growth.</p>
            <button className="join-btn">Join the Marketplace Today</button>
          </div>
        </section>
      </div>
            <Footer />
        </div>
    )
}

export default Experiences
