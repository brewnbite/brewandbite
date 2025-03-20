// src/components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Disclaimer</h2>
      <p>
        The information provided on this website is intended for educational purposes only. 
        While every effort has been made to ensure the accuracy and reliability of the content, 
        the university does not guarantee its completeness or effectiveness. This website will be 
        deactivated once the course is completed. Some images used on this site have been 
        sourced from the internet and are included for educational and practice purposes only. 
        If you are the copyright owner of any image and believe it has been used without proper 
        attribution, please contact us, and we will make the necessary corrections.
      </p>
      <p>
        The views expressed on this site do not necessarily reflect the official policies or 
        positions of the university. The university is not responsible for any errors or omissions 
        or the results obtained from using this information.
      </p>
      <p>
        By using this website, you acknowledge and agree to these terms.
      </p>
    </div>
    <p>&copy; 2018 Brew & Bite. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/brew._and_bite?igsh=dzExeTZ2MzJwZmly" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      
    </footer>
  );
};

export default Footer;
