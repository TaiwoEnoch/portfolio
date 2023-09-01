import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaAngellist} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/taiwo01/" className='footer__container-font' target='_blank' rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/TaiwoEnoch" className='footer__container-font' target='_blank' rel="noreferrer"><BsGithub /></a>
      <a href="https://wellfound.com/u/taiwo-enoch" className='footer__container-font' target='_blank' rel="noreferrer"><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials
