import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/indexHead';
import About from './Pages/About/indexAbout';
import Project from './Pages/Projects/indexProject';
import Resume from './Pages/Resume/indexRes';
import Contact from './Pages/Contact/indexContact';
import Footer from './Footer/indexFooter';
import "./App.css"

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={ <About /> } />
          <Route path="/projects" element={ <Project /> } />
          <Route path="/resume" element={ <Resume /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
