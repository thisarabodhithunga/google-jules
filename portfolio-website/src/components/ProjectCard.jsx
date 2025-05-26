import React from 'react';
import styles from './ProjectCard.module.css';

function ProjectCard(props) {
  const {
    title,
    techStack,
    description,
    roleImpact, // Expected to be an array of strings
    githubLink,
    liveLink,
    imageUrl
  } = props;

  return (
    <div className={styles.projectCard}>
      <img 
        src={imageUrl || 'placeholder-project.jpg'} 
        alt={`${title} project screenshot`} 
        className={styles.projectImage} 
      />
      <h3 className={styles.projectTitle}>{title} ({techStack})</h3>
      <p className={styles.projectDescription}>
        <strong>Problem Solved:</strong> {description}
      </p>
      <h4>Your Role + Impact:</h4>
      <ul className={styles.roleImpactList}>
        {roleImpact && roleImpact.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className={styles.projectLinks}>
        <a 
          href={githubLink || '#'} 
          target="_blank" 
          rel="noopener noreferrer"
          className={!githubLink ? styles.disabledLink : ''}
        >
          GitHub
        </a>
        {liveLink && (
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
