import React from 'react';
import { Link } from 'react-router-dom';
import instaIcon from '../images/icon-insta.png';
import fbIcon from '../images/icon-fb.png';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">Brew & Bite</Link>
        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact Us</Link>   
          <Link to="/blog">Blogs</Link>   
          <Link to="/thank">ThankYou</Link>   
        </div>
        <div class = "widgets"> 
         <a href = "#">+1 234 567 890</a> 
        <a href = "https://www.facebook.com/"><img src={fbIcon} alt="facebook-icon" className="icon" /></a>
        <a href = "https://www.instagram.com/brew._and_bite?igsh=dzExeTZ2MzJwZmly"><img src={instaIcon} alt="insta-icon" className="icon" /></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
