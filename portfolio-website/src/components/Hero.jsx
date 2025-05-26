import React from 'react';
import styles from './Hero.module.css'; // Import the CSS module

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <h1 className={styles.headline}>
        Thisara Bodhithunga | Software Engineering Undergraduate (University of Ruhuna)
      </h1>
      <p className={styles.subtitle}>
        Building scalable solutions with Laravel & Flutter | Hackathon Winner | AI & Mobile Dev Enthusiast
      </p>
      <a href="#projects" className={styles.exploreButton}>
        Explore my projects
      </a>
      <div className={styles.socialLinks}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          LinkedIn
        </a>
        {/* Add more social links as needed, e.g., for Font Awesome icons if you integrate them later */}
      </div>
    </section>
  );
}

export default Hero;
