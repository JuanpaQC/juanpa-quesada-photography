import React from 'react';
import { InView } from 'react-intersection-observer'; // Importar InView
import '../styles/About.css';
import foto1 from "../about-photos/me.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <h2 ref={ref} className={inView ? 'visible' : ''}>
            About Me
          </h2>
        )}
      </InView>
      <div className="about-container">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div ref={ref} className={`about-photo ${inView ? 'visible' : ''}`}>
              <img src={foto1} alt="Sobre mí" />
            </div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div ref={ref} className={`about-bio ${inView ? 'visible' : ''}`}>
              <h3>¡Hello! I'm Juanpa</h3>
              <p>
                Aquí va una breve biografía sobre ti. Puedes hablar sobre tu experiencia,
                tus intereses y cualquier otra cosa que te gustaría compartir.
              </p>
            </div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default About;
