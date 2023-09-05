import React from 'react';
import './about.css';
import { TbAward } from 'react-icons/tb';
import { BsFolderPlus } from 'react-icons/bs';
import ME from '../../assets/AVATAR.png';

const About = () => (
  <section id="about">
    <h5 className="responsive">Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="portfolio" />
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <TbAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
          <article className="about__card">
            <BsFolderPlus className="about__icon" />
            <h5>Projects</h5>
            <small>30+ Completed Projects</small>
          </article>
        </div>
        <p>
          Hi&apos; I'm Taiwo Enoch&apos; a skilled software developer specializing in Ruby&apos; JavaScript&apos; React&apos; and Ruby on Rails.
          With 2 years worth of experience in 1 year&apos; I excel in building robust web applications.

          I thrive in collaborative environments&apos; utilizing strong communication skills to deliver exceptional results.
          Proficient in backend development with Ruby&apos; I also create captivating user interfaces using JavaScript and React. I am well-versed in the entire development lifecycle&apos; from conceptualization to deployment.

          I prioritize clean and maintainable code&apos; following best practices and test-driven development.
          I am adaptable and embrace agile methodologies to meet changing requirements and deliver high-quality software.

          When I'm not coding&apos; I'm picking up concepts about design and Data Structures&apos; or you could check for me at The Emirate Stadium. I am probably enjoying Football in England. 🤓
        </p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
      </div>
    </div>
  </section>
);

export default About;
