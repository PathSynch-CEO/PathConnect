import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const termsSections = [
  {
    title: '1. Acceptance of Terms',
    content:
      'Welcome to PathSynch! By using our app, you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use our app.',
  },
  {
    title: '2. Use of the App',
    content:
      'You must be 18 years or older to use this app. You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.',
  },
  {
    title: '3. User Conduct',
    content:
      'You agree not to engage in any activity that may disrupt the functioning of the app or interfere with other users’ access to the app.',
  },
  {
    title: '4. Intellectual Property',
    content:
      'All content and materials available on PathSynch, including but not limited to text, graphics, logos, button icons, images, audio clips, data compilations, and software, are the property of PathSynch and are protected by copyright laws.',
  },
  {
    title: '5. Termination',
    content:
      'We reserve the right to terminate or suspend your account and access to the app at our sole discretion, without notice, for conduct that we believe violates these Terms of Use.',
  },
  {
    title: '6. Changes to Terms',
    content:
      'We reserve the right to modify, alter, or update these Terms of Use at any time. Your continued use of the app after such modifications will constitute your acknowledgment of the modified Terms of Use and agreement to abide by them.',
  },
];

const TermsOfUse = () => {
  return (
   <div className='bg-green'>
    <Header/>
    <div className="terms-of-use">
      <h2 className="terms-title">Terms of Use</h2>
      <div className="terms-content">
        {termsSections.map((section, index) => (
          <div className="terms-section" key={index}>
            <h3 className="section-heading">{section.title}</h3>
            <p className="section-text">{section.content}</p>
          </div>
        ))}
      </div>
     
    </div>
    <div className=" button-group">
        <button className="btn decline">Decline</button>
        <button className="btn accept">Accept</button>
      </div>
    <Footer/>
   </div>
  );
};

export default TermsOfUse;
