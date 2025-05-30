import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React, { useState } from 'react'

const CommonAuto = () => {
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
              1. Promote Your Services and Products to the Right Audience
            </span>
          }
        >
          <div className="content">
            <div className="text-section">
              <h3>Promote Your Services and Products to the Right Audience</h3>
              <ul>
                <li>
                  <div className='arrow-wrap'>
                    <img src='lic.svg'/>
                    <p>Use the Marketplace to highlight your services, such as oil changes, tire rotations, detailing packages, or custom modifications.</p>
                  </div>
                </li>
                <li>
                <div className='arrow-wrap'>
                <img src='lic.svg'/>
                  <p>Create promotions tailored to your business, such as, Seasonal tire sales, Maintenance service packages, Discounts on performance upgrades or accessories.</p>
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
              2. Keep Customers Coming Back with CommerceSynch
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
              3.Optimize Customer Experiences with PathConnect
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

export default CommonAuto
