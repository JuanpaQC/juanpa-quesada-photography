import React, { useState } from 'react';
import Modal from 'react-modal';
import { InView } from 'react-intersection-observer'; // Importar InView
import '../styles/Album.css';

const albumsData = [
  {
    title: 'Yosemite National Park',
    cover: 'https://madera.objects.liquidweb.services/photos/20371-yosemite-may-yosemite-falls-waterfalls-cooks-meadow-spring-2023-Rectangle-600x400.jpg', // Horizontal
    photos: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400'
    ]
  },
  {
    title: 'Wildlife',
    cover: 'https://i.pinimg.com/236x/bf/8d/31/bf8d3156c7a6725e33b1f374d7c250d2.jpg', // Vertical
    photos: [
      'https://via.placeholder.com/300x600',
      'https://via.placeholder.com/300x600',
      'https://via.placeholder.com/300x600'
    ]
  },
  {
    title: 'Sierra Mountains',
    cover: 'https://st4.depositphotos.com/19688680/21807/i/450/depositphotos_218077862-stock-photo-early-morning-sunrise-fall-hits.jpg', // Horizontal
    photos: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400'
    ]
  },
  {
    title: 'Santa Cruz Coast',
    cover: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/4a/38/50/west-cliff-drive.jpg?w=300&h=300&s=1', // Square
    photos: [
      'https://via.placeholder.com/300x300',
      'https://via.placeholder.com/300x300',
      'https://via.placeholder.com/300x300'
    ]
  },
  {
    title: 'San Mateo Coast',
    cover: 'https://media.istockphoto.com/id/1273262372/photo/view-of-the-californian-coast-half-moon-bay-san-mateo-county-ca-summer-2015.jpg?s=612x612&w=0&k=20&c=-8N-Gj6R8HePJFCa9a18FDnxjQ_uEojRItWUJ_5roSM=', // Horizontal
    photos: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400'
    ]
  },
  {
    title: 'Golden Gate',
    cover: 'https://images.unsplash.com/photo-1660337158869-7d2e28b655bf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Vertical
    photos: [
      'https://via.placeholder.com/300x600',
      'https://via.placeholder.com/300x600',
      'https://via.placeholder.com/300x600'
    ]
  },
  // Agrega más álbumes según sea necesario
];

const Albums = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState({});

  const openModal = (album, index) => {
    setCurrentAlbum(album);
    setCurrentImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % currentAlbum.photos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + currentAlbum.photos.length) % currentAlbum.photos.length);
  };

  const addLike = () => {
    const albumTitle = currentAlbum.title;
    const imageIndex = currentImageIndex;
    setLikes((prevLikes) => {
      const newLikes = { ...prevLikes };
      if (!newLikes[albumTitle]) {
        newLikes[albumTitle] = Array(currentAlbum.photos.length).fill(0);
      }
      newLikes[albumTitle][imageIndex] += 1;
      return newLikes;
    });
  };

  return (
    <section id="albums" className="albums">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <h2
            ref={ref}
            className={inView ? 'visible' : ''}
          >
            Albums
          </h2>
        )}
      </InView>
      <ul className="album-grid">
        {albumsData.map((album, albumIndex) => (
          <InView key={albumIndex} triggerOnce>
            {({ inView, ref }) => (
              <li
                ref={ref}
                className={`album-item ${inView ? 'visible' : ''}`}
                style={{ transitionDelay: `${albumIndex * 0.1}s` }} // Añadir retraso de transición
                onClick={() => openModal(album, 0)}
              >
                <h3 className="album-title">{album.title}</h3>
                <img src={album.cover} alt={album.title} className="album-cover" />
              </li>
            )}
          </InView>
        ))}
      </ul>
      {currentAlbum && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal" overlayClassName="overlay">
          <div className="modal-content">
            <button onClick={closeModal} className="close-button">&times;</button>
            <button onClick={prevImage} className="nav-button nav-left">&#9664;</button>
            <button onClick={nextImage} className="nav-button nav-right">&#9654;</button>
            <div className="modal-image-container">
              <img src={currentAlbum.photos[currentImageIndex]} alt={`Img ${currentImageIndex + 1} of album ${currentAlbum.title}`} className="modal-image" />
              <div className="modal-title">{`Photo ${currentImageIndex + 1}`}</div>
            </div>
            <button onClick={addLike} className="like-button">❤️ {likes[currentAlbum.title] ? likes[currentAlbum.title][currentImageIndex] : 0}</button>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Albums;
