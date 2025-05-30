import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const PathConnect = () => {
    return (
        <div>
            <Header />
            <section class="product-section">
                <div class="container">
                    <h1><span>PathConnect Solution:</span> Transform<br></br>  Customer Feedback into Business Growth</h1>
                    <p>Real-Time Feedback. Actionable Insights. PathConnect.</p>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>

            <section class="marketplace-section">
                <div class="container">
                    <div class="text-content">
                        <h2>What Is the PathConnect Solution?</h2>
                        <p>
                        PathConnect is PathSynch’s innovative customer feedback and analytics solution, designed to seamlessly capture and analyze customer input in real time. By leveraging NFC-enabled tools and AI-powered analytics, PathConnect empowers merchants to turn raw feedback into actionable insights. This allows businesses to enhance customer satisfaction, improve engagement, and refine their offerings for maximum impact.
                        </p>
                    </div>
                    <div class="image-content">
                        <img src="m1.svg" alt="People discussing marketplace solutions" />
                    </div>
                </div>
            </section>
            <div class="restaurant-promotions">
        <h2>How It Works</h2>
   

        <div class="promotion-list">
          <div class="promotion-item">
            <div class="promo-number">01</div>
            <div class="promo-content">
              <h3>Effortless Feedback Collection</h3>
              <p>Customers share feedback through a simple tap of PathConnect NFC cards or via the PathSynch app, eliminating barriers to participation.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">02</div>
            <div class="promo-content">
              <h3>Real-Time Analysis</h3>
              <p>PathConnect’s AI processes customer input instantly, identifying key trends, sentiment, and actionable opportunities.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">03</div>
            <div class="promo-content">
              <h3>Actionable Recommendations</h3>
              <p>Merchants receive clear, data-driven insights to improve service, optimize offerings, and boost overall satisfaction.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">04</div>
            <div class="promo-content">
              <h3>Integration with Loyalty Programs</h3>
              <p>Pair feedback with loyalty incentives to encourage participation and reward customers for sharing their opinions.</p>
            </div>
          </div>

        </div>
      </div>
            <section class="features-section">
                <h2>Key Features of PathConnect Solution</h2>
                <div class="features-container">
                    <div class="feature-card">
                        <span class="feature-number">01</span>
                        <h3>NFC-Enabled Tools</h3>
                        <p>Simplify feedback collection with tap-and-go technology, enabling customers to share their experiences in seconds.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">02</span>
                        <h3>Real-Time AI Analysis</h3>
                        <p>Transform raw feedback into detailed insights, including sentiment analysis, customer preferences, and actionable trends.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">03</span>
                        <h3>Customizable Feedback Forms</h3>
                        <p>Design feedback requests tailored to your business needs, from satisfaction surveys to product reviews.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">04</span>
                        <h3>Sentiment Analysis</h3>
                        <p>Gain a deeper understanding of how customers feel about your business, helping you address pain points and enhance positive experiences.</p>
                    </div>
                </div>
                {/* <div class="carousel-indicators">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div> */}
            </section>

            <section class="benefits-section">
               
               <div class="benefits-container reverse">
                  
                   <div class="benefit-content">
                       <h2>Benefits for Customers</h2>
                       <ul>
                           <li><strong>Convenient Feedback Sharing</strong>Provide input effortlessly using NFC cards or the app.</li>
                           <li><strong>Feel Valued</strong>Know their opinions are heard and lead to meaningful changes in service or offerings.</li>
                           <li><strong>Earn Rewards</strong>Receive loyalty points or exclusive offers for sharing feedback, creating a win-win experience.</li>
                           <li><strong>Improved Experiences</strong>Enjoy refined products and services based on collective customer input.</li>
                       </ul>
                   </div>
                   <div class="benefit-image">
                       <img src="gh2.svg" alt="Merchant Engagement" />
                   </div>
               </div>
               <div class="benefits-container">
               <div class="benefit-image">
                       <img src="gh1.svg" alt="Merchant Dashboard" />

                   </div>
                   <div class="benefit-content">
                       <h2>Benefits for Merchants</h2>
                       <ul>
                           <li><strong>Enhance Customer Satisfaction</strong>Address customer concerns in real time and improve overall experiences.</li>
                           <li><strong>Boost Engagement</strong>Encourage feedback with user-friendly tools and reward programs that drive participation.</li>
                           <li><strong>Make Smarter Decisions</strong>Use data-backed insights to refine offerings, optimize operations, and address customer needs effectively.</li>
                           <li><strong>Increase Loyalty</strong>Demonstrate that customer opinions matter by implementing their feedback, fostering trust and repeat business.</li>
                           <li><strong>Save Time</strong>Automate feedback collection and analysis, reducing manual effort and enabling faster responses.</li>
                       </ul>
                   </div>
                   
               </div>
               <div className='curse-wrap'>
                   <img src="curve.svg" alt="Merchant Dashboard" />
               </div>
           </section>
            <div className="marketplace-container">
                {/* Marketplace in Action */}
                <section className="marketplace-action">
                    <h2>PathConnect in Action</h2>
                    <p>
                    Imagine a customer visiting your café and using an NFC card to leave instant feedback about their experience. Within minutes, PathConnect’s AI processes the feedback, highlighting key insights such as satisfaction with service speed but concerns about menu variety. You receive this information in real time, allowing you to make immediate adjustments and even send the customer a thank-you reward for their input.
                    </p>
                    <div className="marketplace-images">
                        <img src="3img.svg" alt="Marketplace Dashboard 1" />
                        {/* <img src="" alt="Marketplace Dashboard 2" /> */}
                    </div>
                </section>
            </div>
            {/* Why Choose PathSynch */}
            <section className="why-choose">
                <div className="why-choose-image">
                    <img src="choose.png" alt="Businessman Using Mobile" />
                </div>
                <div className="why-choose-content">
                    <h2>Why Choose PathConnect?</h2>
                    <p>
                    PathConnect goes beyond traditional feedback tools by combining cutting-edge NFC technology, real-time AI insights, and seamless integration with loyalty programs. It’s designed to enhance customer engagement while providing actionable data that drives your business forward.
                    </p>
                </div>
            </section>
            {/* <!-- Business Categories Section --> */}
    

            {/* <!-- Business Benefits Section --> */}
            <section class="business-benefits">
                <h2>What Makes PathConnect Unique?</h2>
                <div class="benefit-cards">
                    <div class="benefit-card">
                        <span class="benefit-number">01</span>
                        <h3>Real-Time Feedback Processing</h3>
                        <p>Capture and analyze customer opinions instantly, enabling swift action.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">02</span>
                        <h3>Gamified Incentives</h3>
                        <p>Encourage feedback participation by rewarding customers with loyalty points or exclusive perks.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">03</span>
                        <h3>AI-Powered Insights</h3>
                        <p>Uncover trends and sentiment that help you better understand and serve your customers.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">04</span>
                        <h3>Seamless Integration</h3>
                        <p>Combine feedback with other PathSynch solutions for a comprehensive view of your business performance.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">05</span>
                        <h3>Customizable and Scalable</h3>
                        <p>Tailor feedback tools to your business’s specific needs, whether small or large.</p>
                    </div>
                   
                </div>
            </section>
            <section className="steps-section">
            


     

                <div className="business-growth growth-section">
                    <h3>Ready to Revolutionize Your Feedback Process?</h3>
                    <p>PathConnect transforms how businesses listen to and act on customer input. Start using real-time insights to elevate satisfaction and drive growth.</p>
                    <Link to="/request-demo"><button className="join-btn">Request a Demo Today</button></Link>
                    
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PathConnect
