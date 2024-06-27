import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';
import Albums from './components/Album';
import About from './components/About';
import Contact from './components/Contact'; // Corrected the file name to 'Contact'
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Portfolio />
      <Albums />
      <About />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
