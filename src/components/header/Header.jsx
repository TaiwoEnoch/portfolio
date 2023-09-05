import React from 'react';
import CTA from './CTA';
import ME from '../../assets/main.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => (
  <header id='header'>
    <div className="container header_container">
      <h5 className="big">Hi&apos; I'm</h5>
      <h1>Taiwo Enoch</h1>
      <h5 className="text-light big">
        I&#39;m a
        <span>Full-Stack Developer</span>
      </h5>
      <p className="text-light big">I&#39;ve spent this past 1 year coding for over 6000+ hours&apos; building&apos; and shipping over 30 projects with Vanilla JavaScript&apos; React&apos; Ruby&apos; Ruby on Rails as group projects&apos; for some pretty cool companies&apos; and individuals to match up to 3 years industry experience. I also create interesting self projects in my spare time&apos; and I am always open to opportunities. Let&#39;s connect!</p>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="my-img" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
