import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Accordion from './Accordion'
import CommonTab from './CommonTab'
import AccordianTravel from './AccordianTravel'
import CommonTravel from './CommonTravel'

const Travel = () => {
  return (
    <div>
        <Header/>
        <section class="product-section">
                <div class="container">
                    <h1>Travel & Places to Stay</h1>
                    <p>Connect with Travelers, Maximize Bookings, and Create Memorable Stays.</p>
               <button className='common_btn'>Create a free account to get started</button>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>

            <section className="why-join-section">
        <h2>Why Join PathSynch Marketplace for Travel & Hospitality?</h2>
        <p>
        The PathSynch Marketplace is designed to help travel and
         hospitality businesses—hotels, vacation rentals, bed-and-breakfasts,
          and unique accommodations—reach new guests, fill rooms, and build loyalty. 
          Whether you want to promote last-minute bookings, highlight exclusive packages,
           or drive repeat stays, PathSynch provides the tools to elevate your business.
        </p>
        <p>With integrated solutions like PathConnect for real-time guest feedback and
           CommerceSynch for gamified loyalty programs, PathSynch enables you to create
            exceptional experiences while driving long-term growth.</p>
      </section>
      <section>
        <h4 className='common-heading'>Benefits for Travel & Hospitality Businesses</h4>
        <div className='accordian-wrap'>
          <AccordianTravel />
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
        <h2>How PathSynch Supports Your Business</h2>
        <CommonTravel />

      </div>
      <div class="restaurant-promotions">
        <h2>Popular Promotions for Travel & Hospitality Businesses</h2>
        <p>Here are some examples of campaigns you can run on PathSynch Marketplace:</p>

        <div class="promotion-list">
          <div class="promotion-item">
            <div class="promo-number">01</div>
            <div class="promo-content">
              
              <p><strong>Last-Minute Deals: </strong>Offer discounted rates for rooms available within the next 48 hours.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">02</div>
            <div class="promo-content">
              <p><strong>Seasonal Packages:</strong> Highlight holiday, summer, or winter escape packages.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">03</div>
            <div class="promo-content">
             
              <p><strong>Extended Stay Discounts: </strong>Incentivize longer stays with "Stay More, Save More" promotions.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">04</div>
            <div class="promo-content">
              
              <p><strong>Referral Rewards: </strong>Reward guests who refer friends or family with exclusive discounts or points.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">05</div>
            <div class="promo-content">
              
              <p><strong>Gift Cards:</strong> Drive additional revenue with gift cards for special occasions.</p>
            </div>
          </div>

        </div>
      </div>
      <div class="restaurant-choices">
        <section className="steps-section">
          <div></div>
          <h2>How to Get Started</h2>
          <p>Joining the PathSynch Marketplace is simple and starts delivering results quickly:</p>

          <div className="steps-container">
            <div className="step">
              <span className="step-number">01</span>
              <div className="step-content">
                <p>Step 01</p>
                <h4>Sign Up</h4>
                <p> Complete the merchant intake form to join PathSynch.</p>
              </div>
            </div>

            <div className="step middle-step">
              <span className="step-number">02</span>

              <div className="step-content">
                <p>Step 02</p>
                <h4>Set Up Your Account</h4>
                <p>Use the self-service Marketplace Manager to create and customize your promotions.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Launch Your Offers</h4>
                <p>
                Take your promotions live and start connecting with travelers in as little as 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2>Why PathSynch is Perfect for Travel & Hospitality Businesses</h2>
            <div class="choice-list">
              <div class="choice-item">
                <div class="choice-header measurable">Targeted Reach</div>
                <p>Connect with local and global travelers looking for places to stay and experiences to enjoy.</p>
                <div class="choice-number">01</div>
              </div>
              <div class="choice-item">
                <div class="choice-header growth">Integrated Solutions</div>
                <p>Combine booking promotions, loyalty rewards, and real-time feedback into one unified platform.</p>
                <div class="choice-number">02</div>
              </div>
              <div class="choice-item">
                <div class="choice-header engagement">Data-Driven Growth</div>
                <p>Use PathManager to track performance, analyze guest feedback, and optimize your strategies.</p>
                <div class="choice-number">03</div>
              </div>
              <div class="choice-item">
                <div class="choice-header engagement">Cost-Effective Results</div>
                <p>Pay only for actual bookings and successful referrals, ensuring maximum ROI.</p>
                <div class="choice-number">04</div>
              </div>
            </div>
          </div>
          <div className="business-growth growth-section">
            <h3>Transform Your Travel Business with PathSynch</h3>
            <p>Whether you’re a boutique hotel, a vacation rental host, or a luxury resort, PathSynch Marketplace helps you attract guests, build loyalty, and create exceptional stays. With tools like PathConnect and CommerceSynch, you can deliver seamless experiences that keep travelers coming back for more.
            </p>
            <button className="join-btn">Join the Marketplace Today</button>
          </div>
        </section>
      </div>
    <Footer/>
    </div>
  )
}

export default Travel
