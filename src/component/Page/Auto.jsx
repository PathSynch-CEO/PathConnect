import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Accordion from './Accordion'
import CommonTab from './CommonTab'

const Auto = () => {
  return (
    <div>
        <Header/>
        <section class="product-section">
                <div class="container">
                    <h1>Auto</h1>
                    <p>Drive Traffic, Build Loyalty, and Accelerate Your Business Growth.</p>
               <button className='common_btn'>Create a free account to get started</button>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>

            <section className="why-join-section">
        <h2>Why Join PathSynch Marketplace for Automotive Businesses?</h2>
        <p>
        The PathSynch Marketplace is your go-to platform for connecting with car owners and enthusiasts looking for trusted automotive services, products, and experiences. Whether you run an auto repair shop, a car detailing service, a tire dealership, or a performance parts store, PathSynch helps you attract new customers, optimize service schedules, and build long-term loyalty.

With the added power of PathConnect for real-time feedback and CommerceSynch for loyalty rewards, PathSynch is designed to help automotive businesses thrive in a competitive market.
        </p>
      </section>
      <section>
        <h4 className='common-heading'>Benefits for Businesses Offering Things to Do</h4>
        <div className='accordian-wrap'>
          <Accordion />
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
        <CommonTab />

      </div>
      <div class="restaurant-promotions">
        <h2>Popular Promotions for Things to Do</h2>
        <p>Here are just a few types of offers you can run on PathSynch Marketplace:</p>

        <div class="promotion-list">
          <div class="promotion-item">
            <div class="promo-number">01</div>
            <div class="promo-content">
              <h3>Weekday Discounts:</h3>
              <p> Attract customers during slower periods with reduced pricing.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">02</div>
            <div class="promo-content">
              <h3>Exclusive Family Packages:</h3>
              <p> Create bundled offers for families or groups.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">03</div>
            <div class="promo-content">
              <h3>Seasonal Promotions:</h3>
              <p>Highlight special holiday or seasonal activities (e.g., "Fall Pumpkin Patch Adventure").</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">04</div>
            <div class="promo-content">
              <h3>Gift Cards and Vouchers:</h3>
              <p> Increase revenue with gift cards that encourage new customers to try your experiences.</p>
            </div>
          </div>

        </div>
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
                <p> Complete the merchant intake form to join PathSynch.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">02</span>

              <div className="step-content">
                <p>Step 02</p>
                <h4>Set Up Your Account</h4>
                <p>Use our self-service Marketplace Manager to create and customize promotions.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Go Live</h4>
                <p>
                  Publish your offers and start attracting customers within 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2>Why Choose PathSynch for Your Business?</h2>
            <div class="choice-list">
              <div class="choice-item">
                <div class="choice-header measurable">Targeted Reach</div>
                <p>Connect with adventure seekers and families searching for exciting things to do nearby.</p>
                <div class="choice-number">01</div>
              </div>
              <div class="choice-item">
                <div class="choice-header growth">Integrated Solutions</div>
                <p>Combine customer acquisition, loyalty rewards, and feedback collection into one powerful platform.</p>
                <div class="choice-number">02</div>
              </div>
              <div class="choice-item">
                <div class="choice-header engagement">Actionable Insights</div>
                <p>Use PathManager to track performance, analyze feedback, and refine your strategies.</p>
                <div class="choice-number">03</div>
              </div>
              <div class="choice-item">
                <div class="choice-header engagement">Pay-for-Performance Model</div>
                <p>Only pay when customers engage with or book your activities.</p>
                <div class="choice-number">04</div>
              </div>
            </div>
          </div>
          <div className="business-growth growth-section">
            <h3>Let PathSynch Help You Grow Your Business</h3>
            <p>Whether you’re an adventure park, entertainment venue, or cultural attraction, PathSynch Marketplace helps you attract customers, optimize their experiences, and keep them coming back. With tools like PathConnect and CommerceSynch, you can turn memorable outings into lasting relationships and sustainable growth.
            </p>
            <button className="join-btn">Join the Marketplace Today</button>
          </div>
        </section>
      </div>

    <Footer/>
    </div>
  )
}

export default Auto
