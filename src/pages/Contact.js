import React, { useState } from 'react';
import '../styles/Contact.css';
import whatsappIcon from '../images/icon-whatsapp.png';
import instaIcon from '../images/icon-insta.png';
import fbIcon from '../images/icon-fb.png';
import location from '../images/brewNbiteLocation.jpg';


function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };


  return (
    <>
      <div className="up"></div>
      <div className="about">
        <div className="contact-form">
          <span className="heading"><h2>CONTACT US</h2></span>
          <form>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <label>Message:</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder='Enter your message here... we will get in touch with you soon...'></textarea>
            <button type="submit">Submit</button>
          </form>
          {isSubmitted && <p>Thank you for contacting us! We will get in touch with you soon.</p>}
          <h5>or</h5>
          <div className="social-links">
            <a href="https://www.facebook.com"><img src={fbIcon} alt="facebook-icon" className="iconn" /></a>
            <a href="https://wa.me/"><img src={whatsappIcon} alt="Whatsapp" className="whatsapp-iconn iconn" /></a>
            <a href="https://www.instagram.com/brew._and_bite?igsh=dzExeTZ2MzJwZmly"><img src={instaIcon} alt="insta-icon" className="iconn" /></a>
          </div>
        </div>
        <div className='location'>
        {/* <img src={location} alt="location" className="locationIMG" /> */}
        <div className='blackBG'>
          <div className='location-content'>
            <h2>Address</h2>
            <h3>1338 Queen St W, Toronto, ON M6K 1L4, Canada</h3>
          </div>
          
          <div className='opening-hours'>
            <h2>Opening Hours</h2>
            <h3>Monday - Sunday : 9am - 11pm</h3>
          </div>
          <div className='contact-details'>
            <h2>Contact Details</h2>
            <h3>Phone: +1 234 567 890</h3>
            <h3>Mail: brewnbite@hotmail.com</h3>
          </div>
        </div>
        {/* Embedded Map */}
      </div>
        <div className="map-container">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.307741441789!2d-79.434410724552!3d43.641765271102685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35ac6318d299%3A0x94fa6c2725b5869c!2s1338%20Queen%20St%20W%2C%20Toronto%2C%20ON%20M6K%201L4%2C%20Canada!5e0!3m2!1sen!2sin!4v1738603307445!5m2!1sen!2sin" width="700" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
}

export default Contact;
