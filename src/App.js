import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { useEffect } from "react";
import Home from "./component/Page/Home";
import About from "./component/Page/About";
import ProductPage from "./component/Page/ProductPage";
import './index.scss';
import RestaurantCategory from "./component/Page/RestaurantCategory";
import Localdeals from "./component/Page/Localdeals";
import Experiences from "./component/Page/Experiences";
import Events from "./component/Page/Events";
import Health from "./component/Page/Health";
import Things from "./component/Page/Things";
import Auto from "./component/Page/Auto";
import Travel from "./component/Page/Travel";
import Pricing from "./component/Page/Pricing";
import FreeSignupPage from "./component/Page/Signup/FreeSignUp";
import Pricing2 from "./component/Page/Pricing2";
import Blog from "./component/Page/Blog";
import BlogDetail from "./component/Page/BlogDetail";
import Contact from "./component/Page/Contact";
import GoogleManagement from "./component/Page/GoogleManagement";
import LoginScreen from "./component/Page/LoginScreen";
import SignUp from "./component/Page/SignUp";
import Signup2 from "./component/Page/Signup2";
import EmailConfirmation from "./component/Page/EmailConfirmation";
import WelcomeSignup from "./component/Page/WelcomeSignup";
import Onboarding from "./component/Page/Onboarding";
import LandingDesign from "./component/Page/LandingDesign";
// import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import RefundPolicy from "./RefundPolicy";
import ReferFriend from "./component/Page/ReferFriend";
import Careers from "./component/Page/Careers";
import PrivacyPolicy from "./component/Page/PrivacyPolicy";
import AITermsOfUse from "./component/Page/AITermsOfUse";
import TermsOfUse from "./component/Page/TermsOfUse";
import AppDownload from "./component/Page/AppDownload";
import AppDownload2 from "./component/Page/AppDownload2";
import ScrollToTop from "./component/ScrollToTop";
import VerifyAccount from "./component/Page/VerifyAccount";
import Onboardingss from "./component/Page/Onboarding/Onboardingss";
import WelcomeMerchant from "./component/Page/Onboarding/WelcomeMerchant";
import MerchantSignup from "./component/Page/Signup/MerchantSignup";
import PaymentSuccess from "./component/Page/PaymentSuccess";
import RequestDemo from "./component/Page/RequestDemo";
import AuthScreen from "./component/Page/AuthScreen";
import PathParter from "./component/Page/PathParter";
import PathConnect from "./component/Page/PathConnect";
import QRSynchPage from "./component/Page/QRSynchPage";
import SynchMateApp from "./component/Page/SynchMatePage";
import CommerceSync from "./component/Page/CommerceSync";
import PathManager from "./component/Page/PathManager";
import EnterPrise from "./component/Page/EnterPrise";
import BecomePartner from "./component/Page/BecomePartner";
window.$ = window.jQuery = $;


function App(){

  React.useEffect(() => {
    // --- STEP 1: Handle URL parameters FIRST ---
    const params = new URLSearchParams(window.location.search);
    const err = params.get("error");
    if (err) {
      console.error("Login error:", err);
      // Clean the URL before doing anything else
      window.history.replaceState({}, "", window.location.pathname);
    }

    // // --- STEP 2: Now that the URL is clean, load the script ---
    // const s = document.createElement("script");
    // s.src = "http://localhost:4000/embed.js";
    // s.async = true;
    // s.setAttribute("data-key", "pk_live_test_123");
    // s.setAttribute("data-api", "http://localhost:8080");
    // document.body.appendChild(s);

    // // Cleanup function to remove the script when the component unmounts
    // return () => {
    //   s.remove();
    // };
  }, []);


  return (
    <BrowserRouter>
      <ScrollToTop />
    <Routes>
  
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-page" element={<ProductPage />}></Route>
      <Route path="/aboutus" element={<About />}></Route>
      <Route path="/restorent-category" element={<RestaurantCategory/>}></Route>
      <Route path="/local-deals" element={<Localdeals />}></Route>
      <Route path="/experinces" element={<Experiences />}></Route>
      <Route path="/events" element={<Events />}></Route>
      <Route path="/health" element={<Health />}></Route>
      <Route path="/things" element={<Things />}></Route>
      <Route path="/auto" element={<Auto/>}></Route>
      <Route path="/travel" element={<Travel/>}></Route>
      <Route path="/pricing" element={<Pricing/>}></Route>
      <Route path="/pricing-page" element={<Pricing2/>}></Route>
      <Route path="/blog" element={<Blog/>}></Route>
      <Route path="/blog-detail" element={<BlogDetail/>}></Route>
      <Route path="/contactus" element={<Contact/>}></Route>
      <Route path="/google" element={<GoogleManagement/>}></Route>
      <Route path="/login" element={<LoginScreen/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/free-signup" element={<FreeSignupPage/>}></Route>
      <Route path="/merchantSignup" element={<Signup2/>}></Route>
      <Route path="/email-confirmation" element={<EmailConfirmation/>}></Route>
      <Route path="/welcome-signup" element={<WelcomeSignup/>}></Route>
      <Route path="/verifyAccount/:id" element={<VerifyAccount/>}></Route>
      <Route path="/welcome-signup/onboarding" element={<Onboarding/>}></Route>
      <Route path="/landing-page" element={<LandingDesign/>}></Route>
      <Route path="/refund-policy" element={<RefundPolicy/>}></Route>
      <Route path="/refer-friend" element={<ReferFriend/>}></Route>
      <Route path="/careers" element={<Careers/>}></Route>
      <Route path="/privacy-policy" element={<PrivacyPolicy/>}></Route>
      <Route path="/terms-of-use" element={<TermsOfUse/>}></Route>
      <Route path="/ai-terms-of-use" element={<AITermsOfUse/>}></Route>
      <Route path="/app-download" element={<AppDownload/>}></Route>
      <Route path="/app-download2" element={<AppDownload2/>}></Route>
      <Route path="/merchantSignup/onboarding" element={<Onboardingss/>}></Route>
      <Route path="/welcomeMerchant" element={<WelcomeMerchant/>}></Route>
      <Route path="/merchat" element={<MerchantSignup/>}></Route>
      <Route path="/payment-success" element={<PaymentSuccess/>}></Route>
      <Route path="/request-demo" element={<RequestDemo/>}></Route>
      <Route path="/login-page" element={<AuthScreen/>}></Route>
      <Route path="/path-partner" element={<PathParter/>}></Route>
      <Route path="/pathconnect-page" element={<PathConnect/>}></Route>
      <Route path="/qrsynch-page" element={<QRSynchPage/>}></Route>
      <Route path="/synchmate-app" element={<SynchMateApp/>}></Route>
      <Route path="/pathcommercesync" element={<CommerceSync/>}></Route>
      <Route path="/pathmanager" element={<PathManager/>}></Route>
      <Route path="/enterprise" element={<EnterPrise/>}></Route>
      <Route path="/becomepartner" element={<BecomePartner/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}
export default App
