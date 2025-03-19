import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css';
import brunch from '../images/brunch.jpg';
import AppsSalad from '../images/AppsSalad.jpg';
import mains from '../images/mains.jpg';
import kidsMeal from '../images/kidsMeal.jpg';
import sweets from '../images/sweets.jpg';
import beverages from '../images/beverages.jpg';
import blog1image from '../images/Blog-1.png';
import blog2image from '../images/Blog-2.jpg';

const LandingPage = () => {
  return (
    <div className="landing-container">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Brew & Bite ☕</h1>
        <p>More than coffee. It’s a feeling, a pause, a story brewed to perfection.</p>
        <div className="hero-buttons">
          <Link to="/" className="btn">Explore Brew & Bite</Link>
        </div>
      </section>

      {/* About Section */}
      <section className="landing-about">
      <h2>About Brew & Bite</h2>
        <p>
          At <strong>Brew & Bite</strong>, we blend the finest coffee with delicious handcrafted bites to create an experience that delights your senses.
          Founded with passion, we believe in quality, innovation, and community.
        </p>
        <p>
          <strong>🌟 Our Mission:</strong> To provide exceptional coffee and food in a welcoming space.
          <strong>🎯 Our Vision:</strong> To become a global café experience driven by creativity and taste.
        </p>
        <Link to="/blog" className="read-more">Know More..</Link>
        </section>

      {/* Offerings Section */}
      <div className="WhatWeSell">

<div className='wws-heading'>
  <span className='separator-holder separator-left'></span>
  What We Sell
  <span className='separator-holder separator-right'></span>
</div>

<div className='fItems'>

<div className='fItem-1'><img src={brunch} alt="Food Item-1" className="fItem" />
<h3>Brunch</h3>
<p>From a hearty eggs and toast, to our crowd's favourite: Pulled Pork Benedict. We got you covered from sweets to savoury.</p>
</div>

<div className='fItem-2'><img src={AppsSalad} alt="Food Item-1" className="fItem" />
<h3>Apps & Salads</h3>
<p>Stimulate your appetite with our house made soups, fresh greens, or crispy wings. Better yet, try our best seller: Fried Cauliflower.</p></div>

<div className='fItem-3'><img src={mains} alt="Food Item-1" className="fItem" />
<h3>Mains</h3>
<p>We make our mains with the finest ingredients we can find to make our meals as flavourful as possible.</p></div>

<div className='fItem-4'><img src={kidsMeal} alt="Food Item-1" className="fItem" />
<h3>Kids Meal</h3>
<p>Dining with little one? We’ve got your back. We have kid’s meals tailored for 12 and below. Brunch, lunch, and dinner.</p></div>

<div className='fItem-5'><img src={sweets} alt="Food Item-1" className="fItem" />
<h3>Sweets</h3>
<p>Sweet endings or for tea break? You decide. We pride ourselves with our bestselling waffles and molten lave cake.</p></div>

<div className='fItem-6'><img src={beverages} alt="Food Item-1" className="fItem" />
<h3>Beverages</h3>
<p>Get your caffeine fix here. Not a coffee person? Fret not, we have tea, organic sparkling juice, wine, and craftbeer.</p></div>
</div>
</div>
      {/* Blog Highlights */}
      <section className="blog-highlights">
        <h2>Our Blogs</h2>
        <div className="blog-preview">
          <div className="blog-card">
            <img src={blog1image} alt="Cafe Enjoyment Tips" />
            <h3>5 Ways to Make Your Café Visits More Enjoyable</h3>
            <p>Your next café visit can be more than just a coffee break — discover how!</p>
            <Link to="/blog" className="read-more">Read Full Blog</Link>
          </div>
          <div className="blog-card">
            <img src={blog2image} alt="Mood-based Drinks" />
            <h3>How to Choose the Perfect Café Drink for Your Mood</h3>
            <p>Let your emotions guide your brew — a flavorful guide awaits.</p>
            <Link to="/blog" className="read-more">Read Full Blog</Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="landing-cta">
        <h2>Craving comfort in a cup?</h2>
        <p>Visit Brew & Bite and discover your new favorite café moment today.</p>
        <Link to="/menu" className="btn">Explore Menu</Link>
        <Link to="/contact" className="btn">Contact Us</Link>
      </section>
    </div>
  );
};

export default LandingPage;
