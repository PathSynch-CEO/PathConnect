import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import Accordion from './Accordion'

import CommonTab from './CommonTab'

const RestaurantCategory = () => {
  return (
    <div>
      <Header />
      <section class="product-section">
        <div class="container">
          <h1>Restaurants & Food</h1>
          <p>Fill Your Tables, Delight Your Customers, and Grow Your Business with PathSynch.</p>
          {/* <button className='common_btn'>Create a free account to get started</button> */}
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>

      <section className="why-join-section">
        <h2>Why Join the PathSynch Marketplace?</h2>
        <p>
          The PathSynch Marketplace is designed to help restaurants, cafes, and food businesses connect with local
          customers, boost visibility, and increase revenue. Whether you’re looking to fill empty tables, promote new
          menu items, or offer special deals, PathSynch is your partner for measurable growth.
        </p>
      </section>
        <section>
          <h4 className='common-heading'>Benefits for Restaurants & Food Businesses</h4>
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
        <h2>How PathSynch Helps Restaurants Grow</h2>
        <CommonTab />

      </div>
      <div class="restaurant-promotions">
        <h2>Examples of Promotions for Restaurants</h2>
        <p>Here are just a few ideas for offers you can create on PathSynch.</p>

        <div class="promotion-list">
          <div class="promotion-item">
            <div class="promo-number">01</div>
            <div class="promo-content">
              <h3>Lunch Specials</h3>
              <p>Attract professionals with weekday lunch promotions.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">02</div>
            <div class="promo-content">
              <h3>Happy Hour Deals</h3>
              <p>Fill tables during off-peak hours with discounted drinks and appetizers.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">03</div>
            <div class="promo-content">
              <h3>Seasonal Menus</h3>
              <p>Promote new or limited-time dishes to build excitement.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">04</div>
            <div class="promo-content">
              <h3>Event Nights</h3>
              <p>Host trivia, live music, or themed dining experiences to boost engagement.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">05</div>
            <div class="promo-content">
              <h3>Gift Vouchers</h3>
              <p>Encourage holiday gifting with easy-to-purchase gift cards through the platform.</p>
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
       <h2>Why Restaurants Choose PathSynch</h2>
        <div class="choice-list">
          <div class="choice-item">
            <div class="choice-header measurable">Measurable ROI</div>
            <p>Track deal performance, customer visits, and feedback in real-time through the PathManager dashboard.</p>
            <div class="choice-number">01</div>
          </div>
          <div class="choice-item">
            <div class="choice-header growth">Cost-Effective Growth</div>
            <p>Pay only when you acquire new customers — no wasted spend.</p>
            <div class="choice-number">02</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Unified Engagement</div>
            <p>Combine promotions, loyalty rewards, and customer feedback for a seamless, impactful experience.</p>
            <div class="choice-number">03</div>
          </div>
        </div>
       </div>
          <div className="business-growth growth-section">
            <h3>Let’s Grow Your Restaurant Together</h3>
            <p>Ready to fill your tables, increase repeat business, and stand out in the competitive food and dining space? Join PathSynch Marketplace today and see how our platform, combined with CommerceSynch and PathConnect, can add unparalleled value to your restaurant.</p>
            <button className="join-btn">Join PathSynch Marketplace</button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default RestaurantCategory
