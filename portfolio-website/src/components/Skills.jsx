import React from 'react';
import styles from './Skills.module.css'; // Import the CSS module

function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills & Technologies</h2>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h3>Languages</h3>
          <ul>
            <li>Dart</li>
            <li>PHP</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h3>Frameworks</h3>
          <ul>
            <li>Laravel</li>
            <li>Flutter</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h3>Tools</h3>
          <ul>
            <li>Git</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>Stripe API</li>
          </ul>
        </div>

        <div className={styles.skillCategory}>
          <h3>Soft Skills</h3>
          <ul>
            <li>Team Collaboration (Hackathon proof)</li>
            <li>Problem-Solving</li>
            <li>Agile Workflows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
