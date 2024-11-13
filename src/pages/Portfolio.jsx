// src/pages/Portfolio.jsx
import Project from '../components/Projects';
import projectImage1 from '../assets/HTML_CSS_JS.jpg';  // example image
import projectImage2 from '../assets/Express.jpg';  // example image

function Portfolio() {
  const projects = [
    {
      title: 'HTML & CSS',
      image: projectImage1,
      appLink: 'https://project-one.com',
      repoLink: 'https://github.com/yourusername/project-one',
    },
    {
      title: 'JavaScript',
      image: projectImage2,
      appLink: 'https://project-two.com',
      repoLink: 'https://github.com/yourusername/project-two',
    },
    {
        title: 'Typescript and OOP',
        image: projectImage1,
        appLink: 'https://project-three.com',
        repoLink: 'https://github.com/yourusername/project-three',
    },
    {
        title: 'Express',
        image: projectImage2,
        appLink: 'https://project-four.com',
        repoLink: '',
    },
    {
        title: 'React',
        image: projectImage1,
        appLink: 'https://project-five.com',
        repoLink: '',
    },
    {
        title: 'Node.js',
        image: projectImage2,
        appLink: 'https://project-six.com',
        repoLink: '',
    },
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
