import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const ProductPage = () => {
    return (
        <div>
            <Header />
            <section class="product-section">
                <div class="container">
                    <h1><span>PathSynch Marketplace:</span> Unlock the Power<br></br> of Connection and Growth</h1>
                    <p>PathSynch is a dynamic Two-Sided Marketplace connecting Businesses and Customers like never before.</p>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>

            <section class="marketplace-section">
                <div class="container">
                    <div class="text-content">
                        <h2>What Is the Marketplace Solution?</h2>
                        <p>
                        PathSynch’s Marketplace Solution is a revolutionary platform designed to bring businesses and customers together in a meaningful and mutually beneficial way. It serves as a vibrant hub where merchants showcase their products, services, and events, while customers explore tailored offers, discover local experiences, and enjoy exclusive rewards. Powered by AI and location-based technology, the Marketplace creates a seamless and engaging ecosystem for commerce and connection.
                        </p>
                    </div>
                    <div class="image-content">
                        <img src="m1.svg" alt="People discussing marketplace solutions" />
                    </div>
                </div>
            </section>
            <section class="how-it-works">
                <h2>How It Works</h2>

                <div class="content-container">
                    {/* <!-- Customers Section --> */}
                    <div class="customer-section">
                        <div class="screenshot">
                            <img src="e1.svg" alt="Customer Dashboard" />
                        </div>
                        <div class="info-box">
                            <h3>For Customers:</h3>
                            <ul>
                                <li><img src='lic.svg' />Browse curated deals, events, and services tailored to your interests and location.</li>
                                <li><img src='lic.svg' /> Access personalized rewards and discounts that make every transaction meaningful.</li>
                                <li><img src='lic.svg' /> Earn loyalty points for participating, redeemable across the platform.</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Merchants Section --> */}
                    <div class="merchant-section">
                        <div class="info-box">
                            <h3>For Merchants:</h3>
                            <ul>
                                <li><img src='lic.svg' /> List your business, products, services, or events with ease.</li>
                                <li><img src='lic.svg' /> Gain visibility in front of a highly engaged audience actively seeking what you offer.</li>
                                <li><img src='lic.svg' /> Leverage AI-powered insights to optimize promotions and pricing.</li>
                            </ul>
                        </div>
                        <div class="screenshot">
                            <img src="e2.svg" alt="Merchant Dashboard" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="features-section">
                <h2>Key Features of the Marketplace Solution</h2>
                <div class="features-container">
                    <div class="feature-card">
                        <span class="feature-number">01</span>
                        <h3>Exclusive Offers and Deals</h3>
                        <p>Merchants can promote products, offer discounts, and showcase special exclusives, helping attract customers and drive engagement.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">02</span>
                        <h3>Event Listings</h3>
                        <p>Showcase local events and experiences, enhancing traffic and customer interaction with your brand.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">03</span>
                        <h3>Location-Based Personalization</h3>
                        <p>Use geographic location data to offer hyper-local deals, ensuring customers receive relevant promotions in real-time.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">04</span>
                        <h3>AI-Driven Recommendations</h3>
                        <p>Deliver smarter suggestions and automatic matching of buyers and sellers with customized experiences.</p>
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
                            <li><strong>Discover More</strong>Find new businesses, events, and services that align with your preferences.</li>
                            <li><strong>Save Money</strong>Access exclusive deals and offers that make shopping and experiences more cost-effective.</li>
                            <li><strong>Earn Rewards</strong>Enjoy gamified incentives and loyalty rewards for every interaction.</li>
                            <li><strong>Seamless Experience</strong>Navigate a user-friendly platform that simplifies how you discover, shop, and save.</li>
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
                            <li><strong>Boost Visibility</strong>Expand your reach to customers actively looking for what you offer.</li>
                            <li><strong>Create Long-Term Value</strong>Leverage platform data to retain customers, increase repeat purchases, and enhance lifetime value (LTV).</li>
                            <li><strong>Drive Revenue</strong>Increase Average Order Value (AOV).</li>
                            <li><strong>Build Loyalty</strong>Strengthen customer relationships through personalized rewards and gamified loyalty programs.</li>
                            <li><strong>Save Time</strong>Manage promotions, listings, and analytics from a single dashboard.</li>
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
                    <h2>Marketplace in Action</h2>
                    <p>
                        Picture this: A customer in your neighborhood searches for an event or
                        service they need today. They open the PathSynch Marketplace and find
                        your business listing for a while, leading to a sale. As they dive
                        deeper into their platform, they can access deals and experiences on
                        social media, ensuring they’re getting the best bang for their buck.
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
                    <h2>Why Choose PathSynch’s Marketplace Solution?</h2>
                    <p>
                        PathSynch is more than just a marketplace—it’s a growth engine for
                        businesses. With a rich set of features like AI-driven
                        recommendations, hyper-local personalization, and gamified loyalty
                        programs, PathSynch empowers businesses with visibility and
                        engagement. By connecting with real-time insights, PathSynch’s
                        Marketplace Solution helps you enhance your listing success.
                    </p>
                </div>
            </section>
            {/* <!-- Business Categories Section --> */}
            <section class="business-categories">
                <h2>What type of businesses do well on PathSynch Marketplace?</h2>
                <div class="categories">
                   <Link to="/restorent-category"><span class="category-badge"><img src="h1.png" alt="Businessman Using Mobile" />Restaurants & Food</span></Link> 
                    <Link to="/local-deals"><span class="category-badge"><img src="h2.png" alt="Businessman Using Mobile" />Local deals</span></Link> 
                    <Link to="/experinces"><span class="category-badge"><img src="h3.png" alt="Businessman Using Mobile" />Experiences</span></Link> 
                    <Link to="/events"><span class="category-badge"><img src="h4.png" alt="Businessman Using Mobile" />Events</span></Link> 
                    <Link to="/health"><span class="category-badge"><img src="h5.png" alt="Businessman Using Mobile" />Health and Beauty</span></Link> 
                    <Link to="/things"><span class="category-badge"><img src="h6.png" alt="Businessman Using Mobile" />Things to do</span></Link> 
                    <span class="category-badge"><img src="h7.png" alt="Businessman Using Mobile" />Gifts</span>
                    <span class="category-badge"><img src="h8.png" alt="Businessman Using Mobile" />Clothing</span>
                    <Link to="/auto"> <span class="category-badge"><img src="h9.png" alt="Businessman Using Mobile" />Auto</span></Link>
                    <Link to="/travel"><span class="category-badge"><img src="h10.png" alt="Businessman Using Mobile" />Travel & Places to Stay</span></Link>
                    <span class="category-badge"><img src="h11.png" alt="Businessman Using Mobile" />Tours</span>
                    <span class="category-badge"><img src="h12.png" alt="Businessman Using Mobile" />Spas & Wellness</span>
                </div>
                <p>Goods, Services & Much More</p>
                <button class="start-today-btn">Start Today for Free</button>
            </section>

            {/* <!-- Business Benefits Section --> */}
            <section class="business-benefits">
                <h2>How Can PathSynch Marketplace Benefit Your<br></br> Business?</h2>
                <div class="benefit-cards">
                    <div class="benefit-card">
                        <span class="benefit-number">01</span>
                        <h3>New Customers</h3>
                        <p>Tap into a growing, engaged audience actively looking for deals, experiences, and services.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">02</span>
                        <h3>Cost-Effective</h3>
                        <p>Reach more customers with cost-effective promotions that align with your unique customers.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">03</span>
                        <h3>Maximize Productivity</h3>
                        <p>Use PathSynch’s AI-driven tools, boost traffic during slow seasons, and increase revenue.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">04</span>
                        <h3>Data Insights</h3>
                        <p>Gain access to customer data, respond to real-time trends, and optimize your strategies.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">05</span>
                        <h3>Flexible Campaign Management</h3>
                        <p>Create, customize, and adjust offers effortlessly with our self-service Marketplace Manager.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">06</span>
                        <h3>Great for Promotions</h3>
                        <p>Increase foot traffic, expand your reach, and showcase your offers on a marketing platform.</p>
                    </div>
                </div>
            </section>
            <section className="steps-section">
                <h2>Join the PathSynch Marketplace in 3 Easy Steps</h2>

                <div className="steps-container">
      <div className="step">
        <span className="step-number">01</span>
        <div className="step-content">
            <p>Step 01</p>
          <h4>Complete the Form</h4>
          <p>Fill out the intake form to get started with PathSynch.</p>
        </div>
      </div>

      <div className="step middle-step">
        <span className="step-number">02</span>

        <div className="step-content">
        <p>Step 02</p>
          <h4>Check Your Email</h4>
          <p>Look for instructions to set up your PathSynch Merchant account.</p>
        </div>
      </div>

      <div className="step">
        <span className="step-number">03</span>
        <div className="step-content">
        <p>Step 03</p>
          <h4>Launch Your Offer</h4>
          <p>
            Build and publish your deal through the Marketplace Manager—go live
            in as little as 24 hours!
          </p>
        </div>
      </div>
    </div>

                <div className="business-growth growth-section">
                    <h3>Ready to Grow Your Business?</h3>
                    <p>Take advantage of PathSynch Marketplace to connect with new customers, promote exclusive deals, and drive measurable growth.</p>
                    <button className="join-btn">Join the Marketplace Today</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ProductPage
