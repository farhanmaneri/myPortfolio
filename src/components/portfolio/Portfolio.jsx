import React from "react";
import "./portfolio.css";
import portfolio from "./../../assets/assets/portfolio.png";
import portfolio1 from "./../../assets/assets/portfolio1.png";
import portfolio2 from "./../../assets/assets/portfolio2.png";
import portfolio3 from "./../../assets/assets/portfolio3.png";
import portfolio4 from "./../../assets/assets/portfolio4.png";
import portfolio5 from "./../../assets/assets/portfolio5.png";
import portfolio6 from "./../../assets/assets/portfolio6.png";
import portfolio7 from "./../../assets/assets/todoScreen.jpg";
import portfolio8 from "./../../assets/assets/portfolio8.png";
// import portfolio9 from './../../assets/assets/portfolio9.png'

function Portfolio() {
  const soloProjects = [
    // {
    //   id: 1,
    //   title: "Deofswabi",
    //   img: portfolio,
    //   description:
    //     "This web App for deo female swabi where all schools can do signup, schools daily attendance for students, Teaching and non teaching, schools budget and more. Fully responsive interactive website built.",
    //   technologies: "React | Bootstrap | HTML,CSS",
    //   link: "https://deofswabi.com",
    //   github: "https://github.com/imrookhan44/Deoswabi",
    // },
    // {
    //   id: 2,
    //   title: "Plumber Website",
    //   img: portfolio1,
    //   description:
    //     "Plumber website that provides information about Plumber",
    //   technologies: "HTML | CSS | React js | Bootstrap ",
    //   link: "https://plumberwebapp.netlify.app",
    //   github: "https://github.com/imrookhan44/plumber-website",
    // },
    // {
    //   id: 3,
    //   title: "HealthCare Web App",
    //   img: portfolio2,
    //   description: "This is the client project where patient's can see their record and many more. This project is still in progress",
    //   technologies: "HTML | CSS| React js | Bootstrap | React Bootstrap | Node js | Mongodb",
    //   link: "https://health22.netlify.app",
    //   github: "https://github.com/imrookhan44/health-care",
    // },
    // {
    //   id: 4,
    //   title: "ThehandyCrew",
    //   img: portfolio3,
    //   description:
    //     "Fully responsive interactive website built based on Figma design with very good and interactive animations",
    //   technologies: "HTML | CSS | React js | React bootstrap | Bootstrap ",
    //   link: "https://thehandycrew.netlify.app",
    //   github: "https://github.com/imrookhan44/thehandycrew",
    // },
    // {
    //   id: 5,
    //   title: "Helium Website",
    //   img: portfolio4,
    //   description:
    //     "Helium website is one of the client project which for his own company",
    //   technologies: "HTML | CSS | React js | React Bootstrap",
    //   link: "https://pensive-neumann-9cf4a2.netlify.app",
    //   github: "https://github.com/imrookhan44/helium-website",
    // },
    // {
    //   id: 6,
    //   title: "Quiz Mini App",
    //   img: portfolio5,
    //   description:"In this app 5 multiple questions. at the end user can see their result",
    //   technologies: "HTML | CSS | React js",
    //   link: "https://smallquizapp.netlify.app",
    //   github: "https://github.com/imrookhan44/quiz-app",
    // },
    // {
    //   id: 7,
    //   title: "Ricoma App",
    //   img: portfolio6,
    //   description:"Developed based on Figma designed",
    //   technologies: "JavaScript | Scss | Python",
    //   link: "https://fantastic-phoenix-26c2ed.netlify.app",
    //   github: "https://github.com/imrookhan44/ricomaapp",
    // },
    {
      id: 8,
      title: "To Do App",
      img: portfolio7,
      description:
        "User Friendly App To Plan Your Day And Manage Tasks",
      technologies: "HTML | CSS | React js",
      link: "https://todo-app-umber-psi.vercel.app/",
      github: "https://github.com/farhanmaneri/todoApp",
    },
    // {
    //   id: 9,
    //   title: "Complaint Management System",
    //   img: portfolio8,
    //   description:
    //     "Complaint management System is a web app which developed for the woman university where student's can complaint the problems they are facing",
    //   technologies:
    //     "HTML | CSS | React js | Bootstrap | React Bootstrap | Node js | Express js | Mongodb",
    //   link: "https://complaint-management-system2k22.netlify.app",
    //   github: "https://github.com/imrookhan44/complaint-system-frontend.",
    // },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
