import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Asegúrate de importar el Navbar
import '../styles/Welcome.css';
import foto1 from '../img-welcoming/1.jpg';
import foto2 from '../img-welcoming/1saturada.jpg';
import foto3 from '../img-welcoming/2prea.jpg';
import gif1 from '../img-welcoming/scroll-down1.gif';

const images = [foto1, foto2, foto3];

const Welcome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage((prevNext) => (prevNext + 1) % images.length);
      setTimeout(() => {
        setCurrentImage(nextImage);
      }, 1000); // Espera 1 segundo antes de cambiar la imagen actual
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section id="welcome" className="welcome">
      <Navbar /> {/* Agregar el Navbar aquí */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slide ${index === currentImage ? 'active' : ''}`}
        />
      ))}
      <h1 className="welcome-text">Welcome to My Portfolio</h1>
      <p className='name-text'>Juanpa Quesada Photography</p>
      <img src={gif1} alt='Scroll down' className='scroll-down'></img>
      <p className='final-text'>Please Scroll down</p>
    </section>
  );
};

export default Welcome;
