// src/pages/Home.js
import React from 'react';
import '../styles/Home.css';
import TestimonialCarousel from "../components/TestimonialCarousel";
import aboutUS from '../images/about-section.png';
import menuIMG from '../images/menu-section.png';
import vLine from '../images/vertical-line.png';
import logo from '../images/bottom-cup-icon.png';
import contactIMG from '../images/contact-side-img.jpg';

const Home = () => {
  return (
    <><div className="home-container">
      <div className="home-content">
        <h1>Welcome to Brew & Bite</h1>
        <p>Here, every cup tells a story.</p>
        <a href="/menu"><button class="boton-elegante">View Menu</button></a>
      </div>
      <img src={logo} alt="Logo" className="bottom-center-image" />
    </div><div className="section-2">
        <img src={vLine} alt="vertical-line" className="vertical-line" />
        <div className="section-2-content">
          <p>Since 2018</p>
          <p id="intro">
            Inspired by cafe culture prevalent all over, we are a cafe that prides ourselves on excellent coffee, fresh ingredients & heartfelt service!</p>
        </div>

        <img src={vLine} alt="vertical-line" className="vertical-line-2 " />

        <div className="about-section"><p>Welcome to Brew & Bite, where we bring together the essence of great tasting coffee and delicious food. Founded by a group of passionate individuals, our mission is to offer a hearty brunch and a perfect cup of coffee to brighten your day.</p>
          <p>At Brew & Bite, we pride ourselves on using only the freshest ingredients and locally roasted coffee beans. Our menu is a delightful fusion of foreign and local flavors, carefully crafted to ensure an unforgettable culinary experience without compromising on taste and quality.</p>
          <a href="/about">About Us</a>
        </div>

        <div className="menu-section"><p>Welcome to Brew & Bite, an Indian-inspired haven cherished by our community. We take pride in offering a diverse menu that celebrates both traditional and contemporary flavors. Our unbeatable breakfast and brunch options are complemented by a delicious selection of mains, including aromatic curries, succulent kebabs, flavorful biryanis, and a variety of vegetarian delights—all at prices that everyone can enjoy.</p>
          <a href="/menu">Menu</a>
        </div>
        <img src={aboutUS} alt="Food Item-1" className="aboutUS" />
        <img src={menuIMG} alt="Food Item-1" className="menuIMG" />
      </div>
      
      <div className='contact-us'>
        <div className='contact-content'>
        <h5 className='contact-conten'>Looking for a space to organize your private event or party?</h5>
        <h5 className='contact-conten'>You get into the right place!</h5>
        <h5 className='contact-conten'>Contact us and tell us your requirements.</h5>
        <a href = "/contact"><button class="boton-elegante">Contact Us</button></a>
      </div>
      <img src={contactIMG} alt="contact" className="contact-side-image" />
      </div>
      <div>
      <TestimonialCarousel />
      </div></>

  );
};

export default Home;
