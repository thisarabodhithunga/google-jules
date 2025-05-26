import React from 'react';
import styles from './About.module.css'; // Import the CSS module

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <img 
          src="placeholder-headshot.jpg" 
          alt="Thisara Bodhithunga" 
          className={styles.headshot} 
        />
        <div className={styles.textContent}>
          <h2>About Me</h2>
          <p>
            Motivated Software Engineering student with hands-on experience in full-stack development (Laravel/PHP, Flutter/Dart). Passionate about solving real-world problems through code—evidenced by my hackathon wins and academic projects. Seeking internship opportunities to grow in agile environments and contribute to impactful software solutions.
          </p>
          <h3>Education Highlights</h3>
          <ul>
            <li>BICT (Hons), University of Ruhuna (2022–Present)</li>
            <li>Major: Software Development | Minor: Mathematics</li>
            <li>Relevant coursework: AI, Mobile App Dev, Software Engineering.</li>
          </ul>
          <ul>
            <li>Diploma in ICT (Vocational Training Authority, 2020–2022).</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
