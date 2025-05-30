import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const [isPlatformOpen, setIsPlatformOpen] = useState(false);
  const location = useLocation();

  // List of all platform sub-pages
  const platformPages = [
    '/product-page',
    '/pathconnect-page',
    '/pathcommercesync',
    '/pathmanager'
  ];

  // Check if current route is a platform sub-page
  const isPlatformActive = platformPages.includes(location.pathname);

  return (
    <div>
      <header className="header">
        <div className="top-bar">Redefining Loyalty, Reinventing Commerce</div>
        <nav className="navbar">
          <Link to="/">
            <div className="logo">
              <img src="/logohome.svg" alt="PathSynch Logo" />
            </div>
          </Link>
          <ul className="nav-links">
            <li 
              onMouseEnter={() => setIsPlatformOpen(true)}
              onMouseLeave={() => setIsPlatformOpen(false)}
            >
              <div className={`nav-link ${isPlatformActive ? 'active-link' : ''}`}>
                Platform
              </div>
              
              {isPlatformOpen && (
                <div 
                  className="platform-dropdown"
                  onMouseEnter={() => setIsPlatformOpen(true)}
                  onMouseLeave={() => setIsPlatformOpen(false)}
                >
                  <div className="dropdown-content">
                    <div className="dropdown-column">
                      <ul className="platform-features">
                        <li>
                          <NavLink 
                            to="/product-page" 
                            className={({ isActive }) => isActive ? 'feature-item active' : 'feature-item'}
                            onClick={() => setIsPlatformOpen(false)}
                          >
                            <div className="feature-icon">
                              <img className="a1" src="a1.png" style={{width:"40px"}} alt="Marketplace" />
                            </div>
                            <div className="feature-text">
                              <h4>Marketplace</h4>
                              <p>Your Path to Local Discovery</p>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink 
                            to="/pathconnect-page" 
                            className={({ isActive }) => isActive ? 'feature-item active' : 'feature-item'}
                            onClick={() => setIsPlatformOpen(false)}
                          >
                            <div className="feature-icon">
                              <img className="a1" src="a2.svg" style={{width:"40px"}} alt="PathConnect" />
                            </div>
                            <div className="feature-text">
                              <h4>PathConnect</h4>
                              <p>Reviews & Custom Feedback</p>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink 
                            to="/pathcommercesync" 
                            className={({ isActive }) => isActive ? 'feature-item active' : 'feature-item'}
                            onClick={() => setIsPlatformOpen(false)}
                          >
                            <div className="feature-icon">
                              <img className="a1" src="a3.svg" style={{width:"40px"}} alt="CommerceSynch" />
                            </div>
                            <div className="feature-text">
                              <h4>CommerceSynch</h4>
                              <p>Membership & Commerce Engine</p>
                            </div>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink 
                            to="/pathmanager" 
                            className={({ isActive }) => isActive ? 'feature-item active' : 'feature-item'}
                            onClick={() => setIsPlatformOpen(false)}
                          >
                            <div className="feature-icon">
                              <img className="a1" src="4th.jpeg" style={{width:"40px"}} alt="PathManager" />
                            </div>
                            <div className="feature-text">
                              <h4>PathManager</h4>
                              <p>Business Intelligence & Actionable Items</p>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/pricing-page"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutus"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Company
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/becomepartner"
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Resources
              </NavLink>
            </li>
          </ul>
          <div className="actions">
            <Link to="/app-download">
              <button className="download-btn">Download App</button>
            </Link>
            <Link to="/login">
              <span className="login">Login</span>
            </Link>
            <Link to="/signup">
              <span className="signup">Sign Up Free</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;