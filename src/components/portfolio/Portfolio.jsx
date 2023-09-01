import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/tracker.png'
import IMG2 from '../../assets/crypto.png'
import IMG3 from '../../assets/appoint.png'
import IMG4 from '../../assets/space.png'
import IMG5 from '../../assets/ecome.png'
import IMG6 from '../../assets/maths.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'BudgetTracker App',
    description: 'BudgetTracker App is a mobile web application with authentication that allows users to register and log in securely to manage their expenses on groceries and recipes. Ruby | Ruby on Rails | PostgreSQL.',
    github: 'https://github.com/TaiwoEnoch/Budget-Tracker.git',
    demo: 'https://budget-m5l6.onrender.com/'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Crypo Data Explorer',
    description: 'The crypto currency data explorer app is a powerful tool that allows users to delve deep into the world of digital currencies. This app provides a comprehensive view of the cryptocurrency market, allowing users to make informed decisions about their investments. ReactJS | React Router | Jest | axios.',
    github: 'https://github.com/TaiwoEnoch/cryptocurrency-data-explorer.git',
    demo: 'http://TaiwoEnoch.github.io/cryptocurrency-data-explorer/'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Appoint Doctor',
    description: 'This is a full-stack project, connecting Rails API to React front-end, in which users can register, create a doctor, book an appointment with the doctor, and the super admin user can see all scheduled meetings, and delete a doctor(s). React | Redux | Ruby on Rails | PostgreSQL | Bootstrap | CSS.',
    github: 'https://github.com/Tracy-miranja/appoint-doctor-frontend.git',
    demo: 'https://profound-heliotrope-436869.netlify.app/'
  },
  {
    id: 1,
    image: IMG4,
    title: 'Space Travelers',
    description: 'An application that allows users to book rockets and join selected space missions. It fetches data (API) from Space-X data, using awesome Redux and React Hooks to manage dynamic states. React | Redux | REST API | axios | CSS | Bootstrap.',
    github: 'https://github.com/TaiwoEnoch/Space_Travelers.git',
    demo: 'https://super-puppy-069cbd.netlify.app/'
  },
  {
    id: 1,
    image: IMG5,
    title: 'E-commerce-website',
    description: `A web development project born from a passion for fashion and a love for coding. The e-commerce app combines the power of HTML, CSS, and JavaScript to bring you a seamless and stylish shopping experience. Whether you're into sleek and modern designs or timeless classics, the user-friendly interface allows you to explore a diverse range of styles.`,
    github: 'https://github.com/TaiwoEnoch/E-commerce-website.git',
    demo: 'https://dapper-crumble-7fe81a.netlify.app/'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Maths App',
    description: '"Math App" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations based on the in-built functionality that provides users with great abstractions. It also offers informative fun by serving users with random Math-related quotes.',
    github: 'https://github.com/TaiwoEnoch/maths_magician.git',
    demo: 'https://astonishing-figolla-d6448b.netlify.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, description, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio

