import React from 'react';
import './index.css';
import Nav from "./components/Nav/indexNav"
import About from './components/About/indexAbout'

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
