// import React from 'react';
// import '../styles/About.css';

// const About = () => {
//   return (
//     <section className="about-section" id="about">
//       <h2 className="section-title">About Me</h2>
//       <div className="about-container">
//         <div className="about-left">
//           <p>
//             I am a passionate developer who loves turning ideas into reality using code. I specialize in full-stack web development and have built several impactful projects during my journey. I have a strong foundation in both front-end and back-end technologies, with a focus on creating user-friendly, responsive applications. My expertise spans HTML, CSS, JavaScript, React.js, and Node.js. I am constantly seeking to improve my skills and stay updated with the latest technologies. In addition to development, I enjoy solving complex problems, participating in hackathons, and collaborating with teams to bring innovative ideas to life.
//           </p>
//         </div>

//         <div className="about-right">
//           <div className="info-box">
//             <p><strong>Name:</strong> Mohammad Shaad</p>
//             <p><strong>Age:</strong> 23</p>
//             <p><strong>Email:</strong> shaad@example.com</p>
//             <p><strong>Location:</strong> Gwalior, India</p>
//             <p><strong>Phone:</strong> +91 1234567890</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <div className="about-description">
          <p>
            I am a passionate developer who loves turning ideas into reality using code. I specialize in full-stack web development and have built several impactful projects during my journey. I have a strong foundation in both front-end and back-end technologies, with a focus on creating user-friendly, responsive applications. My expertise spans HTML, CSS, JavaScript, React.js, and Node.js. I am constantly seeking to improve my skills and stay updated with the latest technologies. In addition to development, I enjoy solving complex problems, participating in hackathons, and collaborating with teams to bring innovative ideas to life.
          </p>
        </div>
        <div className="personal-info-box">
          <p><strong>Name:</strong> Mohammad Shaad</p>
          <p><strong>Age:</strong> 23</p>
          <p><strong>Email:</strong> shaad070900@gmail.com</p>
          <p><strong>Location:</strong> Jabalpur, Madhya Pradesh, India</p>
          <p><strong>Availability:</strong> Full-time</p>
        </div>
      </div>
    </section>
  );
};

export default About;
