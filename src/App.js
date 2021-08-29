import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import MainProject from './components/MainProject';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div>
      <Header />
      <NavBar />
      <Hero />
      <hr />
      <About />
      <MainProject />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;
