import React from 'react';
import certificates from '../data/certificates';
import '../styles/Certificates.css';

const Certificates = () => {
  return (
    <div className="certificates-page">
      <h2>My Certificates</h2>
      <div className="certificate-grid">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card">
            <img src={cert.image} alt={`Certificate ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
