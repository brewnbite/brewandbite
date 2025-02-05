import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/TestimonialCarousel.css"; // Import the CSS file

const testimonials = [
  { 
    name: "Sarah",
    review: "Brew & Bite offers the best coffee in town! The flavors are rich, and the ambiance is cozy. It's my go-to place for a morning boost and a relaxed evening." 
  },
  { 
    name: "John",
    review: "Amazing food and great atmosphere. The staff is super friendly, and their pastries are to die for! Highly recommend their signature cappuccino and blueberry muffins."
  },
  { 
    name: "Emily",
    review: "Lovely café with fantastic service. Every visit feels special, and the desserts are always fresh. The baristas know exactly how to make the perfect cup of coffee!"
  },
  { 
    name: "Michael",
    review: "Great vibes and delicious snacks! The outdoor seating is perfect for a peaceful afternoon. I love the latte art and the warm, welcoming atmosphere."
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
       <h2>What Our Customers Say</h2>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="testimonial-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.4 }}
        >
          <p className="testimonial-text">"{testimonials[index].review}"</p>
          <h4 className="testimonial-name">- {testimonials[index].name}</h4>
        </motion.div>
      </AnimatePresence>
      <div className="carousel-buttons">
        <button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}>❮</button>
        <button onClick={() => setIndex((index + 1) % testimonials.length)}>❯</button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
