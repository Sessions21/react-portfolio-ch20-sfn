import React, { useState } from 'react';
import Header from './components/Header/indexHead';
import About from './components/About/indexAbout';
import Project from './components/Projects/indexProject';

function App() {

  return (
    <div>
      <Header />
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
