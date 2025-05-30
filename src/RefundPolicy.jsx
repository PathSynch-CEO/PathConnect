import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';


const RefundPolicy = () => {
  return (
    <div>
        <Header/>
        <div className="refund-policy-container">
      <h2 className="policy-title">Refund Policy</h2>
      
      <div className="policy-section">
        <h3>1. Refund Eligibility</h3>
        <p>
          We offer refunds within [number of days, e.g., 30 days] of your purchase date. 
          To be eligible for a refund, your request must be made within this period.
        </p>
      </div>

      <div className="policy-section">
        <h3>2. Valid Reasons for Refund</h3>
        <ul>
          <li>
            <strong>Defective or Damaged Product:</strong> If the product you received is defective or damaged, we will issue a refund or send you a replacement.
          </li>
          <li>
            <strong>Unsatisfactory Service:</strong> If you are unsatisfied with our service and can provide a valid reason, we will refund your payment.
          </li>
        </ul>
      </div>

      <div className="policy-section">
        <h3>3. How to Request a Refund</h3>
        <p>
          To request a refund, please contact our customer support team at [your support email/phone number]. 
          Provide your order number and a detailed explanation of the reason for your refund request. 
          We will process your request within [number of days, e.g., 7 days] after verification.
        </p>
      </div>

      <div className="policy-section">
        <h3>4. Refund Process</h3>
        <p>
          Once your refund request is approved, the refund will be issued to the original payment method used for the purchase. 
          Please allow [number of days, e.g., 5–7 business days] for the refund to reflect in your account.
        </p>
      </div>

      <div className="policy-section">
        <h3>5. Contact Us</h3>
        <p>
          If you have any questions about our Refund Policy, please contact us at [your contact email/phone number].
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default RefundPolicy;


