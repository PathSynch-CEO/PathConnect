import React from 'react'
// import logo from '../../public/logohome.svg';
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div>
       <header className="header">
      <div className="top-bar">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
      <nav className="navbar">
        <div className="logo">
          <img src="/logohome.svg" alt="PathSynch Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/product-page">Platform</Link></li>
          <li>Pricing</li>
          <li>Company</li>
          <li>Resources</li>
        </ul>
        <div className="actions">
          <button className="download-btn">Download App</button>
          <span className="login">Login</span>
          <span className="signup">Sign Up Free</span>
        </div>
      </nav>
    </header>
    </div>
  )
}

export default Header
