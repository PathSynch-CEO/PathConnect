import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* // HTML Structure for Footer Section */}
      <div class="footer-section">
        <div class="footer-links">
          <div class="footer-logo">
            <img
              className="footerlogo"
              src="footerlogo.svg"
              alt="PathSynch Logo"
            />
            <img className="barimg" src="barcode.svg" alt="PathSynch Logo" />
            <button class="learn-more">Learn More</button>
          </div>
          <ul class="solutions">
            <h5>Solutions</h5>
            <li>Gift Cards</li>
            <li>
              <Link to="/refund-policy">Refunds</Link>{" "}
            </li>
            <li>Cashback</li>
            <li>Memberships</li>
            <li>Loyalty Programs</li>
            <li>
              {" "}
              <Link to="/refer-friend">Referrals</Link>
            </li>
          </ul>
          <ul class="resources">
            <h5>Resources</h5>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <li>Case Studies</li>
            <li>Help Center</li>
            <Link to="/request-demo">
              <li>Demo Request</li>
            </Link>
            <Link to="/becomepartner">
              <li>Become Partner</li>
            </Link>
          </ul>
          <ul class="company">
            <h5>Company</h5>
            <Link to="/aboutus">
              {" "}
              <li>About Us</li>
            </Link>
            <Link to="/contactus">
              <li>Contact Us</li>
            </Link>
            <Link to="/careers">
              {" "}
              <li>Careers</li>
            </Link>
            <Link to="/privacy-policy">
              <li>Privacy Policy</li>
            </Link>

            <Link to="/terms-of-use">
              <li>Terms and Conditions</li>
            </Link>
          </ul>
        </div>
        <div className="bottom_footer">
          <div class="footer-copyright">
            © 2024 PathSynch. All Rights Reserved.
          </div>
          <div className="social-link">
            <a
              href="https://x.com/pathsynch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="barimg" src="twitter.svg" alt="PathSynch Logo" />
            </a>
            <a
              href="https://www.instagram.com/pathsynch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="barimg" src="fb.svg" alt="PathSynch Logo" />
            </a>
            <a
              href="https://www.linkedin.com/company/pathsynch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="barimg" src="linkedin.svg" alt="PathSynch Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
