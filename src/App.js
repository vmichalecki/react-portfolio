import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
