import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* // HTML Structure for Footer Section */}
<div class="footer-section">

  <div class="footer-links">
  <div class="footer-logo">
    <img className='footerlogo' src="footerlogo.svg" alt="PathSynch Logo" />
    <img className='barimg' src="barcode.svg" alt="PathSynch Logo" />
    <button class="learn-more">Learn More</button>
  </div>
    <ul class="solutions">
      <li>Gift Cards</li><li>Refunds</li><li>Cashback</li>
      <li>Memberships</li><li>Loyalty Programs</li><li>Referrals</li>
    </ul>
    <ul class="resources">
      <li>Blog</li><li>Case Studies</li><li>Help Center</li>
      <li>Demo Request</li><li>Become Partner</li>
    </ul>
    <ul class="company">
      <li>About Us</li><li>Contact Us</li><li>Careers</li>
      <li>Privacy Policy</li><li>Terms and Conditions</li>
    </ul>
  </div>
 <div className='bottom_footer'>
 <div class="footer-copyright">© 2024 PathSynch. All Rights Reserved.</div>
 <div className='social-link'>
 <img className='barimg' src="fb.svg" alt="PathSynch Logo" />
 <img className='barimg' src="twitter.svg" alt="PathSynch Logo" />
 <img className='barimg' src="youtube.svg" alt="PathSynch Logo" />
 </div>
 </div>
</div>
    </div>
  )
}

export default Footer
