import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaAngellist} from 'react-icons/fa'


const Footer = () => {
  return (
    <section id="footer">
      <div className="container footer__container">
        <div className='footer__socials'>
          <a href="https://www.linkedin.com/in/taiwo01/" className='footer__container-font' target='_blank' rel="noreferrer"><BsLinkedin /></a>
          <a href="https://github.com/TaiwoEnoch" className='footer__container-font' target='_blank' rel="noreferrer"><BsGithub /></a>
          <a href="https://wellfound.com/u/taiwo-enoch" className='footer__container-font' target='_blank' rel="noreferrer"><FaAngellist /></a>
        </div>
      </div>
    </section>
  )
}

export default Footer
