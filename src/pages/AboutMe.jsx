// src/pages/AboutMe.js
import profilePic from '../assets/pic.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <img src={profilePic} alt="Profile picture" />
      <p>Experienced Web Developer with over 2 years in the tech industry, skilled in designing, developing, and optimizing user-focused websites and applications across a range of platforms. Known for delivering high-quality, scalable solutions, I specialize in front-end and full-stack development with expertise in JavaScript, HTML, CSS, and frameworks like React, Vue, and Node.js. <br/>My background includes hands-on experience with responsive design, performance tuning, and API integrations, alongside a passion for intuitive user interfaces and seamless user experiences. With a collaborative mindset and a knack for solving complex problems, I am eager to bring my skills and creativity to a dynamic team in search of innovative web solutions.</p>
    </section>
  );
}

export default AboutMe;
