// import React from 'react';
import '../components/style.css';

export function Contact() {
  return (
    <div id="contact" className="section">
      <h1 style={{marginTop:'60px',}}>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt fa-3x mb-3"></i>
          <h2>Visit Us</h2>
          <p>Kairaba Avenue</p>
        </div>
        <hr className="contact-separator" />
        <div className="contact-item">
          <i className="fas fa-phone fa-3x mb-3"></i>
          <h2>Call Us</h2>
          <p>+220 7516820</p>
        </div>
        <hr className="contact-separator" />
        <div className="contact-item">
          <i className="fas fa-envelope fa-3x mb-3"></i>
          <h2>Email Us</h2>
          <p>info@stagambia.net</p>
        </div>
      </div>
      <hr className="section-separator" />
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3880.450844997631!2d-16.67926932556465!3d13.446283004294905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDI2JzQ2LjYiTiAxNsKwNDAnMzYuMSJX!5e0!3m2!1sen!2sgm!4v1722944580198!5m2!1sen!2sgm"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          // tabIndex="0"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
