import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Contact = () => {
  return (
    <div>
        <Header/>
      <section class="product-section">
        <div class="container">
          <h1>Contact Us</h1>
          {/* <p>Donec pulvinar ligula sit amet ultricies tincidunt.</p> */}
          {/* <button className="common_btn">
          Create a free account to get started
          </button> */}
        </div>
        <div class="circle-decor top-left"></div>
        <div class="circle-decor bottom-right"></div>
      </section>
      <div className="get-in-touch-container">
      <div className="contact-card">
        <h2>Contact Us for a Consultation</h2>
        {/* <p>Phasellus rhoncus libero nisi, at amet consectetur est maximus in.</p> */}
        <div className="contact-info">
          <div className="info-item">
            <span><img src='ca1.png'/></span>
            <p>Customer Support: (470) 740-6841</p>
          </div>
          <div className="info-item">
            <span><img src='ca2.png'/></span>
            <p>support@pathsynch.com</p>
          </div>
          <div className="info-item">
            <span><img src='ca3.png'/></span>
            <p>Made with ❤️ in Atlanta</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Get in touch</h2>
        {/* <p>
          Vestibulum at mi a ipsum primis in faucibus sed lectus at ultricies posuere
          cursus. Phasellus rhoncus libero.
        </p> */}
        <form>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Comment*" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default Contact
