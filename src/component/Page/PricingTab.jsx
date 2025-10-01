import { useEffect, useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { loadStripe } from "@stripe/stripe-js";

function PricingTab({ data }) {
  const navigate = useNavigate(); // Initialize navigate
  const [activeTab, setActiveTab] = useState("Reviews");
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricing = {
    monthly: [14.99, 69.99, 129],
    yearly: [143.99, 671.9, 1240],
  };
  //console.log("whats in?",data);
  // Gate PathManager options by previously chosen PathConnect tier.
  // Lower PC tier => more PM options; higher PC tier => disable lower PM options.
  // Map the PathConnect planId (from Pricing2.jsx) to the minimum allowed PM index:
  // 0 => '1 NFC Card', 1 => '3 NFC Cards', 2 => '5/10 NFC Cards'
  const levelByPcPlan = {
    pcstarter: 0,
    pcgrowth: 1,
    pcpoweruser: 1,
    pcenterpise: 2, // Enterprise/highest
  };

  const getMinLevel = () => {
    if (!data?.planId) return 0; // default: allow all
    return levelByPcPlan[data.planId] ?? 0;
  };

  const isButtonEnabled = (planIndex) => {
    return planIndex >= getMinLevel();
  };

  const handlePayment = (planIndex) => {
    if (!isButtonEnabled(planIndex)) return;
    const selectedPlanAmount = pricing[billingCycle][planIndex].toFixed(2);
    const totalPrice = parseFloat(data?.price) + parseFloat(selectedPlanAmount);

    const plans =
      billingCycle === "yearly"
        ? ["pmgrowth_yearly", "pmpoweruser_yearly", "pmenterprise_yearly"]
        : ["pmgrowth", "pmpoweruser", "pmenterprise"];

    navigate("/landing-page", {
      state: {
        totalPrice: totalPrice,
        selectedPlanAmount: selectedPlanAmount,
        plan: plans[planIndex],
        addOn: data.planId,
      },
    });
  };

  useEffect(() => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  }, []);

  return (
    <div className="choose-plan">
      <div className="pricing-container">
        <div className="toggle-wrap">
          <div className="payment-toggle">
            <button
              className={`monthly ${
                billingCycle === "monthly" ? "active" : ""
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Pay monthly
            </button>
            <button
              className={`yearly ${billingCycle === "yearly" ? "active" : ""}`}
              onClick={() => setBillingCycle("yearly")}
            >
              Pay yearly <span className="discount">Save 20%</span>
            </button>
          </div>
        </div>
        <h3>PathConnect powered by PathManager</h3>
        <div className="plans">
          {["1 NFC Card", "3 NFC Cards", "5/10 NFC Cards"].map(
            (plan, index) => (
              <div className="plan highlight" key={index}>
                <div className="plan-wrap">
                  <div className="plan-header">
                    <img src="rock2.svg" alt="Starter Plan Icon" />
                    <p className="starter-plan">{plan}</p>
                  </div>
                  <p className="price">
                    ${pricing[billingCycle][index].toFixed(2)}
                    <span>/{billingCycle}</span>
                  </p>
                  {/* <p className='grey-txt'>Nam mi magna, feugiat</p> */}
                </div>
                <ul>
                  {plan === "1 NFC Card" && (
                    <>
                      <li>NFC-Enabled Customer Feedback on GMB Page</li>
                      <li>PathManager Dashboard</li>
                      <li>Google My Business Integration for Reviews</li>
                      <li>Basic insights and analytics in stats</li>
                    </>
                  )}

                  {plan === "3 NFC Cards" && (
                    <>
                      <li>Everything in Starter Plan</li>
                      <li>AI-powered sentiment analysis</li>
                      {/* <li>Advanced analytics with historical comparison (30 days)</li> */}
                      <li>Real-time alerts for negative reviews</li>
                      <li>
                        Reputation management and automated review responses
                      </li>
                    </>
                  )}

                  {plan === "5/10 NFC Cards" && (
                    <>
                      <li>Everything in Growth Plan</li>
                      <li>Multi-location feedback management</li>
                      <li>Integration for Systems</li>
                      <li>Full-service data analysis & advanced reporting</li>
                      {/* <li>Priority Support</li> */}
                    </>
                  )}
                </ul>

                <button
                  className="btn"
                  disabled={!isButtonEnabled(index)}
                  onClick={() => handlePayment(index)}
                >
                  Get Started
                </button>
              </div>
            )
          )}
        </div>
      </div>

      {/* <Tab 
          eventKey="longer-tab" 
          title={
            <>
              <img src="/ch2.svg" alt="Loyalty Icon" />
              Loyalty
            </>
          }
        >
          Tab content for Loyalty
        </Tab>

        <Tab 
          eventKey="contact" 
          title={
            <>
              <img src="/ch3.png" alt="Rewards Icon" style={{width:"90px"}} />
              Rewards & Loyalty
            </>
          }
        >
          Tab content for Contact
        </Tab> */}
    </div>
  );
}

export default PricingTab;
