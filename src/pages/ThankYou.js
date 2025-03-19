import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/ThankYou.module.css';

const ThankYou = () => {
  return (
    <><div className='up'></div><div className={styles.thankYouContainer}>
          <div className={styles.contentWrapper}>
              <div className={styles.iconWrapper}>
                  <span className={styles.coffeeIcon}>☕</span>
              </div>
              <h1 className={styles.title}>Thank You!!</h1>
              <p className={styles.message}>
                  We're delighted you've stopped by. At Brew & Bite, we believe every visit should feel
                  special – whether online or in person. We can't wait to share our passion for
                  exceptional coffee and culinary experiences with you.
              </p>
              <div className={styles.decorativeLine}></div>
              <p className={styles.subMessage}>
                  Ready to begin your journey with us?
              </p>
              <div className={styles.linkContainer}>
                  <Link to="/menu" className={styles.link}>
                      Discover Menu
                  </Link>
                  <Link to="/contact" className={styles.link}>
                      Visit Us
                  </Link>
              </div>
              <p className={styles.signature}>
                  Welcome to our community!
              </p>
          </div>
      </div></>
  );
};

export default ThankYou;
