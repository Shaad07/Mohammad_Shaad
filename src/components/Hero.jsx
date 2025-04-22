
        /* <div className="social-icons">
          <a href="/Mohammad_Shaad_SW_Engg.pdf" target="_blank" rel="noopener noreferrer" title="Resume">
            <FaFileAlt />
          </a>
          <a href="https://github.com/Shaad07" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohammad-shaad-123048251/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mr__shaad__07" target="_blank" rel="noopener noreferrer" title="Instagram">
            <FaInstagram />
          </a>
        </div> */
        import React from 'react';
        import '../styles/Hero.css';
        import profileImg from '../assets/profile.jpg';
        
        const Hero = () => {
          const handleClick = (url) => {
            window.open(url, '_blank'); // Opens the link in a new tab
          };
        
          return (
            <section className="hero" id="hero">
              <div className="hero-text">
              <h1>Hi, I'm Mohammad Shaad</h1>
<p>A passionate Full Stack Developer</p>

                <div style={{ marginTop: '20px' }}>
                  <button onClick={() => handleClick('/Mohammad_Shaad_SW_Engg.pdf')} style={buttonStyle}>
                    View Resume
                  </button>
                  <button onClick={() => handleClick('https://github.com/Shaad07')} style={buttonStyle}>
                    GitHub
                  </button>
                  <button onClick={() => handleClick('https://www.linkedin.com/in/mohammad-shaad-123048251/')} style={buttonStyle}>
                    LinkedIn
                  </button>
                  <button onClick={() => handleClick('https://www.instagram.com/mr__shaad__07')} style={buttonStyle}>
                    Instagram
                  </button>
                </div>
              </div>
              <div className="hero-img">
                <img src={profileImg} alt="Profile" />
              </div>
            </section>
          );
        };
        
        const buttonStyle = {
          margin: '10px',
          padding: '10px 20px',
          borderRadius: '12px',
          border: 'none',
          backgroundColor: '#1e1e1e',
          border: '1px solid rgba(255, 255, 255, 0.4)',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px',
          // transform: 'scale(1.05)',
          transition: 'all 0.3s ease'

          // backgroundColor: #1e1e1e;
          // padding: 10px 20px;
          // border-radius: 8px;
          // color: white;
          // box-shadow: 0 0 5px rgba(0, 230, 230, 0.4);
          // transition: transform 0.2s;
        };
        
        export default Hero;
        