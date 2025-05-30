import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const BecomePartner = () => {
    return (
        <div>
            <Header />
            <section class="product-section">
                <div class="container">
                    <h1>Join the PathSynch Partner Program </h1>
                    <p>Grow with Us, Earn Rewards, and Empower Businesses.</p>
                     <Link to="/signup"><button className="common_btn">
                                Create a free account to get started
                              </button>
                              </Link>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>
            <section className="why-choose">
                <div className="why-choose-image">
                    <img src="choose.png" alt="Businessman Using Mobile" />
                </div>
                <div className="why-choose-content">
                    <h2>Why Partner with PathSynch?</h2>
                    <p>
                    At PathSynch, we’re redefining loyalty and reinventing commerce. By partnering with us, you can earn competitive commissions while helping businesses thrive through innovative solutions. Join our Partner Program to connect with a growing community of forward-thinking businesses and unlock new revenue opportunities.
                    </p>
                    
                 
                </div>
            </section>
            <div class="restaurant-promotions">
        <h2>Benefits of Partnering with PathSynch</h2>
   

        <div class="promotion-list">
          <div class="promotion-item">
            <div class="promo-number">01</div>
            <div class="promo-content">
              <h3>Competitive Commissions</h3>
              <p>Earn generous rewards for every successful referral.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">02</div>
            <div class="promo-content">
              <h3>Dedicated Support</h3>
              <p>Access ready-to-use promotional materials, including banners, ads, and content.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">03</div>
            <div class="promo-content">
              <h3>Real-Time Tracking</h3>
              <p>Monitor your referrals, conversions, and earnings through an easy-to-use partner dashboard.</p>
            </div>
          </div>
          <div class="promotion-item">
            <div class="promo-number">04</div>
            <div class="promo-content">
              <h3>Automated Payouts</h3>
              <p>Enjoy hassle-free, on-time payments for your hard work.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="timeline-container">
        <h2>How It Works</h2>
        <p>PathSynch is a comprehensive loyalty, feedback, and engagement platform that combines</p>
    
        <div className="timeline">
          <div className="timeline-wrap">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Sign Up</h3>
                <p>
                Join the PathSynch Partner Program by completing a quick and simple registration process.
                </p>
              </div>
            </div>
            <div className="empty-div"></div>
          </div>

          <div className="timeline-wrap right-timeline">
            <div className="empty-div"></div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Share</h3>
                <p>
                Promote PathSynch to your network with your unique partner link using blogs, social media, newsletters, or direct outreach.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-wrap">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Earn</h3>
                <p>
                Get rewarded for every successful referral that signs up and engages with PathSynch.
                </p>
              </div>
            </div>
    
          </div>
      
          
        </div>
     
      </div>
            <section class="features-section">
                <h2>Program Features</h2>
                <div class="features-container">
                    <div class="feature-card">
                        <span class="feature-number">01</span>
                        <h3>Streamlined Dashboard</h3>
                        <p>Access your personalized partner portal to track performance, manage referrals, and download resources.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">02</span>
                        <h3>Powerful Promotions</h3>
                        <p>Leverage our creative content to attract and engage your audience effortlessly.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">03</span>
                        <h3>Seamless Integration</h3>
                        <p>Work with a platform trusted by businesses to enhance loyalty, feedback, and commerce.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">04</span>
                        <h3>Growth Opportunities</h3>
                        <p>Expand your revenue potential with a trusted partner delivering measurable value.</p>
                    </div>
                </div>
                {/* <div class="carousel-indicators">
                    <span class="dot active"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div> */}
            </section>
            <section class="features-section">
        <h2 class="section-title">Why PathSynch?</h2>
        <p>PathSynch is a comprehensive loyalty, feedback, and engagement platform that combines</p>
        <div class="features-grid">
          <div class="feature-card">
          
            <img  src="a1.png" style={{width:"40px"}} alt="Marketplace" />
            {/* <h3 class="feature-title">Real-Time Feedback Collection</h3> */}
            <p class="feature-description">A two-sided marketplace connecting merchants and customers.</p>
          </div>
          <div class="feature-card">
          <img src="a2.svg" style={{width:"40px"}} alt="PathConnect" />
            {/* <h3 class="feature-title">AI-Powered Insights</h3> */}
            <p class="feature-description">PathConnect for real-time feedback and actionable insights</p>
          </div>
          <div class="feature-card">
          <img  src="a3.svg" style={{width:"40px"}} alt="CommerceSynch" />
            {/* <h3 class="feature-title">Customizable Feedback Tools</h3> */}
            <p class="feature-description">CommerceSynch for gamified loyalty programs and membership rewards.</p>
          </div>
          <div class="feature-card">
          <img  src="4th.jpeg" style={{width:"40px"}} alt="PathManager" />
            {/* <h3 class="feature-title">Engagement Boosters</h3> */}
            <p class="feature-description">PathManager, an analytics dashboard driving smarter decisions.</p>
          </div>
        </div>
        <p class="cta-text">When you partner with us, you become part of a mission to transform customer engagement for businesses worldwide.</p>
       
      </section>
      
            {/* Why Choose PathSynch */}
      
            {/* <!-- Business Categories Section --> */}
    

            {/* <!-- Business Benefits Section --> */}
        
          
            <section className="steps-section">
            <div></div>
          <h2>How to Get Started</h2>
          <p>We’ve partnered with Kiflo to manage our Partner Program seamlessly.</p>

          <div className="steps-container">
            <div className="step">
              <span className="step-number">01</span>
              <div className="step-content">
                <p>Step 01</p>
                <h4>Join Today</h4>
                <p>Visit www.pathsynch.com/partners and complete the registration.</p>
              </div>
            </div>

            <div className="step middle-step">
              <span className="step-number">02</span>

              <div className="step-content">
                <p>Step 02</p>
                <h4>Promote PathSynch</h4>
                <p>Use your unique partner link and our marketing resources to share PathSynch with your network.</p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Earn Rewards</h4>
                <p>
                Start earning commissions for every successful referral.
                </p>
              </div>
            </div>
          </div>
          <div>
     
       </div>
       
        </section>
          
            <section className="steps-section">
            


     

                <div className="business-growth growth-section">
                    <h3>Ready to Partner with PathSynch?</h3>
                    <p>Start earning today and help businesses unlock growth with PathSynch.</p>
                    <Link to="/signup"><button className="join-btn">Join the Partner Program</button></Link>
                    <Link to="/contactus" style={{marginLeft:"10px"}}><button className="common_btn">Contact Our Team</button></Link>
                    <p>For questions or assistance, reach out to us at affiliate@pathsynch.com.</p>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default BecomePartner
