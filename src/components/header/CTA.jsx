import React from 'react';
import CV from '../../assets/FullstackCV.pdf';

const CTA = () => (
  <div className="cta">
    <a href={CV} className="btn" target="_blank" rel="noreferrer">My Resume</a>
    <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
  </div>
);

export default CTA;
