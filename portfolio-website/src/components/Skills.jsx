import React, { useState } from 'react';
import styles from './Skills.module.css';

// react-icons installation failed on multiple attempts. Using text placeholders for icons.

const skillsData = [
  {
    categoryTitle: "Languages",
    categoryIconPlaceholder: "[L]",
    skills: [
      { name: "Dart (Flutter)", iconPlaceholder: "[D]", tooltip: "Language for Flutter framework, used for cross-platform mobile app development." },
      { name: "PHP (Laravel)", iconPlaceholder: "[P]", tooltip: "PHP framework for building robust web applications." },
      { name: "Java (Swing, Android)", iconPlaceholder: "[J]", tooltip: null },
      { name: "Python (AI coursework)", iconPlaceholder: "[Py]", tooltip: null },
      { name: "JavaScript/TypeScript", iconPlaceholder: "[JS]", tooltip: null }
    ]
  },
  {
    categoryTitle: "Frameworks",
    categoryIconPlaceholder: "[Fr]",
    skills: [
      { name: "Flutter (Mobile)", iconPlaceholder: "[Fl]", tooltip: "UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase." },
      { name: "Laravel (Backend)", iconPlaceholder: "[La]", tooltip: "PHP framework for building robust web applications." }, // Duplicated example, but keeping for now as per prompt.
      { name: "Node.js/Express.js (APIs)", iconPlaceholder: "[N]", tooltip: null },
      { name: "React.js (Frontend)", iconPlaceholder: "[R]", tooltip: null }
    ]
  },
  {
    categoryTitle: "Tools & Platforms",
    categoryIconPlaceholder: "[T]",
    skills: [
      { name: "Git/GitHub", iconPlaceholder: "[G]", tooltip: "Version control system and platform for hosting and collaborating on code." },
      { name: "Firebase (Auth, DB)", iconPlaceholder: "[Fb]", tooltip: null },
      { name: "Stripe API (Payments)", iconPlaceholder: "[S]", tooltip: null },
      { name: "MySQL", iconPlaceholder: "[SQL]", tooltip: null },
      { name: "Figma (UI/UX)", iconPlaceholder: "[Fg]", tooltip: null }
    ]
  },
  {
    categoryTitle: "Soft Skills",
    categoryIconPlaceholder: "[SS]",
    skills: [
      { name: "Team Collaboration (Hackathon winner)", iconPlaceholder: "[TC]", tooltip: "Working effectively with others towards a common goal, proven in high-pressure hackathon environments." }, // Slightly enhanced tooltip
      { name: "Agile/Scrum", iconPlaceholder: "[AS]", tooltip: null },
      { name: "Problem-Solving", iconPlaceholder: "[PS]", tooltip: null },
      { name: "Debugging", iconPlaceholder: "[Db]", tooltip: null }
    ]
  }
];

// Define filter categories based on skillsData titles, plus 'All'
const filterCategories = ['All', ...skillsData.map(category => category.categoryTitle)];

function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkillsData = activeFilter === 'All'
    ? skillsData
    : skillsData.filter(category => category.categoryTitle === activeFilter);

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2>Skills & Technologies</h2>

      <div className={styles.filterButtonsContainer}>
        {filterCategories.map(categoryName => (
          <button
            key={categoryName}
            onClick={() => setActiveFilter(categoryName)}
            className={`${styles.filterButton} ${activeFilter === categoryName ? styles.activeFilterButton : ''}`}
          >
            {categoryName}
          </button>
        ))}
      </div>

      <div className={styles.skillsGrid}>
        {filteredSkillsData.map((category, index) => (
          <div key={index} className={styles.skillCard}>
            <h3>
              {category.categoryIconPlaceholder} {category.categoryTitle}
            </h3>
            <div className={styles.skillsList}>
              {category.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className={styles.skillBadge}>
                  <span data-tooltip={skill.tooltip || ""}> {/* Ensure data-tooltip is always present, even if empty */}
                    {skill.iconPlaceholder} {skill.name}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.julesAlignment}>
        <p>I thrive in team environments—from hackathons to group projects. My toolkit enables me to adapt quickly and contribute to diverse technical challenges.</p>
      </div>
    </section>
  );
}

export default Skills;
