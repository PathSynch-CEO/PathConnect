import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import CommonTab from './CommonTab'
import AccordianEvents from './AccordianEvents'
import Commontabevents from './Commontabevents'

const Events = () => {
  return (
    <div>
        <Header/>
        <section class="product-section">
                <div class="container">
                    <h1>Events</h1>
                    <p>Promote Your Events, Fill Seats, and Keep Attendees Coming Back.</p>
               {/* <button className='common_btn'>Create a free account to get started</button> */}
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>

            <section className="why-join-section">
        <h2>Why Choose PathSynch Marketplace for Your Events?</h2>
        <p>
        The PathSynch Marketplace is your go-to platform for promoting events, driving ticket sales, and creating meaningful connections with your audience. Whether you’re hosting concerts, festivals, workshops, or community gatherings, PathSynch helps you attract attendees, gather valuable feedback, and build lasting loyalty with powerful tools like PathConnect and CommerceSynch.
        </p>
      </section>
      <section>
        <h4 className='common-heading'>Benefits for Event Organizers</h4>
        <div className='accordian-wrap'>
          <AccordianEvents />
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
        <h2>How PathSynch Supports Your Events Business</h2>
        <Commontabevents />

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
       <h2>Why PathSynch is Perfect for Event Organizers</h2>
        <div class="choice-list">
          <div class="choice-item">
            <div class="choice-header measurable">Targeted Reach</div>
            <p>Connect with local customers actively seeking events and experiences.</p>
            <div class="choice-number">01</div>
          </div>
          <div class="choice-item">
            <div class="choice-header growth">Seamless Integration</div>
            <p>Combine ticket promotions, feedback collection, and loyalty tools for a unified event strategy.</p>
            <div class="choice-number">02</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement"> Real-Time Insights</div>
            <p>Track performance, monitor attendee feedback, and improve engagement using the PathManager dashboard.</p>
            <div class="choice-number">03</div>
          </div>
          <div class="choice-item">
            <div class="choice-header engagement">Cost-Effective Growth</div>
            <p>Pay only when customers engage and attend—no wasted marketing spend.</p>
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

    <Footer/>
    </div>
  )
}

export default Events
