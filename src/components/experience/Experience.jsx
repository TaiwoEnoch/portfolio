import React from 'react';
import './experience.css';
import {BiSolidBadgeCheck} from 'react-icons/bi';

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__fronend">
          <h3>Frontend Developemnt</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Redux</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
          <h3>Backend Developemnt</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Ruby</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Ruby on Rails</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Next JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF BACKEND DEVELOPMENT */}
        <div className="experience__backend">
          <h3>Database & Testing</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Rspec</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Jest</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Capybara</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Selenium</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>React Testing Library</h4>
                <small className="text-light">Experinced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>REST API's</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* TESTING LIBRARIES ENDS HERE */}

        <div className="experience__backend">
          <h3>Professional & Soft Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Problem Solving</h4>
                {/* <small className="text-light">Experinced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Communication</h4>
                {/* <small className="text-light">Experinced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Continuous Learning</h4>
                {/* <small className="text-light">Experinced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>GitHub CLI</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>GitLab</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Mentorship</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Creative Thinker</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Team Player</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Remote work experience</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BiSolidBadgeCheck className="experience__details-icon" />
              <div>
                <h4>Remote Collaboration</h4>
                {/* <small className="text-light">Basic</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* SOFT SKILLS ENDS HERE */}
      </div>
    </section>
  )
}

export default Experience
