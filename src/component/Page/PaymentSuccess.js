import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const sessionId = localStorage.getItem("sessionId");
 const [loading, setLoading] = useState(true);
  // State to handle loading, success, or failure messages
  const [paymentStatus, setPaymentStatus] = useState('loading');  // 'loading', 'success', 'failed'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
  

    const verifyPayment = async () => {
      try {
        // Making the request with sessionId in the path
        const response = await fetch(`https://api.pathsynch.com/v2/auth/verify-payment/${sessionId}`);

        if (!response.ok) {
          throw new Error('Verification request failed');
        }

        const data = await response.json();

        if (data.paid) {
          const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails") || '{}');
          paymentDetails.status = "success";
          paymentDetails.paymentDate = new Date().toISOString();
          localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));

          setPaymentStatus('success');
          setTimeout(() => {
          navigate("/merchantSignup") },5000)
        } else {
          throw new Error("Payment not completed");
        }
      } catch (error) {
        console.error("Payment verification failed:", error);
        setPaymentStatus('failed');
        setErrorMessage(error.message);
     
      }
      finally {
        setLoading(false);
      }
    };

    // Call the verifyPayment function if sessionId is available
    verifyPayment();
  }, [sessionId, navigate]);

  // Render different messages based on the payment status
  const renderMessage = () => {
    if (paymentStatus === 'loading') {
      return <p>Please wait while we verify your payment details...</p>;
    }
    if (paymentStatus === 'success') {
      return <h2>Thank you! Your payment was successful.</h2>;
    }
    if (paymentStatus === 'failed') {
      return <h2>Payment Failed!</h2>;
    }
  };

  return (
    <>
    {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

<Link className="text-start d-block mt-3" to={"/"}>
           <img
             src="LOGO.png"
             alt={"website-logo"}
             style={{ verticalAlign: "sub", width: "180px", marginLeft: "20px" }}
           />
         </Link>
<div className="campaign-builder-container">
      <h2>{paymentStatus === 'loading' ? 'Processing your payment...' : null}</h2>
      {renderMessage()}
      {paymentStatus === 'failed' && <p>{errorMessage}</p>}
    </div>
    </>
  );
};

export default PaymentSuccess;
