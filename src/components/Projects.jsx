import React, { useEffect, useState } from 'react';
import projects from '../data/projects';
import '../styles/Projects.css';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = projects.length;

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>

      <div className="project-slider">
        <button onClick={handlePrev} className="nav-button">⟨</button>

        <div className="project-card slide">
          <h3>{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
          <div className="technologies-used">
            <strong>Technologies Used:</strong>
            <ul>
              {projects[currentIndex].technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <a
            href={projects[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Link
          </a>
        </div>

        <button onClick={handleNext} className="nav-button">⟩</button>
      </div>

      <div className="dots">
        {projects.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
