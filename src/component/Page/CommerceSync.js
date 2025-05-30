import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const CommerceSync = () => {
    return (
        <div>
            <Header />
            <section class="product-section">
                <div class="container">
                    <h1><span>PathSynch CommerceSynch:</span> Loyalty for<br></br> the Next Generation</h1>
                    <p>PathSynch’s cutting-edge loyalty and commerce engine designed to transform customer engagement.</p>
                </div>
                <div class="circle-decor top-left"></div>
                <div class="circle-decor bottom-right"></div>
            </section>

            <section class="marketplace-section">
                <div class="container">
                    <div class="text-content">
                        <h2>What Is the CommerceSynch Solution?</h2>
                        <p>
                            CommerceSynch is PathSynch’s cutting-edge loyalty and commerce engine designed to transform customer engagement. It provides merchants with powerful tools to create gamified loyalty programs, manage membership tiers, and offer personalized rewards, all powered by blockchain technology and AI. CommerceSynch bridges the gap between digital and physical customer interactions, ensuring seamless and impactful engagement that drives retention, satisfaction, and revenue growth.
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
                                <li><img src='lic.svg' />Design and customize loyalty programs with tokenized rewards.</li>
                                <li><img src='lic.svg' />Create and manage membership tiers to enhance customer exclusivity.</li>
                                <li><img src='lic.svg' />Track program performance and customer behavior through real-time analytics.</li>
                            </ul>
                        </div>
                    </div>

                    {/* <!-- Merchants Section --> */}
                    <div class="merchant-section">
                        <div class="info-box">
                            <h3>For Merchants:</h3>
                            <ul>
                                <li><img src='lic.svg' /> Earn rewards for purchases, referrals, and interactions with your business.</li>
                                <li><img src='lic.svg' /> Access exclusive offers, discounts, and VIP benefits through membership tiers.</li>
                                <li><img src='lic.svg' />Redeem blockchain-powered tokens for a gamified and secure experience.</li>
                            </ul>
                        </div>
                        <div class="screenshot">
                            <img src="e2.svg" alt="Merchant Dashboard" />
                        </div>
                    </div>
                </div>
            </section>
            <section class="features-section">
                <h2>Key Features of the CommerceSynch Solution</h2>
                <div class="features-container">
                    <div class="feature-card">
                        <span class="feature-number">01</span>
                        <h3>Gamified Loyalty Programs</h3>
                        <p>Reward customers for every interaction—whether in-store or online—with engaging, tokenized incentives that boost retention.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">02</span>
                        <h3>Membership Tiers</h3>
                        <p>Offer tailored benefits and exclusive experiences to high-value customers, enhancing their sense of loyalty and engagement.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">03</span>
                        <h3>Blockchain Integration</h3>
                        <p>Use secure, transparent, and transferable blockchain-powered tokens to build trust and add value to loyalty programs.</p>
                    </div>
                    <div class="feature-card">
                        <span class="feature-number">04</span>
                        <h3>Seamless Omni-Channel Integration</h3>
                        <p>Connect loyalty programs across physical and digital touchpoints for a unified customer experience.</p>
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
                            <li><strong>Feel Valued</strong>Enjoy personalized rewards and exclusive perks tailored to their preferences.</li>
                            <li><strong>Engaging Experience</strong>Participate in gamified loyalty programs that make every interaction fun and rewarding.</li>
                            <li><strong>Seamless Redemption</strong>Use tokens effortlessly across physical and digital platforms for a frictionless experience.</li>
                            <li><strong>Transparency and Control</strong>Blockchain integration ensures rewards are secure, transferable, and easy to track.</li>
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
                            <li><strong>Increase Retention</strong>Keep customers coming back with rewarding experiences that stand out from competitors.</li>
                            <li><strong>Maximize Revenue</strong>Membership tiers and gamified rewards incentivize repeat purchases and larger transaction sizes.</li>
                            <li><strong>Build Trust and Transparency</strong>Blockchain-powered rewards ensure data security and create customer confidence in your program.</li>
                            <li><strong>Save Time and Resources</strong>CommerceSynch simplifies loyalty management, allowing you to focus on growing your business.</li>
                            <li><strong>Gain Insights</strong>Real-time analytics help you understand customer behavior and optimize your strategies for success.</li>
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
                    <h2>CommerceSynch in Action</h2>
                    <p>
                        Imagine your coffee shop launching a gamified loyalty program where customers earn blockchain-based tokens for every purchase. As they accumulate tokens, they unlock rewards such as free beverages, discounts on exclusive merchandise, or access to members-only events. Meanwhile, you can track their redemption behavior and adjust your offerings to keep them engaged, all from one easy-to-use dashboard.
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
                    <h2>Why Choose PathSynch’s CommerceSynch Solution?</h2>
                    <p>
                        CommerceSynch isn’t just a loyalty program—it’s a transformative commerce engine that enhances customer relationships and boosts your bottom line. By blending innovative technology, personalized rewards, and seamless integration, CommerceSynch empowers your business to thrive in today’s competitive marketplace.
                    </p>
                </div>
            </section>
            {/* <!-- Business Categories Section --> */}


            {/* <!-- Business Benefits Section --> */}
            <section class="business-benefits">
                <h2>What Makes CommerceSynch Unique?</h2>
                <div class="benefit-cards">
                    <div class="benefit-card">
                        <span class="benefit-number">01</span>
                        <h3>Blockchain-Driven Transparency</h3>
                        <p>Tokenized rewards ensure secure, traceable, and transferable loyalty systems.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">02</span>
                        <h3>Gamified Engagement</h3>
                        <p>Turn everyday interactions into exciting, rewarding experiences that deepen loyalty.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">03</span>
                        <h3>Customizable Membership Tiers</h3>
                        <p>Build exclusive programs that cater to your most valuable customers.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">04</span>
                        <h3>AI-Enhanced Personalization</h3>
                        <p>Use cutting-edge analytics to deliver offers that resonate with individual customers.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">05</span>
                        <h3>Flexible Campaign Management</h3>
                        <p>Create, customize, and adjust offers effortlessly with our self-service Marketplace Manager.</p>
                    </div>
                    <div class="benefit-card">
                        <span class="benefit-number">06</span>
                        <h3>Unified Experience</h3>
                        <p>Seamlessly integrate loyalty programs across online and offline touchpoints.</p>
                    </div>
                </div>
            </section>
            <section className="steps-section">


                <div className="business-growth growth-section">
                    <h3>Ready to Transform Loyalty at Your Business?</h3>
                    <p>Take the next step toward redefining customer engagement and retention with CommerceSynch.</p>
                    <Link to="/request-demo"><button className="join-btn">Request a Demo Today</button></Link>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default CommerceSync
