import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/Portfolio.css';
import foto1 from '../img-welcoming/1.jpg';
import foto2 from '../img-welcoming/1saturada.jpg';
import foto3 from '../img-welcoming/2prea.jpg';


const images = [
  { src: foto1, title: "Mundo Aragnido" },
  { src: foto2, title: "Middle Sunset" },
  { src: foto3, title: "Moon With Star" }
];

const Portfolio = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(Array(images.length).fill(0));

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  };

  const addLike = () => {
    const newLikes = [...likes];
    newLikes[currentImageIndex] += 1;
    setLikes(newLikes);
  };

  return (
    <section id="portfolio" className="portfolio">
      <h2 className='title'>My Work</h2>
      <div className="portfolio-grid">
        {images.map((image, index) => (
          <div key={index} className="portfolio-item">
            <img
              src={image.src}
              alt={image.title}
              className="portfolio-image"
              onClick={() => openModal(index)}
            />
            <p className="portfolio-title">{image.title}</p>
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
        <div className="modal-content">
          <button onClick={closeModal} className="close-button">&times;</button>
          <button onClick={prevImage} className="nav-button nav-left">&#9664;</button>
          <button onClick={nextImage} className="nav-button nav-right">&#9654;</button>
          <div className="modal-image-container">
            <img src={images[currentImageIndex].src} alt={images[currentImageIndex].title} className="modal-image" />
            <div className="modal-title">{images[currentImageIndex].title}</div>
          </div>
          <button onClick={addLike} className="like-button">❤️ {likes[currentImageIndex]}</button>
        </div>
      </Modal>
    </section>
  );
};

export default Portfolio;
