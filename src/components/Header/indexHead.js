import React, { useState } from "react";
import Project from "../Projects/indexProject";
import Nav from "../Nav/indexNav"


function Header() {

  const projectsSelected = () => {
    Project()
  }
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/">
          Scott F. Nichols
        </a>
        <span><p>Full Stack Web designer</p></span>
      </h2>
      <Nav />
    </header>
  );
}

export default Header;