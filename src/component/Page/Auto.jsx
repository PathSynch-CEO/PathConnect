import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Accordion from './Accordion'
import CommonTab from './CommonTab'
import AccordianAuto from './AccordianAuto'
import CommonAuto from './CommonAuto'

const Auto = () => {
  return (
    <div>
        <Header/>
        <section class="product-section">
                <div class="container">
                    <h1>Auto</h1>
                    <p>Drive Traffic, Build Loyalty, and Accelerate Your Business Growth.</p>
               {/* <button className='common_btn'>Create a free account to get started</button> */}
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
        <h4 className='common-heading'>Benefits for Automotive Businesses</h4>
        <div className='accordian-wrap'>
          <AccordianAuto />
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
        <h2>How PathSynch Supports Automotive Businesses</h2>
        <CommonAuto />

      </div>
      <div class="restaurant-promotions">
        <h2>Popular Promotions for Automotive Businesses</h2>
        <p>Here are some ideas for successful campaigns you can run on PathSynch Marketplace:</p>

        <div class="promotion-list">
          <div class="promotion-item">
            <div class="promo-number">01</div>
            <div class="promo-content">
              <p><strong>Seasonal Maintenance Deals:</strong> Promote seasonal checkups and services (e.g., "Summer Road Trip Inspection Package").</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">02</div>
            <div class="promo-content">
              <p><strong>Bundled Services:</strong> Offer packages combining multiple services at a discounted rate.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">03</div>
            <div class="promo-content">
             
              <p><strong> New Customer Specials:</strong>Attract first-time clients with exclusive offers. </p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">04</div>
            <div class="promo-content">
             
              <p><strong>Accessory Discounts: </strong>Highlight deals on performance parts, car care products, or custom upgrades.</p>
            </div>
          </div>

        </div>
      </div>
      <div class="restaurant-choices">
        <section className="steps-section">
          <div></div>
          <h2>How to Get Started</h2>
          <p>Joining the PathSynch Marketplace is simple and can help you start driving results immediately:</p>

          <div className="steps-container">
            <div className="step">
              <span className="step-number">01</span>
              <div className="step-content">
                <p>Step 01</p>
                <h4>Sign Up</h4>
                <p> Complete the merchant intake form to begin.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">02</span>

              <div className="step-content">
                <p>Step 02</p>
                <h4>Set Up Your Account</h4>
                <p>Use the self-service Marketplace Manager to build and customize your promotions.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Launch Your Offers</h4>
                <p>
                Publish your deals and start connecting with customers in as little as 24 hours.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2>Why PathSynch is Perfect for Automotive Businesses</h2>
            <div class="choice-list">
              <div class="choice-item">
                <div class="choice-header measurable">Targeted Visibility</div>
                <p> Reach car owners and enthusiasts actively seeking services, parts, and accessories.</p>
                <div class="choice-number">01</div>
              </div>
              <div class="choice-item">
                <div class="choice-header growth">Integrated Solutions</div>
                <p>Combine promotions, loyalty programs, and real-time feedback into one unified platform.</p>
                <div class="choice-number">02</div>
              </div>
              <div class="choice-item">
                <div class="choice-header engagement">Actionable Insights</div>
                <p>Use PathManager to track deal performance, customer satisfaction, and loyalty engagement.</p>
                <div class="choice-number">03</div>
              </div>
              <div class="choice-item">
                <div class="choice-header engagement">Cost-Effective</div>
                <p>Only pay for results—no wasted advertising spend on clicks or views.</p>
                <div class="choice-number">04</div>
              </div>
            </div>
          </div>
          <div className="business-growth growth-section">
            <h3>Drive Growth for Your Automotive Business with PathSynch</h3>
            <p>Whether you’re an auto repair shop, a detailing service, or a car accessories retailer, PathSynch Marketplace is the perfect platform to grow your business. With CommerceSynch and PathConnect, you can attract new customers, build loyalty, and refine your offerings for maximum impact.
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
