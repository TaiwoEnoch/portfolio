import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Contact = () => (
  <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <AiOutlineMail />
          <h4>Email</h4>
          <h5>Send a Message</h5>
          <a href="mailto:taiwoenoch0@gmail.com" target="_blank" rel="noreferrer">Send a direct message to my Email</a>
        </article>
        <article className="contact__option">
          <BsLinkedin />
          <h4>Linkedln</h4>
          <h5>Taiwo Enoch</h5>
          <a href="https://www.linkedin.com/in/taiwo01/" target="_blank" rel="noreferrer">You can message me on Linkedln</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp />
          <h4>WhatsApp</h4>
          <h5>Taiwo Enoch</h5>
          <a href="https://api.whatsapp.com/send?phone+2347017656876" target="_blank" rel="noreferrer">You can message me on WhatsApp</a>
        </article>
      </div>
    </div>
  </section>
);

export default Contact;
