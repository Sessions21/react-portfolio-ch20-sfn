import React, { useState } from "react";
import Nav from "../Nav/indexNav"


function Header() {
  return (
    <header className="flex-row px-1">
      <h2>
        <a href="/about">
          Scott F. Nichols
        </a>
        <span><p>Full Stack Web designer</p></span>
      </h2>
      <Nav />
    </header>
  );
}

export default Header;