import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => (
  <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container service__container">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
        </ul>
      </article>
      {/* END OF UI/UX */}

      <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
        </ul>
      </article>
      {/* END OF WEB DEVELOPMENT */}

      <article className="service">
        <div className="service__head">
          <h3>Content Writing</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
          <li>
            <BiCheck className="service__list-icon" />
            <p>It's cool working as developer, building things make me happy</p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
