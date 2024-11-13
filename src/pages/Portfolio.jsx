// src/pages/Portfolio.jsx
import Project from '../components/Projects';
import projectImage1 from '../assets/Paws&Meows.png';  // example image
import projectImage2 from '../assets/EmployeeTracker.png';  // example image
import projectImage3 from '../assets/CarBuilder.png';  // example image
import projectImage4 from '../assets/AutoREADME.png';  // example image
import projectImage5 from '../assets/WeatherAPI.png';  // example image
import projectImage6 from '../assets/PortfolioBuilder.png';  // example image

function Portfolio() {
  const projects = [
    {
      title: 'Paws-and-Meows-Inc',
      image: projectImage1,
      appLink: 'https://arstanciel.github.io/Paws-and-Meows-Inc./',
      repoLink: 'https://github.com/arstanciel/Paws-and-Meows-Inc.',
    },
    {
      title: 'Employee Tracker',
      image: projectImage2,
      appLink: 'https://app.screencastify.com/v2/manage/videos/Htm6v0B3uHGpmHDYpXEq',
      repoLink: 'https://github.com/EddieJae24/Employee-Tracker',
    },
    {
        title: 'CarBuilder',
        image: projectImage3,
        appLink: 'https://app.screencastify.com/v3/watch/MxoTcKkONmA23FIJVjR4',
        repoLink: 'https://github.com/EddieJae24/carbuilder',
    },
    {
        title: 'AutoREADME Generator',
        image: projectImage4,
        appLink: 'https://app.screencastify.com/v2/manage/videos/WxBo4hbrEZZKtYWYT5QS',
        repoLink: 'https://github.com/EddieJae24/AutoREADME-Repo',
    },
    {
        title: 'WeatherAPI',
        image: projectImage5,
        appLink: 'https://dashboard.render.com/web/srv-csc6csggph6c73bmt32g',
        repoLink: 'https://github.com/EddieJae24/weather-forecast',
    },

    {
        title: 'PortfolioBuilder',
        image: projectImage6,
        appLink: 'https://dulcet-cassata-f8feee.netlify.app/',
        repoLink: 'https://github.com/EddieJae24/portfolio',
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
