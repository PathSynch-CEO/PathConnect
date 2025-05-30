import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const privacySections = [
  {
    title: '1. Information We Collect',
    content:
      'We collect personal information such as your name, email address, and phone number when you create an account on PathSynch. We also collect usage data and device information for analytics purposes.',
  },
  {
    title: '2. How We Use Your Information',
    content:
      'We use your personal information to provide, maintain, and improve our services. This includes personalized content, communications, and recommendations. We may also use your information to respond to your inquiries and send you service-related notifications.',
  },
  {
    title: '3. Data Security',
    content:
      'We take appropriate measures to protect your personal information from unauthorized access and disclosure. We regularly review our security procedures to ensure your data is safe with us.',
  },
  {
    title: '4. Third-Party Disclosure',
    content:
      'We do not sell, trade, or otherwise transfer your personal information to outside parties. However, we may share your information with trusted third parties who assist us in operating our app, conducting our business, or servicing you.',
  },
  {
    title: '5. Cookies and Tracking Technologies',
    content:
      'We use cookies and similar tracking technologies to enhance your experience on our app. You can choose to disable cookies through your browser settings, but it may affect certain features of the app.',
  },
  {
    title: '6. Changes to Privacy Policy',
    content:
      'We reserve the right to modify our privacy policy at any time. Any changes to the policy will be notified through the app or via email.',
  },
  {
    title: '7. Contact Us',
    content:
      'If you have any questions about our Privacy Policy, please contact us at [your contact email/phone number].',
  },
];


const PathParter = () => {
  return (
    <div>
      <div className='bg-green'>
      <Header/>
      <div className="privacy-policy">
      <h2 className="privacy-title">PathSynch Partner Code of Conduct</h2>
      <div className="policy-content">
        {privacySections.map((section, index) => (
          <div className="policy-section" key={index}>
            <h3 className="policy-heading">{section.title}</h3>
            <p className="policy-text">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div> 
    </div>
  )
}

export default PathParter
