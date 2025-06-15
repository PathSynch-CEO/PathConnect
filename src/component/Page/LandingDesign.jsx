import React, { useEffect, useRef, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Form from "react-bootstrap/Form";
import BenefitsCarousel from "./BenefitsCarousel";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CustomerCarousel from "./CustomerCaroasel";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const LandingDesign = () => {
  const [error, setError] = useState({ name: "", email: "" });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const location = useLocation();
  const datas = location?.state;
  const inputRef = useRef(null);
  const [locationDetails, setLocationDetails] = useState({
    address: "",
    city: "",
    zip: "",
    state: "",
    country: "",
    mapUrl: "",
  });

  const handlePayment = async () => {
    // Validate inputs
    if (!name) {
      setError((prev) => ({ ...prev, name: "Business Name is required" }));
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError((prev) => ({ ...prev, email: "Valid email is required" }));
      return;
    }

    // Prepare address data for storage
    const addressData = {
      businessName: name,
      email: email,
      street: locationDetails.address,
      city: locationDetails.city,
      zipCode: locationDetails.zip,
      state: locationDetails.state, // Just the state name
      country: locationDetails.country,
      mapUrl: locationDetails.mapUrl
    };

    // Store in localStorage
    localStorage.setItem("businessInfo", JSON.stringify(addressData));
    localStorage.setItem("sessionStartTime", new Date().toISOString());
    localStorage.setItem("buisnessname", name);
    localStorage.setItem("email", email);
    localStorage.setItem("address", locationDetails?.address || "");
    localStorage.setItem("city", locationDetails?.city || "");
    localStorage.setItem("zip", locationDetails?.zip || "");
    localStorage.setItem("state", locationDetails?.state || "");
    localStorage.setItem("country", locationDetails?.country || "");

    setIsProcessingPayment(true);
    try {
      const response = await fetch("https://api.pathsynch.com/v2/auth/stripe-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name, 
          unit_amount: datas?.totalPrice * 100, 
          email,
          productDetails: datas,
          address: addressData // Send complete address data to API
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        localStorage.setItem("sessionId", data.sessionId);
        
        const paymentDetails = {
          date: new Date().toISOString(),
          status: "pending",
          amount: datas?.totalPrice,
          currency: "USD",
          businessInfo: addressData,
          product: datas,
          sessionId: data.sessionId
        };
        
        localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));

        const stripe = await loadStripe("pk_live_51OAeaRCwhZJHjP6KcmrheTOmDNRbdTweqGPX6SVbrQTF9DHi8P2xegWP61D6R1NqZ5GkiLQeU17hGvGSjB8VZGXR0099BPjO83");
        //USE FOR TESTING:: const stripe = await loadStripe("pk_test_51OAeaRCwhZJHjP6KxgcYEnNjl9krmgFtfkZi9bi3T7rvY8q0CDXjzeSrn5WBdvPALchyeiTz749HGS7VlrqBxsNP00T8zbvMfa");
        const { error } = await stripe.redirectToCheckout({ 
          sessionId: data.sessionId 
        });

        if (error) throw error;
      } else {
        throw new Error(data.message || "Payment failed");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert(`Payment error: ${error.message}`);
      
      // Update failed payment status
      const paymentDetails = JSON.parse(localStorage.getItem("paymentDetails") || {});
      paymentDetails.status = "failed";
      paymentDetails.error = error.message;
      localStorage.setItem("paymentDetails", JSON.stringify(paymentDetails));
    } finally {
      setIsProcessingPayment(false);
    }
  };

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (!window.google) return;

      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current,
        { 
          types: ["establishment"],
          fields: ["address_components", "formatted_address", "geometry", "name", "url"]
        }
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        if (!place.address_components) return;

        let address = "", city = "", zip = "", state = "", country = "";

        place.address_components.forEach((component) => {
          const type = component.types[0];
          if (type === "street_number" || type === "route") {
            address = address ? `${address} ${component.long_name}` : component.long_name;
          } else if (type === "locality") {
            city = component.long_name;
          } else if (type === "postal_code") {
            zip = component.long_name;
          } else if (type === "administrative_area_level_1") {
            state = component.long_name; // Store just the state name
          } else if (type === "country") {
            country = component.long_name;
          }
        });

        setLocationDetails({
          address: address || place.formatted_address?.split(',')[0] || "",
          city,
          zip,
          state, // Only state name
          country,
          mapUrl: place.url || ""
        });

        setName(place.name || address || place.formatted_address?.split(',')[0] || "");
      });
    };

    if (window.google) {
      loadGoogleMaps();
    } else {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA4yCkHjO2FxEEIoKZTeom0I6Kaz7e5hzU&libraries=places`;
      script.async = true;
      script.onload = loadGoogleMaps;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="landing-page">
      <Header />
      
      {isProcessingPayment && (
        <div className="loader-overlay">
          <div className="loader"></div>
          <p>Processing your payment...</p>
        </div>
      )}

      <div className="business-reviews-container product-section">
        <div className="content">
          <h2>
            Boost Business with <br /> Seamless Reviews!
          </h2>
          <p>
            Encourage positive reviews with a simple tap! Our NFC review cards
            are the perfect tool for driving more Yelp and Google reviews,
            helping your business shine online.
          </p>
          <p className="highlight">
            Get Yours and Start Collecting Reviews Instantly!
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>

        <div className="circle-decor top-left"></div>
        <div className="circle-decor bottom-right"></div>
        <div className="image-section">
          <img src="/la1.png" alt="Google Review Card" className="card-image" />
        </div>
      </div>

      <div className="nfc-card-section">
        <div className="nfc-card-image">
          <img src="la2.png" alt="NFC Review Cards" />
        </div>

        <div className="nfc-card-info">
          <h2>NFC Review Cards</h2>
          <p className="nfc-card-price">$ {datas?.totalPrice}</p>

          <div className="nfc-card-badges">
            <span className="nfc-badge">
              <img src="truck.svg" alt="Fast delivery" /> Fast US delivery
            </span>
            <span className="nfc-badge">
              <img src="days.png" alt="Money back" /> 14-day Money Back Guarantee
            </span>
          </div>

          <div className="nfc-card-options">
            <div className="input-main-wrap">
              <div className="nfc-card-input-group">
                <p>Business Name:</p>
                <input
                  type="text"
                  ref={inputRef}
                  placeholder="Search for a business..."
                  onChange={(e) => {
                    setName(e.target.value);
                    setError((prev) => ({ ...prev, name: "" }));
                  }}
                  value={name}
                />
                {error.name && <p className="error-text">{error.name}</p>}
              </div>

              <div className="nfc-card-input-group">
                <p>Address:</p>
                <input type="text" value={locationDetails.address} readOnly />
              </div>
              <div className="nfc-card-input-group">
                <p>City:</p>
                <input type="text" value={locationDetails.city} readOnly />
              </div>
              <div className="nfc-card-input-group">
                <p>Zip Code:</p>
                <input type="text" value={locationDetails.zip} readOnly />
              </div>
              <div className="nfc-card-input-group">
                <p>State:</p>
                <input type="text" value={locationDetails.state} readOnly />
              </div>
              <div className="nfc-card-input-group">
                <p>Country:</p>
                <input type="text" value={locationDetails.country} readOnly />
              </div>
              <div className="nfc-card-input-group">
                <p>Google Maps Link:</p>
                <input type="text" value={locationDetails.mapUrl} readOnly />
              </div>
              <div className="nfc-card-input-group">
                <p>Email:</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError((prev) => ({ ...prev, email: "" }));
                  }}
                  value={email}
                />
                {error.email && <p className="error-text">{error.email}</p>}
              </div>
            </div>
            <div className="nfc-card-buttons">
              <button className="nfc-buy-now" onClick={handlePayment}>
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <BenefitsCarousel />
      </section>

      <div className="benefits-section">
        <div className="benefit-card-wrap">
          <div>
            <img src="yellow1.png" alt="Premium Quality" />
          </div>
          <h3>PREMIUM QUALITY</h3>
          <p>
            Our cards have been sourced and selected to ensure our products are
            of the highest quality.
          </p>
        </div>

        <div className="benefit-card-wrap">
          <div>
            <img src="yellow2.png" alt="Free Shipping" />
          </div>
          <h3>FREE SHIPPING</h3>
          <p>
            We provide free delivery and free returns on all our products within
            continental United States.
          </p>
        </div>

        <div className="benefit-card-wrap">
          <div>
            <img src="yellow3.png" alt="Express Delivery" />
          </div>
          <h3>EXPRESS DELIVERY</h3>
          <p>
            An Express-Parcel will reach its destination before 10:00 the next
            working day.
          </p>
        </div>
      </div>

      <div className="landing-tab-wrap">
        <div className="heading-wrap">
          <h3>Choose the Right Plan for Your Business</h3>
          <p>
            At PathSynch, we understand that every business is unique. That's why
            we offer a tiered pricing model designed to meet the needs of your
            businesses, with optional add-ons to enhance your subscription,
            putting you on the Path to success.
          </p>
        </div>
      </div>

      <section>
        <CustomerCarousel />
      </section>

      <section>
        <div className="contact-form-container">
          <h2>Curabitur rutrum, dui vel commodo maximus</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Restaurant Name" />
              <input type="text" placeholder="Other POS" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Address" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Zip Code" />
            </div>
            <div className="form-row">
              <textarea placeholder="Message"></textarea>
            </div>
            <button type="submit">Get In Touch</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingDesign;
