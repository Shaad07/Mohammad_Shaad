import React from 'react';
import '../styles/Skills.css';
import skills from '../data/skills';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2>Skills & Expertise</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <p>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
