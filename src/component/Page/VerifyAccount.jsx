import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const VerifyAccount = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasVerified, setHasVerified] = useState(false); // New state to track verification

  useEffect(() => {
    // Only verify if not already verified
    if (!hasVerified) {
      const verifyToken = async () => {
        try {
          const response = await fetch(`https://api.pathsynch.com/v2/auth/register/merchant/verify/${id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Verification failed');
          }

          if (data.data.userid) {
            localStorage.setItem('merchantId', data.data.userid);
          }

          setHasVerified(true); // Mark as verified
          navigate('/welcomeMerchant');
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      verifyToken();
    }
  }, [id, navigate, hasVerified]); // Include hasVerified in dependencies

  return (
    <div>
      {loading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}

      <Header />
      <div className="campaign-builder-container">
        <h1 className="text-center">
          {loading ? 'Verifying your account...' : 'Account Verification'}
        </h1>
        {!loading && !error && (
          <p className="text-center">Your account has been verified successfully!</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default VerifyAccount;