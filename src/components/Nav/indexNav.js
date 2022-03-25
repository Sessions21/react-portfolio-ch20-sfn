import React, { useState } from "react";
import Project from "../Projects/indexProject";

function Nav() {

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <span>About me</span>
        </li>
        <li className="mx-2">
          <span>Portfolio</span>
        </li>
        <li className="mx-2">
          <span>Resume</span>
        </li>
        <li className="mx-2">
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;