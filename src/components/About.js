import React from 'react';
import '../styles/About.css';
import foto1 from "../about-photos/me.jpg"

const About = () => {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-container">
        <div className="about-photo">
          <img src={foto1} alt="Sobre mí" />
        </div>
        <div className="about-bio">
          <h3>¡Hola! Soy Juanpa   </h3>
          <p>
            Aquí va una breve biografía sobre ti. Puedes hablar sobre tu experiencia,
            tus intereses y cualquier otra cosa que te gustaría compartir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
