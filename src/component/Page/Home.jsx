import { Link } from 'react-router-dom';
import Footer from '../Footer';
import Header from '../Header';
import TrialShortlinkFeature from './TrialShortlinkFeature';

function Home() {
  return (
    <div>
      <Header />
      {/* hero-section.html and hero-section.scss

HTML Structure for Hero Section */}
      <div class="hero-section">
        <img className='circle_left' src='circle_left.svg' />
        <div class="hero-content">
          <h1>Redefining <span class="loyalty">Loyalty</span>, Reinventing <span class="commerce">Commerce</span></h1>
          <p>PathSynch empowers your business to create meaningful connections with customers, enhancing loyalty, engagement, and revenue.</p>
          <div class="hero-buttons">
          <Link to="/request-demo"><button class="demo-btn">Book a Demo</button></Link>
            {/* <Link to="/signup"><button class="signup-btn">Sign Up Free</button></Link> */}
          </div>
          <p>Linking People, Places, and Possibilities</p>
          <div class="feature-links">
            <div className='feature-div'>
              <img src="icon3.svg" alt="Merchant Dashboard" />
            
              <div class="feature"  onClick={() => {
                document.getElementById("marketplace").scrollIntoView({
                  behavior: "smooth",
                });
              }} style={{cursor:"pointer"}}>Marketplace</div>
            </div>
            <div className='feature-div'>
              <img src="icon2.svg" alt="Merchant Dashboard" />
              <div class="feature"  onClick={() => {
                document.getElementById("pathConnect").scrollIntoView({
                  behavior: "smooth",
                });
              }} style={{cursor:"pointer"}}>PathConnect</div>
            </div>
            <div className='feature-div'>
              <img src="icon1.svg" alt="Merchant Dashboard" />
              <div class="feature"  onClick={() => {
                document.getElementById("commerceSynch").scrollIntoView({
                  behavior: "smooth",
                });
              }} style={{cursor:"pointer"}}>CommerceSynch</div>
            </div>
          </div>
          <TrialShortlinkFeature />
        </div>
        <div class="hero-image">
          <img src="hero_img.svg" alt="Team Collaboration" />
        </div>
        <img className='circle_right' src='circle_right.svg' />
      </div>
      {/* 
HTML Structure for 'What is PathSynch' Section */}
      <section className='about-div'>
        <h5>What is PathSynch</h5>
        <h2>From Feedback to Loyalty—Unlock the Power of PathSynch for Your Business.</h2>
        <div class="about-section">

          <div class="about-images">
            <img class="lgsection2.svg" src="lgsection2.svg" alt="Team Discussion" />

          </div>
          <div class="about-content">


            <p>PathSynch is a cutting-edge platform designed to bridge the gap between your business and customers by transforming loyalty and commerce. Our solution combines our Marketplace with PathConnect and CommerceSynch.  PathSynch drives authentic engagement and measurable growth. PathSynch empowers merchants to capture actionable customer insights, foster lasting relationships, and unlock new revenue opportunities while delivering personalized rewards, exclusive offers, and unique experiences to their customers. PathSynch creates smarter, more impactful connections across digital and physical touchpoints, enabling businesses to thrive.</p>
            <div className='about-smimg'>
              <img class="smsection2.svg" src="smsection2.svg" alt="Workspace Collaboration" />
            </div>
          </div>
        </div>
      </section>

      {/* // HTML Structure for Solutions Section */}
      {/* <div class="solutions-section">
        <h2 class="section-title">PathSynch Solutions</h2>
        <p class="section-description">
        PathSynch’s advanced analytics dashboard that empowers SMBs with real-time insights to optimize customer engagement, loyalty programs, and business performance.powered by blockchain technology, AI, Purchase and location data.
        </p>
        <div class="solution-cards">
          <div class="solution-card">
            <div className='solution-div'>
              <div>
                <img class="a1" src="a1.png" alt="Workspace Collaboration" />
              </div>
              <div>
                <h3 class="solution-title">Marketplace</h3>
                <p class="solution-subtitle">PathSynch Marketplace</p>
              </div>
            </div>
            <p class="solution-desc">A dynamic two-sided marketplace introducing consumers to merchants on a hyper-local level.</p>
          <p style={{textAlign:"left",fontWeight:500,fontSize:"12px",textDecoration:"underline"}}>Read More</p>
          </div>
          <div class="solution-card">
            <div className='solution-div'>
              <div>
                <img class="a1" src="a2.svg" alt="Workspace Collaboration" />
              </div>
              <div>
                <h3 class="solution-title">Reviews</h3>
                <p class="solution-subtitle">PathConnect</p>
              </div>
            </div>
            <p class="solution-desc">A real-time customer feedback and analytics tool that empowers your businesses.</p>
            <p style={{textAlign:"left",fontWeight:500,fontSize:"12px",textDecoration:"underline"}}>Read More</p>
          </div>
          <div class="solution-card">
            <div className='solution-div'>
              <div>
                <img class="a1" src="a3.svg" alt="Workspace Collaboration" />
              </div>
              <div>
                <h3 class="solution-title">Loyalty</h3>
                <p class="solution-subtitle">CommerceSynch</p>
              </div>
            </div>
            <p class="solution-desc">A powerful membership and commerce engine for eCommerce and brick-and-mortar businesses.</p>
            <p style={{textAlign:"left",fontWeight:500,fontSize:"12px",textDecoration:"underline"}}>Read More</p>
          </div>
        </div>
        <button class="sign-up-btn">Sign Up Free</button>
      </div> */}
      <div className="pathsynch-container">
      <div className="content">
        <h2>PathSynch Solutions</h2>
        <p>
          PathSynch’s advanced analytics dashboard that empowers SMBs with real-time
          insights to optimize customer engagement, loyalty programs, and business
          performance, powered by blockchain technology, AI, purchase, and location data.
        </p>
        <button className="sign-up">Sign Up Free</button>
      </div>
      <div className="pyramid">
        <div className="tier top">
          <div className="icon">
                <img class="a1" src="a1.png" alt="Workspace Collaboration" />
              </div>
          <h3>Marketplace</h3>
          <p>PathSynch Marketplace</p>
          <span>
            A dynamic two-sided marketplace<br></br> introducing Consumers to<br></br>  Merchants on a hyper-local level.
          </span>
          <Link to="/product-page">↳ Read More</Link>
        </div>
        <div className="tier middle">
          <div className="icon"> <img class="a1" src="a2.svg" alt="Workspace Collaboration" /></div>
          <h3>Reviews</h3>
          <p>PathConnect</p>
          <span>A real-time customer feedback and<br></br> analytics tool.</span>
          <Link to="/pathconnect-page">↳ Read More</Link>
        </div>
        <div className="tier bottom">
          <div className="icon"> <img class="a1" src="a3.svg" alt="Workspace Collaboration" /></div>
          <h3>Loyalty</h3>
          <p>CommerceSynch</p>
          <span>
            A powerful membership, loyalty, and commerce engine <br></br> for eCommerce and Brick & Mortar businesses.
          </span>
          <Link to="/pathcommercesync">↳ Read More</Link>
        </div>
      </div>
    </div>

      {/* fghjkl */}
      <div className="marketplace" id="marketplace">
        <h4 className="subtitle">Marketplace Solution</h4>
        <h1 className="title">Discover. Engage. Save. PathSynch Marketplace at Your Fingertips.</h1>
        <p className="description">Our dynamic two-sided marketplace connecting businesses and customers through exclusive deals, exciting experiences, and tailored rewards all through our iOS and Android app.</p>

        <div className="container">
          <div className="card customers">
            <h2 className="card-title">Customers</h2>
            <p>Explore local merchants, events, and services, often at discounted rates, while earning loyalty rewards for every interaction.</p>
            <img src="c1.svg" alt="Customer Dashboard" />
          </div>

          <div className="card merchants">
            <h2 className="card-title">Merchants</h2>
            <p>Gain visibility, attract new customers, and boost sales by showcasing your offerings in a thriving digital marketplace.</p>
            <img src="c2.svg" alt="Merchant Dashboard" />
          </div>
        </div>
      </div>

      {/* sdfghjk */}

      <section className="features">
        <h2 className="features-title">Features</h2>
        <div className="features-container">
          {/* Feature 1 */}
          <div className="feature-card">
            <div className="feature-f">
              <img src="f1.svg" alt="Exclusive Offers" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Exclusive Offers</h3>
              <p className="feature-description">
                Unlock personalized discounts and promotions based on customer preferences and location.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="feature-card">
            <div className="feature-f">
              <img src="f2.svg" alt="Event Listings" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Event Listings</h3>
              <p className="feature-description">
                Highlight local events and experiences to drive foot traffic and community engagement.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="feature-card">
            <div className="feature-f">
              <img src="f3.svg" alt="AI-Driven Recommendations" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">AI-Driven Recommendations</h3>
              <p className="feature-description">
                Deliver curated deals and services to customers for a more engaging experience.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="feature-card">
            <div className="feature-f">
              <img src="f4.svg" alt="Seamless Integration" />
            </div>
            <div className="feature-content">
              <h3 className="feature-title">Seamless Integration</h3>
              <p className="feature-description">
                Connect your storefront with the marketplace for effortless management and reporting.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="feature-buttons">
          <Link to="/app-download"><button className="download-app">Download App</button></Link>
          <button className="get-started">Get Started Now</button>
        </div>
      </section>


      {/* pathconnect */}
      <section className="pathconnect" id="pathConnect">
        <p className="solution-title">PathConnect Solution</p>
        <h2 className="main-heading">
          Turn Customer Feedback into <br />
          <span>Actionable Insights with PathConnect.</span>
        </h2>
        <p className="subtext">
          Seamlessly collect, analyze, and act on real-time customer feedback to improve satisfaction and drive growth.
        </p>

        <div className="content-container">
          <div className="image-container">
            <img src="p1.svg" alt="Dashboard Preview" />
          </div>

          <div className="text-container">
            <h3>For Merchants</h3>
            <p className="description">
              PathConnect empowers your business with an innovative NFC-enabled feedback system and AI-driven analytics to
              capture customer insights effortlessly.
            </p>
            <button className="how-it-works">How It Works</button>
            <p className="extra-info">
              Customers can share feedback with just a tap of their smartphone using PathConnect NFC cards or directly through
              the app. Our advanced AI processes this data in real-time, delivering clear, actionable insights to fine-tune
              your offerings and elevate customer satisfaction.
            </p>
          </div>
        </div>
      </section>
      <section class="features-section">
        <h2 class="section-title">Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">Real-Time Feedback Collection</h3>
            <p class="feature-description">Streamline how you gather customer opinions, reducing barriers to engagement.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🤖</div>
            <h3 class="feature-title">AI-Powered Insights</h3>
            <p class="feature-description">Leverage high-speed inference capabilities to analyze data instantly and reveal trends, preferences, and improvement opportunities.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🛠️</div>
            <h3 class="feature-title">Customizable Feedback Tools</h3>
            <p class="feature-description">Tailor questions and feedback methods to suit your business needs.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📢</div>
            <h3 class="feature-title">Engagement Boosters</h3>
            <p class="feature-description">Use PathConnect to create deeper connections through responsive service and targeted improvements.</p>
          </div>
        </div>
        <h2 class="cta-text">Enhance Engagement and Drive Satisfaction with PathConnect.</h2>
        <div class="buttons">
          <Link to="/product-page"><button class="learn-more">Learn More</button></Link>
          <Link to="/pricing-page"><button class="buy-nfc">Buy NFC Cards</button></Link>
        </div>
      </section>
      {/* xcvbn */}

      <section className="commerce-synch" id="commerceSynch">
        <div className="container">

          <div className="features">
            <div className='feature-wrap'>
              <div className="text-content">
                <h5 className="subtitle">CommerceSynch Solution</h5>
                <h1 className="title">
                  Revolutionize Loyalty and Commerce with <span>CommerceSynch.</span>
                </h1>
                <p className="description">
                  A powerful membership, loyalty, and commerce engine designed to drive
                  engagement, increase customer retention, and grow revenue.
                </p>
              </div>

              <div className="feature-card">
                <div className="badge">How It Works</div>
                <p>
                  Easily design and manage tiered loyalty rewards, membership
                  benefits, and exclusive offers, all integrated with your existing
                  e-commerce and in-store systems. Gamified blockchain technology
                  ensures transparency, trust, and customer excitement.
                </p>
                <div className="image-placeholder"><img src='r1.svg' /></div>
              </div>
            </div>

            <div className='feature-wrap heading-feature'>
              <div className="feature-card">
                <div className="badge">For Merchants</div>
                <p>
                  CommerceSynch empowers your business to create personalized loyalty
                  programs and streamlined membership experiences, all while leveraging
                  blockchain-based gamification to keep your customers coming back.
                </p>
                <div className="image-placeholder"><img src='r2.svg' /></div>
              </div>

              <div className='arrow-heading'>
                <h2>Features</h2><img src='farrow.svg' />
              </div>
            </div>
          </div>
          <div className="features-section">
            <div className="feature-card">
              <div className='card-img'>
                <img src='g1.svg' />
              </div>
              <h3>Gamified Loyalty Programs</h3>
              <p>Reward customers for purchases, referrals, and interactions.</p>
            </div>
            <div className="feature-card">
              <div className='card-img'>
                <img src='g2.svg' />
              </div>
              <h3>Membership Tiers</h3>
              <p>Exclusive VIP experiences to deepen customer relationships.</p>
            </div>
            <div className="feature-card">
              <div className='card-img'>
                <img src='g3.svg' />
              </div>
              <h3>Blockchain Rewards</h3>
              <p>Secure, transparent, and transferable tokenized points.</p>
            </div>
            <div className="feature-card">
              <div className='card-img'>
                <img src='g4.svg' />
              </div>
              <h3>Seamless Integration</h3>
              <p>Works across digital and physical channels.</p>
            </div>
            <div className="feature-card">
              <div className='card-img'>
                <img src='g5.svg' />
              </div>
              <h3>Performance Tracking</h3>
              <p>Use analytics to measure success and optimize strategy.</p>
            </div>

            <div className='learnmore-card'>
              <div>
                <h1>
                  Elevate Customer Loyalty and Maximize Revenue with CommerceSynch.
                </h1>
                <Link to="/product-page">
                <button>
                  Learn More
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="path-manager">
        <span>PathManager</span>
        <h2>Unlock Powerful Insights with PathManager.</h2>
        <p className="subtext">
          A comprehensive analytics mechanism to optimize customer engagement, loyalty<br></br> programs, and business performance in real-time.
        </p>

        <div className="info-section">
          <div>
            <div className="info-box">
              <button className='commonbtn'>For Merchants</button>
              <p>
                PathManager equips you with the tools to understand your customers’ behavior, measure program success, and identify growth opportunities—all from one intuitive dashboard.
              </p>
            </div>
            <div className="info-box">
              <button className='commonbtn'>How It Works</button>
              <p>
                PathManager consolidates data from all touchpoints, analyzes customer interactions through AI-driven analytics, and fine-tunes strategies. This technology helps businesses make smarter decisions.
              </p>
            </div>
          </div>
          <div className="info-box">
            <img src='pa1.svg' />
          </div>

        </div>

        <section className="features-section">

          <div className="features-grid">
            <div className="feature-car">
              <h2 className="features-title">Features</h2>
            </div>
            <div className="feature-card">
              <div className='heading-f'>
                <div className='icon_img'>
                  <img src='s1.svg' />
                </div>
                <h3>Real-Time Analytics</h3>
              </div>

              <p>Monitor customer behavior, loyalty engagement, and feedback as it happens.</p>
            </div>
            <div className="feature-card">
              <div className='heading-f'>
                <div className='icon_img'>
                  <img src='s2.svg' />
                </div>
                <h3>Unified Dashboard</h3>
              </div>

              <p>Access all your data in one place, from marketplace activity to loyalty program performance.</p>
            </div>
            <div className="feature-card">
              <div className='heading-f'>
                <div className='icon_img'>
                  <img src='s3.svg' />
                </div>
                <h3>Customizable Reports</h3>
              </div>
              <p>Generate reports tailored to your business goals and KPIs.</p>
            </div>
            <div className="feature-card">
              <div className='heading-f'>
                <div className='icon_img'><img src='s4.svg' /></div><h3>Predictive Insights with AI</h3>
              </div>

              <p>Leverage AI to anticipate trends, identify churn risks, and uncover hidden opportunities.</p>
            </div>
            <div className="feature-card">
              <div className='heading-f'> <div className='icon_img'><img src='s5.svg' /></div><h3>Performance Metrics</h3>
              </div>

              <p>Evaluate ROI on loyalty programs, campaigns, and customer engagement initiatives.</p>
            </div>
          </div>
          <div className="cta">
            <h3>
            Take Control of Your Business Performance with PathManager.
            </h3>
            <Link to="/product-page"><button className="cta-button">Learn More</button></Link>
          </div>
        </section>
      </div>
      <div className="enterprise-solution">
        <h5>Enterprise Solution</h5>
        <h2>Empowering Enterprises to Build Smarter<br></br> Connections and Lasting Loyalty.</h2>
        <p className="subtext">
          PathSynch delivers innovative tools for large-scale customer engagement, offering AI-powered insights, gamified blockchain loyalty programs, and seamless integration across digital and physical channels. Unlock the potential of personalized connections and revenue-generation growth tailored for your enterprise.
        </p>

        <div class="feature-container">
        <div class="feature-box">
            <h3 className='sc-h'>Scalable Solutions for Growth:</h3>
            <p>Adaptable tools designed to handle the complexity and scale of enterprise operations.</p>
        </div>
        <div class="feature-box">
            <h3>Advanced Insights: <br></br> Real-time data</h3>
            <p>Analytics and AI-powered feedback for actionable strategies.</p>
        </div>
        <div class="feature-box">
            <h3>Seamless Integration: <br></br> Easily</h3>
            <p>Connect with your existing systems and workflows.</p>
        </div>
        <div class="feature-box">
            <h3 className='en-h'>Enhanced Customer Loyalty: <br></br> Gamified</h3>
            <p>Blockchain rewards to drive deeper engagement and retention.</p>
        </div>
    </div>

        <p className="cta-text">
          Discover How PathSynch Can Transform Your Business – Contact Us for a Customized Enterprise Solution Today!
        </p>

        <Link to="/contactus" ><button className="cta-button">Book a Call</button></Link>
        <Link to="/enterprise" style={{marginLeft:"10px"}}><button className="cta-button">Read More</button></Link>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
