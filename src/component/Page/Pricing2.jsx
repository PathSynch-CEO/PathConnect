import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Link, useNavigate } from 'react-router-dom';
import { Modal, Button, CloseButton } from "react-bootstrap";
import PricingTab from "./PricingTab";

const Pricing2 = () => {
  const navigate = useNavigate();
  const [goalSelected, setGoalSelected] = useState(null);
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState('Reviews');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showPricingTab, setShowPricingTab] = useState(false);

  console.log(goalSelected)

  const handleNext = () => {
    if (goalSelected === "no") {
      navigate("/landing-page", { state: { totalPrice: selectedPlan.price } });
    } else {
      // navigate("/pricing", { state: { selectedPlan } });
      setShowPricingTab(true);
      setShow(false)
    }
  };

  const handleClose = () => setShow(false);

  const handleCampaigns = (plan) => {
    setSelectedPlan(plan);
    setShow(true);
  };

  return (
    <div>
      <Header />
      <section class="product-section">
        <div class="container">
          <h1>Pricing</h1>
          <p>Flexible Plans Tailored to Your Business Needs.</p>
          <Link to="/signup"><button className="common_btn">
            Create a free account to get started
          </button>
          </Link>
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>
      <div className="choose-plan-wrap">
        <div className="plan-content">
          <h2>Choose the Right Plan for Your Business</h2>
          <p>
            At PathSynch, we understand that every business is unique. That’s
            why we offer a tiered pricing model designed to meet the needs of
            your businesses, with optional add-ons to enhance your subscription,
            putting you on the Path to success. Whether you’re just starting out
            or scaling your operations, PathSynch has the tools and features to
            help you grow.
          </p>
        </div>
      </div>
      <div className="pathconnect-wrap">
        <div className="green-wrap">
          <h2>
            PathConnect <br></br>Pricing - Reviews
          </h2>
          <p>"Capture Feedback Effortlessly and Unlock Actionable Insights."</p>
        </div>
        <div>
          {" "}
          <p>
            At PathSynch, we know the value of understanding your customers.
            With PathConnect, you can seamlessly collect feedback in real-time,
            analyze insights, and refine your business offerings to deliver
            exceptional experiences.
          </p>
          <p>
            Now, you can get started with PathConnect’s NFC-enabled feedback
            cards, designed to meet the needs of businesses of all sizes.
            Purchase your cards and start gathering valuable customer insights
            today.  If only an app user go with PathConnect Pro
          </p>
        </div>
      </div>
      <Modal show={show} id="showm" onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title style={{ fontSize: "20px" }}>
            Unlock Powerful Insights with PathManager.
          </Modal.Title>
          {/* <CloseButton onClick={handleClose} variant="black" /> */}
        </Modal.Header>
        <Modal.Body>
          A comprehensive analytics dashboard to optimize customer engagement, loyalty programs, and business performance in real time.
          <div style={{ marginTop: "20px" }}>
            <p>Would you like to continue with PathManager Service?</p>
            <div>
              <input type="radio" id="yes" name="goalSetting" value="yes" onChange={() => setGoalSelected("yes")} />
              <label htmlFor="yes" style={{ marginLeft: "5px" }}>Yes</label>
            </div>
            <div>
              <input type="radio" id="no" name="goalSetting" value="no" onChange={() => setGoalSelected("no")} />
              <label htmlFor="no" style={{ marginLeft: "5px" }}>No</label>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="closeButton" onClick={handleClose}>Close</Button>
          <Button variant="success" onClick={handleNext} disabled={goalSelected === null}>Next</Button>
        </Modal.Footer>
      </Modal>



      <div className="choose-plan pricing-high">
        <Tabs
          activeKey={activeTab}
          id="justify-tab-example"
          className="mb-3"
          justify
          onSelect={(k) => setActiveTab(k)}
        >
          <Tab eventKey="Reviews" title={<><img src="/ch1.svg" alt="Profile Icon" /> Reviews</>}>
            {!showPricingTab ? (
              <div className="choose-plan pricing-high">
                <div className="pricing-container">
                  <div className="plans">
                    {[{ cards: 1, price: 39 }, { cards: 3, price: 55 }, { cards: 5, price: 69 }, { cards: 10, price: 110 }].map((plan) => (
                      <div key={plan.cards} className="plan highlight">
                        <div className="plan-wrap">
                          <div className="plan-header">
                            <img src="rock2.svg" alt="Starter Plan Icon" />
                            <p className="starter-plan">{plan.cards} NFC Cards</p>
                          </div>
                          <p className="price">${plan.price}</p>
                        </div>
                        <ul>
                          <li>{plan.cards === 1 ? 'Perfect for testing PathConnect with minimal setup and acquire reviews' : plan.cards === 3 ? "Ideal for small businesses collecting feedback at multiple touchpoints." : plan.cards === 5 ? "Great for businesses with higher customer traffic or multiple service stations." : `Designed for larger businesses needing extensive coverage and expansion`}</li>
                        </ul>
                        <button className="btn" onClick={() => handleCampaigns(plan)}>Get Started</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <PricingTab data={selectedPlan} />
            )}
          </Tab>

          <Tab
            eventKey="longer-tab"
            title={
              <>
                <img src="/ch2.svg" alt="Loyalty Icon" />
                Loyalty
              </>
            }
          >
            <div className="pricing-table">


              <table>
                <thead>
                  <tr>
                    <th>Compare Plans
                      <p>Discover which plan suits your needs best.</p></th>
                    <th>
                      19.99/month
                      <div><button className="btn">GET STARTED</button></div>
                    </th>
                    <th>
                      49.99/month
                      <div><button className="btn">GET STARTED</button></div>
                    </th>
                    <th>
                      179.99/month
                      <div><button className="btn">GET STARTED</button></div>
                    </th>
                    <th>
                      249.99/month
                      <div><button className="btn">GET STARTED</button></div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-left'>Store Credit Accounts</td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Gift Card Program</td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Referrals Program</td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Reward Social Actions (Instagram, TikTok, Facebook)</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Gorgias Integration</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Email Customization</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Email White Labelling</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Memberships</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Analytics</td>
                    <td>Limited</td>
                    <td>Limited</td>
                    <td>Full</td>
                    <td>Full</td>
                  </tr>
                  <tr>
                    <td className='text-left'>PathManager</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Sentiment Analysis</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Rewards Page</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Multi-Store Gift Cards</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Orders Processed Per Month</td>
                    <td>Includes 100 orders</td>
                    <td>Includes 500 orders</td>
                    <td>Includes 2,000 orders</td>
                    <td>Includes 8,000 orders, then $10 per additional 100 orders</td>
                  </tr>
                  <tr>
                    <td className='text-left'>Support</td>
                    <td>Email Only</td>
                    <td>Email + Limited Support</td>
                    <td>24/7 Chat Support</td>
                    <td>24/7 Chat Support + Account Manager</td>
                  </tr>
                  <tr>
                    <td className='text-left'>Quarterly Campaign Reviewe</td>
                    <td ><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                </tbody>
              </table>


            </div>
          </Tab>
          <Tab
            eventKey="contact"
            title={
              <>
                <img
                  src="/ch3.png"
                  alt="Rewards Icon"
                  style={{ width: "90px" }}
                />
                Reviews & Loyalty
              </>
            }
          >
            <div className="pricing-table">


              <table>
                <thead>
                  <tr>
                    <th>Compare Plans
                      <p>Discover which plan suits your needs best.</p></th>
                    <th>
                      Growth Plan
                      <div><button className="btn">GET STARTED</button></div>
                    </th>
                    <th>
                      Professional Plan
                      <div><button className="btn">GET STARTED</button></div>
                    </th>
                    <th>
                      Enterprise Plan
                      <div><button className="btn">GET STARTED</button></div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='text-left'>Monthly Price</td>
                    <td>$89/month</td>
                    <td>$199/month</td>
                    <td>Custom Pricing</td>
                  </tr>
                  <tr>
                    <td className='text-left'>Best For</td>
                    <td>Small and scaling businesses</td>
                    <td>Medium-sized businesses</td>
                    <td>Large enterprises</td>
                  </tr>

                  <tr>
                    <td className='text-left'>PathConnect Pro</td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>CommerceSynch</td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Analytics</td>
                    <td>Limited Analytics</td>
                    <td>Full Analytics</td>
                    <td>Full Custom Analytics</td>
                  </tr>
                  <tr>
                    <td className='text-left'>PathManager</td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Sentiment Analysis</td>
                    <td><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Rewards Page</td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Multi-Store Gift Cards</td>
                    <td><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                  <tr>
                    <td className='text-left'>Orders Processed Per Month</td>
                    <td>Includes 500</td>
                    <td>Includes 2,000</td>
                    <td>Includes 8,000, then $10 per additional 100</td>
                  </tr>
                  <tr>
                    <td className='text-left'>Support</td>
                    <td>Email + Limited Support</td>
                    <td>24/7 Chat Support</td>
                    <td>Dedicated Account Manager</td>
                  </tr>
                  <tr>
                    <td className='text-left'>Quarterly Campaign Review</td>
                    <td><img style={{ width: "20px" }} src='x-png-15.png' /></td>
                    <td><img src='bookmark.svg' /></td>
                    <td><img src='bookmark.svg' /></td>
                  </tr>
                </tbody>
              </table>


            </div>
          </Tab>
        </Tabs>

      </div>
      {console.log(selectedPlan)}
      <div class="restaurant-choices">
        <section className="steps-section">
          <div></div>
          <h2>How PathConnect Works</h2>
          <p>
            Joining the PathSynch Marketplace is simple and starts delivering
            results quickly:
          </p>

          <div className="steps-container">
            <div className="step">
              <span className="step-number">01</span>
              <div className="step-content">
                <p>Step 01</p>
                <h4>Place Your Cards</h4>
                <p>
                  Distribute NFC-enabled cards at strategic points in your
                  business—tables, service counters, or checkout stations.
                </p>
              </div>
            </div>

            <div className="step middle-step">
              <span className="step-number">02</span>

              <div className="step-content">
                <p>Step 02</p>
                <h4>Customers Share Feedback</h4>
                <p>
                  Customers tap the card with their smartphone to leave feedback
                  instantly.
                </p>
              </div>
            </div>

            <div className="step">
              <span className="step-number">03</span>
              <div className="step-content">
                <p>Step 03</p>
                <h4>Analyze Insights</h4>
                <p>
                  Access feedback data through your PathSynch dashboard and take
                  action to enhance the customer experience.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      

        <div className="enhance-wrap">
          <h2 className="common-heading">Enhance Your PathConnect Experience</h2>
          <p className="text-center">
            Add PathConnect Pro to your subscription for and unlock these advanced
            features:
          </p>
          <div className="yellow-conent">
            <button
              style={{ border: "none" }}
              className="yellow-div"
              onClick={() => {
                setSelectedPlan({ price: 14.99, type: "PathConnect Pro Basic" });
                setShowPricingTab(true);
              }}
            >
              $14.99/month
            </button>
            <button
              style={{ border: "none" }}
              className="yellow-div"
              onClick={() => {
                setSelectedPlan({ price: 69.99, type: "PathConnect Pro Standard" });
                setShowPricingTab(true);
              }}
            >
              $69.99/month
            </button>
            <button
              className="yellow-div"
              style={{ border: "none" }}
              onClick={() => {
                setSelectedPlan({ price: 129, type: "PathConnect Pro Premium" });
                setShowPricingTab(true);
              }}
            >
              $129/month
            </button>
          </div>
          <div className="ai-card-wrap">
            <div className="ai-card">
              <img src="ai1.svg" />
              <h4>
                AI-Powered<br></br> Sentiment Analysis
              </h4>
              <p>Understand customer emotions and preferences in detail.</p>
            </div>
            <div className="ai-card">
              <img src="ai2.svg" />
              <h4>
                Compare Sentiment <br></br> Over Time
              </h4>
              <p>Track sentiment over time (30, 60, 90 days, YTD, and more).</p>
            </div>
            <div className="ai-card">
              <img src="ai3.svg" />
              <h4>Real-Time Alerts</h4>
              <p>
                Get notified instantly when customers leave critical feedback.
              </p>
            </div>
          </div>
        </div>
        <div className="ai-card-wrap">
          <div className="ai-card">
            <img src="ai1.svg" />
            <h4>
              AI-Powered<br></br> Sentiment Analysis
            </h4>
            <p>Understand customer emotions and preferences in detail.</p>
          </div>
          <div className="ai-card">
            <img src="ai2.svg" />
            <h4>
              Compare Sentiment <br></br> Over Time
            </h4>
            <p>Track sentiment over time (30, 60, 90 days, YTD, and more).</p>
          </div>
          <div className="ai-card">
            <img src="ai3.svg" />
            <h4>Real-Time Alerts</h4>
            <p>
              Get notified instantly when customers leave critical feedback.
            </p>
          </div>
        </div>
      
      <section class="why-choose-wrap">
        <h2>Why Choose PathConnect?</h2>
        <div class="features-wrap">
          <div class="feature why1">
            <h3>Easy Setup</h3>
            <p>
              NFC-enabled cards work seamlessly without the need for complex
              integrations.
            </p>
          </div>
          <div class="feature why2">
            <h3>Real-Time Feedback</h3>
            <p>
              Gather insights from customers as they experience your business.
            </p>
          </div>
          <div class="feature why3">
            <h3>Cost-Effective</h3>
            <p>
              Scale your feedback capabilities with affordable pricing options.
            </p>
          </div>
        </div>
      </section>
      <div class="benefits-container">
        <h1 class="section-title">The Benefits to Your Business</h1>

        <div class="benefit-card">
          <h2 class="benefit-title">Effortless Reviews</h2>
          <p>Our one-tap NFC cards and stand make leaving reviews easier than ever. Customers simply tap their phone, and they’re instantly directed to your review page.</p>
        </div>

        <div class="benefit-card">
          <h2 class="benefit-title">SEO Boosts</h2>
          <p>More positive reviews mean higher search engine rankings, leading to more organic traffic and new customers.</p>
        </div>

        <div class="benefit-card">
          <h2 class="benefit-title">Increased Trust & Credibility</h2>
          <p>A collection of positive reviews builds trust with potential customers, making them more likely to choose your business.</p>
        </div>

        <div class="benefit-card">
          <h2 class="benefit-title">Save Time & Boost Efficiency</h2>
          <p>Eliminate the hassle of asking customers to manually leave reviews online. Our system makes it quick and convenient.</p>
        </div>

        <div class="benefit-card">
          <h2 class="benefit-title">Works with All Smartphones</h2>
          <p>Our NFC technology is universally compatible with any NFC-enabled smartphone, regardless of brand.</p>
        </div>
      </div>
      <div className="restaurant-choices">
        <div className="business-growth growth-section">
          <h3>Order Your Cards Today</h3>
          <p>
            Get your PathConnect cards now at shop.pathsynch.com and start
            capturing customer feedback effortlessly.
          </p>
          <button className="join-btn">Buy Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing2;

