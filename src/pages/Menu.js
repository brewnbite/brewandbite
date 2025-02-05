import React from "react";
import "../styles/Menu.css";

const items = [
  {
    id: 1,
    name: "CAFFE LATTE",
    price: 339.9,
    imageUrl: "https://img.freepik.com/premium-photo/hot-coffee-capuccino-cup-with-latte-art-wood-table-cafe_778722-16.jpg",
    description: "A creamy espresso-based coffee drink with steamed milk and a light layer of foam.",
    caseStudy: "Our best-seller! A local startup founder says, 'Caffe Latte keeps me energized during late-night coding sessions!'"
  },
  {
    id: 2,
    name: "CAFFE MOCHA",
    price: 449.9,
    imageUrl: "https://krave.com.bd/wp-content/uploads/2020/06/Cafe-Mocha.jpg",
    description: "A delicious blend of espresso, steamed milk, and chocolate syrup topped with whipped cream.",
    caseStudy: "A college student says, 'This Mocha is my go-to study companion during exams!'"
  },
  {
    id: 3,
    name: "WHITE CHOCOLATE MOCHA",
    price: 599.9,
    imageUrl: "https://www.littlesugarsnaps.com/wp-content/uploads/2022/01/white-chocolate-mocha-square.jpg",
    description: "A smooth espresso drink infused with creamy white chocolate and topped with frothy milk.",
    caseStudy: "A customer review: 'Absolutely addictive! Tastes like a warm hug in a cup!'"
  },
  {
    id: 4,
    name: "EGGS BENEDICT",
    price: 339.9,
    imageUrl: "https://www.foodandwine.com/thmb/j6Ak6jECu0fdly1XFHsp4zZM8gQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Eggs-Benedict-FT-RECIPE0123-4f5f2f2544464dc89a667b5d960603b4.jpg",
    description: "A classic breakfast dish with poached eggs, ham, and hollandaise sauce on a toasted muffin."
  },
  {
    id: 5,
    name: "PANCAKES AND FRESH BERRIES",
    price: 449.9,
    imageUrl: "https://static.vecteezy.com/system/resources/previews/030/625/221/large_2x/pancakes-image-hd-free-photo.jpg",
    description: "Fluffy pancakes served with a mix of fresh seasonal berries and syrup.",
    caseStudy: "A fitness influencer recommends this as a 'perfect post-workout meal that's both nutritious and delicious!'"
  },
  {
    id: 6,
    name: "GREEK YOGURT",
    price: 459.9,
    imageUrl: "https://muscleupmeals.com/wp-content/uploads/2022/07/Greek-Yogurt-Nutrition.600.jpg",
    description: "Creamy Greek yogurt served with honey and granola for a healthy start to your day."
  },
  {
    id: 7,
    name: "CHOCOLATE LAVA CAKE",
    price: 299.9,
    imageUrl: "https://www.bakels.in/wp-content/uploads/sites/15/2019/10/unnamed.jpg",
    description: "A rich and gooey chocolate cake with a molten chocolate center.",
    caseStudy: "Voted the 'Most Loved Dessert' in a local food festival. A customer says, 'The best indulgence after a long day!'"
  },
  {
    id: 8,
    name: "CLASSIC CHEESECAKE",
    price: 339.9,
    imageUrl: "https://natashaskitchen.com/wp-content/uploads/2020/05/Pefect-Cheesecake-7.jpg",
    description: "A smooth and creamy New York-style cheesecake with a buttery graham cracker crust.",
    caseStudy: "A regular customer shares, 'I order this for every special occasion – it never disappoints!'"
  },
  {
    id: 9,
    name: "TIRAMISU",
    price: 369.9,
    imageUrl: "https://img.freepik.com/premium-photo/italian-tiramisu-dessert-realistic-photo-hd-picture_1021165-312.jpg",
    description: "An Italian dessert with layers of coffee-soaked sponge cake, mascarpone cheese, and cocoa powder.",
    caseStudy: "Served at a wedding, making it the couple's favorite dessert for their special day!"
  }
];


function Menu() {
  return (
    <><div className="up"></div><div className="products-container">
    <h2 className="products-heading">
    <span className='separator-holder separator-left'></span>
      What We Offer
    <span className='separator-holder separator-right'></span>
      </h2>
    <div className="products-grid">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.imageUrl} alt={item.name} className="product-image" />
          <h3>{item.name}</h3>
          <p className="product-description">{item.description}</p>
          <p className="product-price">₹{item.price}</p>
          {item.caseStudy && <p className="product-case-study"><strong>Success Story:</strong> {item.caseStudy}</p>}
          <a href="/contact"><button className="cta-button">Order Now</button></a>
        </div>
      ))}
    </div>
  </div></>
  );
}

export default Menu;
