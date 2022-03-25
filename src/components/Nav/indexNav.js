import React, { useState } from "react";
import Project from "../Projects/indexProject";

function Nav() {

  const projectsSelected = () => {
    Project()
  }
  return (
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
          <span onClick={() => projectsSelected()}>Portfolio</span>
        </li>
        <li>
          <span>Resume</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;