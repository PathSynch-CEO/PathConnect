import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react'

const CommonExperinces = () => {
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
              1. Drive Bookings with Targeted Promotions
            </span>
          }
        >
          <div className="content">
            <div className="text-section">
              <h3>Drive Bookings with Targeted Promotions</h3>
              <ul>
                <li>
                  <div className='arrow-wrap'>
                    <img src='lic.svg'/>
                    <p>Attract customers with exclusive deals on tours, activities, workshops, and events tailored to their interests.</p>
                  </div>
                </li>
                <li>
                <div className='arrow-wrap'>
                <img src='lic.svg'/>
                  <p>Highlight premium or limited-time offers to build excitement and drive demand.</p>
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
              2.Foster Customer Loyalty with CommerceSynch
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
              3. Collect Insights to Improve Your Experiences with PathConnect
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

export default CommonExperinces
