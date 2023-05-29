import React from "react";
import "./portfolio.css";
import todoScreen from "./../../assets/assets/todoScreen.jpg";
import recipeApp from "./../../assets/assets/recipeApp.jpg";

function Portfolio() {
  const soloProjects = [
    {
      id: 1,
      title: "To Do App",
      img: todoScreen,
      description:
        "User Friendly App To Plan Your Day And Manage Tasks",
      technologies: "HTML | CSS | React js",
      link: "https://todo-app-umber-psi.vercel.app/",
      github: "https://github.com/farhanmaneri/todoApp",
    },
    {
      id: 2,
      title: "Recipe App",
      img: recipeApp,
      description:
        "Recipe App created as an assignment, assigned by Sylani Welefare Trust",
      technologies:
        "HTML | CSS | JavaScript ",
      link: "https://recipe-app-lyart-six.vercel.app/",
      github: "https://github.com/farhanmaneri/RecipeApp",
    },
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
