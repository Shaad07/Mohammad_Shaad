import React from 'react';
import '../styles/Education.css';
import education from '../data/education';
import internships from '../data/internships';

const Education = () => {
  return (
    <section className="education" id="education">
      {/* <h2>Education & Internships</h2> */}
      <div className="edu-intern-wrapper">
        {/* Education Column */}
        <div className="edu-column">
          <h2>Education</h2>
          {education.map((item, index) => (
            <div key={index} className="edu-card">
              <h4>{item.degree}</h4>
              <p>{item.institution}</p>
              <span>{item.year}</span>
            </div>
          ))}
        </div>

        {/* Internship Column */}
        <div className="intern-column">
          <h2>Internships</h2>
          {internships.map((item, index) => (
            <div key={index} className="intern-card">
              <h4>{item.company}</h4>
              <p><strong>Role:</strong> {item.role}</p>
              <p><strong>Duration:</strong> {item.duration}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
