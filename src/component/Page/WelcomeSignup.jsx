import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const WelcomeSignup = () => {
  return (
    <div>
        <Header/>
      <div className="campaign-builder-container">
      <h1>
        Welcome to PathSynch <span className="highlight">Merchant!</span>
      </h1>
      <p>Select <span className="link">Get Started</span> to build your campaign.</p>

      <div className="section">
        <h2>Meet Campaign Builder</h2>
        <p>
          Launch your PathSynch campaign in no time using Campaign Builder. Just tell us what services your business offers, 
          and we’ll help you build a campaign you have full control over—customize your deal’s pricing, discounts, marketing copy, 
          photos, and more using Campaign Builder’s data-driven guidance.
        </p>
      </div>

      <div className="info-section">
        <div className="info-card">
          <span className="icon"><img src='clock.svg'/></span>
          <h3>How long does it take?</h3>
          <p>
            Building a new campaign typically takes 30 minutes. After you submit your campaign, we’ll review it within 1 business day.
          </p>
        </div>

        <div className="info-card">
          <span className="icon"><img src='dollar.svg'/></span>
          <h3>What does it cost?</h3>
          <p>There’s zero upfront cost to build a campaign.</p>
        </div>

        <div className="info-card">
          <span className="icon"><img src='bards.svg'/></span>
          <h3>Do I need anything before I get started?</h3>
          <p>
            Have the following documents ready—you’ll need this information to complete the next steps:
          </p>
          <ul>
            <li>Photos of your business and services or goods</li>
            <li>Licenses (depending on your business)</li>
            <li>Payment/banking info</li>
            <li>SSN or EIN</li>
          </ul>
        </div>
      </div>

     <div className='googe-btn'>
     <Link to="/welcome-signup/onboarding"><button className="next-btn">Next</button></Link>
     </div>
    </div>
    <Footer/>
    </div>
  )
}

export default WelcomeSignup
