import React from "react";
import { motion } from "framer-motion";
import "../styles/About.css";
import founder1 from "../images/founder1.jpg";
import founder2 from "../images/founder2.jpg";


const About = () => {
  return (
    <><div className="up"></div><motion.div
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Company Overview */}
      <motion.section
        className="company-overview"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Brew & Bite</h2>
        <p>
          At <strong>Brew & Bite</strong>, we blend the finest coffee with delicious handcrafted bites to create an experience that delights your senses.
          Founded with passion, we believe in quality, innovation, and community.
        </p>
        <p>
          <strong>🌟 Our Mission:</strong> To provide exceptional coffee and food in a welcoming space.
          <strong>🎯 Our Vision:</strong> To become a global café experience driven by creativity and taste.
        </p>
      </motion.section>

      {/* Founders & Leadership Team */}
      <motion.section
        className="team-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <h2>Meet Our Founders</h2>
        <div className="team-grid">
          <motion.div
            className="team-member"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={founder1} alt="Founder" />
            <h3>Abhay Aneja</h3>
            <p>Co-Founder & CEO</p>
            <p>Expert in coffee craft and hospitality with 10+ years of experience.</p>
          </motion.div>
          <motion.div
            className="team-member"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={founder2} alt="Founder" />
            <h3>Jane Smith</h3>
            <p>Co-Founder & Head Chef</p>
            <p>Passionate about culinary artistry, crafting the perfect café experience.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline or Milestones */}
      <motion.section
        className="timeline"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>Our Journey</h2>
        <ul>
          <li><strong>2018:</strong> Brew & Bite was founded ☕</li>
          <li><strong>2020:</strong> First café opened 🚀</li>
          <li><strong>2022:</strong> Signature coffee blends launched 🍵</li>
          <li><strong>2024:</strong> Multiple locations nationwide 🎉</li>
        </ul>
      </motion.section>

      {/* Awards & Recognitions */}
      <motion.section
        className="awards"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2>🏆 Awards & Recognitions</h2>
        <p>✨ **Best Café of the Year 2023**</p>
        <p>☕ **Excellence in Coffee Brewing Award 2022**</p>
      </motion.section>
    </motion.div></>
  );
};

export default About;
