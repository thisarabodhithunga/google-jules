import React from 'react';
import styles from './Footer.module.css'; // Import the CSS module

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className={styles.footer}>
      <p>
        © {currentYear} Thisara Bodhithunga. All rights reserved.
      </p>
      {/* Optional: Add social links here if desired */}
      {/* <div className={styles.socialLinks}>
        <a href="https://github.com/ThisaraB" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/thisara-b/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div> */}
    </footer>
  );
}

export default Footer;
