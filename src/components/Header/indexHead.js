import React from "react";
import Nav from "./indexNav"


function Header() {
  return (
    <header className="flex-row px-1">
      <h1>
        <a className="name" href="/">Scott F. Nichols</a>
        <span><p>Full Stack Web designer</p></span>
      </h1>
      <Nav />
    </header>
  );
}

export default Header;