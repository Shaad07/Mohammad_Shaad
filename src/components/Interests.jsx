import React from 'react';
import '../styles/Interests.css';
import interests from '../data/interests';

const Interests = () => {
  return (
    <section className="interests" id="interests">
      <h2>Interests</h2>
      <ul className="interest-list">
        {interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
    </section>
  );
};

export default Interests;
