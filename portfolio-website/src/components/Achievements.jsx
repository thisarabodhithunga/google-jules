import React from 'react';
import styles from './Achievements.module.css'; // Import the CSS module

function Achievements() {
  return (
    <section id="achievements" className={styles.achievementsSection}>
      <h2>Achievements</h2>
      
      <div className={styles.achievementItem}>
        <h3>Hackathon 4th Place (HackTrail 1.0, 2024)</h3>
        <p>Solved algorithm challenges under time constraints in a team of 4.</p>
      </div>

      <div className={styles.achievementItem}>
        <h3>Academic Honors</h3>
        <p>Dean's List - [Semester/Year] (if applicable, or placeholder)</p>
        {/* Or simply: <p>Academic honors and awards will be detailed here as they are achieved.</p> */}
      </div>

      {/* Add more achievement items as needed */}
    </section>
  );
}

export default Achievements;
