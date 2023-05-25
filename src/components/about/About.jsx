import React from "react";
import ME from "./../../assets/assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import './about.css'
function About() {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="aboutMe" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>One Year working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>0+ Worldwide Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Now Internee </small>
            </article>
          </div>
          <p>
            A Front-end  React/Next.js web developer good background in building
            and maintaining websites and web applications. Skilled in HTML, CSS,
            JavaScript, React & Next js, with a keen eye for detail and a passion for
            creating user-friendly experiences.
            I am a self-motivated, hardworking, and dedicated individual who
            enjoys working in a team environment. I am a fast learner and I am
            always looking to improve my skills and knowledge.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a >
        </div>
      </div>
    </section>
  );
}

export default About;
