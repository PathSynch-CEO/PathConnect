import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const RequestDemo = () => {
  return (
    <div>
      <Header />
      <div className="get-started">
        <div className="info-card">
          <h2>Get Started with PathSynch - See It in Action</h2>
          <ul>
            <li>✔ WoolStation increased their repeat customer rate by 33% using our automated Fixed CRMX solution.</li>
            <li>✔ City Natural Inc. increased their revenue from memberships by 52%.</li>
            <li>✔ Miami Meals saw a 500% gift card sale increase in their last 30 days.</li>
            <li>✔ Delta Couture reduced their returns expenses by over 40% after implementing PathSynch.</li>
          </ul>
        </div>

        <div className="form-container">
          <form>
            <div className="form-group">

              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="url" placeholder="Website URL" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div className="form-group">
              <select>
                <option>Store orders per month*</option>
                <option>0-100</option>
                <option>100-500</option>
                <option>500+</option>
              </select>
              <select>
                <option>BigCommerce</option>
                <option>Magento</option>
                <option>Odoo</option>
                <option>Shopify</option>
                <option>Shopify Plus</option>
                <option>Square</option>
                <option>Wix</option>
                <option>WooCommerce</option>
                <option>Other</option>
              </select>

            </div>
            <div className="form-group">
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default RequestDemo
