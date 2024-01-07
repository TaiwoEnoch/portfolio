import React, { useState } from 'react';
import './testimonials.css';

import AVTR1 from '../../assets/RitAVT1.jpg';
import AVTR2 from '../../assets/OlAVT.jpg';
import AVTR3 from '../../assets/EDAVT.jpg';
import AVTR4 from '../../assets/DIAVT.jpg';


const data = [
  {
    avatar: AVTR1,
    name: 'Ritika Rawat',
    review: `Working closely with Taiwo Enoch has been a truly enriching experience. Throughout our collaboration, I've had the opportunity to witness Taiwo's exceptional talent and dedication as a software engineer. Taiwo's commitment to delivering high-quality code and solutions is evident in every project we've undertaken together.
    Taiwo Enoch is a highly skilled and dedicated software engineer who consistently delivers outstanding results. His technical prowess, collaborative nature, and enthusiasm for staying at the forefront of the field make him a valuable asset to any software development project. I wholeheartedly recommend Taiwo to anyone in need of a software engineer who can bring both expertise and a positive attitude to the team. 🙌`,
  },
  {
    avatar: AVTR2,
    name: 'Oluwatoyin (Abayomi) Olaoye',
    review: `Enoch is one of the most committed and skillful developers I've had the pleasure of working with at Microverse. He's super dedicated to his craft, which is exciting and motivating! He's always right on schedule, fancies standard/best coding practices, and has impeccable eyes for perfection - not minding a few requests for changes.

    He's positive in demeanor, highly collaborative as a team member, and a good communicator.
    
    I'd recommend working with Enoch.
    
    He's going to make things happen, never been so sure of someone. I hope he finds a matching organization that will put his fertile skills to use.`,
  },
  {
    avatar: AVTR3,
    name: 'Eduardo Villarreal',
    review: `I am thrilled to recommend Taiwo Enoch for his outstanding work as a partner during our time in the software development program. Taiwo Enoch is a talented and dedicated developer who excels at both frontend and backend development.

    One thing that amaze me was Taiwo's ability to take on challenges and find innovative solutions.
    
    Overall, I am confident that Taiwo would make an excellent addition to any development team, his technical skills, collaborative abilities, and problem-solving mindset would be an asset to any organization. I wholeheartedly recommend Taiwo for any opportunities in full-stack development.`,
  },
  {
    avatar: AVTR4,
    name: 'Dieum Akonkwa',
    review: `Taiwo Enoch is a great developer and a friend. He is a very smart, friendly, and hard working with good communication skills.

    He is also a good collaborator and team player with both technical and professional skills. His problem-solving skill is on the high level. We built group a project in Microverse and he was a very effective teammate.
    
    I recommend Enoch not only because he is a good friend of mine, but for the amazing skills that he possesses.`,
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  // const nextTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev + 1) % data.length);
  // };

  // const prevTestimonial = () => {
  //   setCurrentTestimonial((prev) => (prev - 1 + data.length) % data.length);
  // };

  return (
    <section className="testimonials-section">
      <h5>Review from some Coding Partners</h5>
      <h2>Recommendations</h2>

      <div className="testimonials-container">
        <div className="testimonial">
          <div className="client-avatar">
            <img src={data[currentTestimonial].avatar} alt="Avatar One" />
          </div>
          <h5 className="client-name">{data[currentTestimonial].name}</h5>
          <p className="client-review">{data[currentTestimonial].review}</p>
        </div>

        <div className="testimonial-pagination">
          {data.map((_, index) => (
            <button
              key={index}
              className={index === currentTestimonial ? 'active' : ''}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </div>

        {/* <div className="testimonial-navigation">
          <button onClick={prevTestimonial}>&#8249;</button>
          <button onClick={nextTestimonial}>&#8250;</button>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
