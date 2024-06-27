import React from 'react';
import '../styles/Navbar.css';
import logo from '../imgs/logo-blanco.PNG';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="left">
        <li><a href="#portfolio" className='portfolio-button'>Portfolio</a></li>
        <li><a href="#albums" className='album-button'>Albums</a></li>
      </ul>
      <img src={logo} alt='Juanpa Quesada Photography Logo' className='navbar-logo' href="#welcome" />
      <ul className="right">
        <li><a href="#about" className='about-button'>About</a></li>
        <li><a href="#contact" className='contact-button'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
