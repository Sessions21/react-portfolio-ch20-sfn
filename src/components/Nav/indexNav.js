import React, { useState } from "react";

function Nav() {

  const projectsSelected = () => {
    console.log ("hello")
  }
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          Scott F. Nichols
        </a>
        <span><p>Full Stack Web designer</p></span>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about">
              About me
            </a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          <li>
            <span onClick={() => projectsSelected()}>Projects</span>
          </li>
          <li>
            <span>Resume</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;