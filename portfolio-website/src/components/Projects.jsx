import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: "Conversation Analytics App",
    techStack: "Flutter, Firebase, Google Speech-to-Text",
    description: "Quantified conversational dynamics using audio diarization and real-time metrics, improving communication effectiveness.",
    roleImpact: [
      "Led UI/UX design and full-stack Flutter development.",
      "Integrated Google Cloud Speech-to-Text & NLP APIs for transcription and analysis.",
      "Achieved 90% transcription accuracy in beta tests.",
      "Winner at 'HackaDev Uni Hackathon 2022'."
    ],
    githubLink: "https://github.com/yourusername/convo-analytics", // Replace with actual link
    liveLink: "https://example.com/convo-analytics-demo", // Replace with actual link
    imageUrl: "placeholder-project1.jpg"
  },
  {
    title: "Wenujaya Car Rent System",
    techStack: "Laravel, Stripe, MySQL",
    description: "Streamlined car rentals for a local business with automated workflows, online booking, and secure payment processing.",
    roleImpact: [
      "Developed core backend logic for booking, user authentication, and inventory management using Laravel.",
      "Integrated Stripe API for secure payment processing.",
      "Designed and implemented the MySQL database schema.",
      "Reduced manual booking errors by 25% for the client."
    ],
    githubLink: "https://github.com/yourusername/wenujaya-car-rent", // Replace with actual link
    liveLink: null, // No live demo for this one or placeholder
    imageUrl: "placeholder-project2.jpg"
  },
  {
    title: "Order Processing & Delivery System",
    techStack: "Flutter, Laravel, Node.js, WebSocket",
    description: "Comprehensive system integrating a customer-facing mobile app (Flutter), a merchant web portal (Laravel), and a real-time delivery tracking backend (Node.js with WebSockets).",
    roleImpact: [
      "Built RESTful APIs in Laravel for order management and user data.",
      "Developed real-time location tracking for deliveries using Node.js and WebSockets.",
      "Designed database schema for managing orders, users, and inventory.",
      "Contributed to both mobile (Flutter) and web (Laravel) frontend components."
    ],
    githubLink: "https://github.com/yourusername/order-processing-system", // Replace with actual link
    liveLink: "https://example.com/order-system-demo", // Replace with actual link
    imageUrl: "placeholder-project3.jpg"
  }
];

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2>Featured Projects</h2>
      <div className={styles.projectsGrid}>
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            techStack={project.techStack}
            description={project.description}
            roleImpact={project.roleImpact}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
