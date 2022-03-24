import React, { useState } from 'react';
import Nav from './components/Nav/indexNav';
import About from './components/About/indexAbout';
import Project from './components/Projects/indexProject';

function App() {

  return (
    <div>
      <Nav/>
      <main>
        <div>
          <Project />
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;
