import React from 'react';
import styles from './Contact.module.css'; // Import the CSS module

function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact Me</h2>
      <p className={styles.emailLink}>
        Email: <a href="mailto:thisara.b.ucsc@gmail.com">thisara.b.ucsc@gmail.com</a>
      </p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/ThisaraB" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          GitHub {/* Replace with icon later if desired */}
        </a>
        <a href="https://www.linkedin.com/in/thisara-b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          LinkedIn {/* Replace with icon later if desired */}
        </a>
        {/* Add more social links as needed */}
      </div>
      <p className={styles.collaborationMessage}>
        Interested in collaborating? Reach out!
      </p>
    </section>
  );
}

export default Contact;
