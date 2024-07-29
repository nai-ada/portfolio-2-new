import React from 'react';
import Nav from '../components/Nav';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AboutTabs from '../components/AboutTabs';

function App() {
  return (
    <div data-theme="light">
      <div className="header-content" id="home">
        <Nav />
        <Home />
      </div>

      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
