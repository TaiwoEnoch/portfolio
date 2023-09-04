import React from 'react';
import CV from '../../assets/FullstackCV.pdf';

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className='btn' target='_blank'>My Resume</a>
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
