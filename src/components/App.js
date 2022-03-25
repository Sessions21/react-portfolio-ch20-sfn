import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header/indexHead';
import About from './About/indexAbout';
import Project from './Projects/indexProject';
import Resume from './Resume/indexRes';
import Contact from './Contact/indexContact';
import Footer from './Footer/indexFooter';
import "./App.css"

function App() {

  return (
    <div className='container'>
      <Router>
        <Header />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Project} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact}/>
      </Router>
        <main>
          <About />
          <Project />
          <Resume />
          <Contact />
        </main>
      <Footer />
    </div>
  );
}

export default App;
