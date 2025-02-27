import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react'

const CommonTab = () => {
  const [activeTab, setActiveTab] = useState('home');
  return (
    <div>
      <Tabs
        id="uncontrolled-tab-example"
        activeKey={activeTab}
        onSelect={(k) => setActiveTab(k)}
        className="mb-3"
      >
        <Tab
          eventKey="home"
          title={
            <span className={activeTab === 'home' ? 'active-tab' : ''}>
              1. Attract Local Food Enthusiasts
            </span>
          }
        >
          <div className="content">
            <div className="text-section">
              <h3>Attract Local Food<br></br> Enthusiasts</h3>
              <ul>
                <li>
                  <div className='arrow-wrap'>
                    <img src='lic.svg'/>
                    <p>Promote your business to diners nearby with tailored offers and discounts.</p>
                  </div>
                </li>
                <li>
                <div className='arrow-wrap'>
                <img src='lic.svg'/>
                  <p> Use our location-based tools to showcase your restaurant to customers when they’re most likely to visit.</p>
                </div>
                </li>
              </ul>
            </div>
            <div className="image-section">
              <img src="grow.svg" alt="Delicious food" className="feature-image" />
            </div>
          </div>
        </Tab>

        <Tab
          eventKey="profile"
          title={
            <span className={activeTab === 'profile' ? 'active-tab' : ''}>
              2. Drive Repeat Visits with CommerceSynch
            </span>
          }
        >
          <div className="content">
            <div className="text-section">
              <h3>Drive Repeat Visits with CommerceSynch</h3>
              <ul>
                <li>
                  ✅ Build long-term relationships with loyal customers.
                </li>
                <li>
                  ✅ Automate personalized follow-ups to increase repeat visits.
                </li>
              </ul>
            </div>
            <div className="image-section">
              <img src="grow.svg" alt="Delicious food" className="feature-image" />
            </div>
          </div>
        </Tab>

        <Tab
          eventKey="contact"
          title={
            <span className={activeTab === 'contact' ? 'active-tab' : ''}>
              3. Improve Customer Experience with PathConnect
            </span>
          }
        >
          <div className="content">
            <div className="text-section">
              <h3>Improve Customer Experience with PathConnect</h3>
              <ul>
                <li>
                  ✅ Collect customer feedback to improve your offerings.
                </li>
                <li>
                  ✅ Streamline communication with customers through an integrated platform.
                </li>
              </ul>
            </div>
            <div className="image-section">
              <img src="grow.svg" alt="Delicious food" className="feature-image" />
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default CommonTab
