import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [links] = useState([
    { url: "/", name: 'About Me'},
    { url: "/projects", name: 'Projects'},
    { url: "/resume", name: 'Resume'},
    { url: "/contact", name: 'Contact'},
  ]);

  const [currentUrl, setCurrentUrl] = useState(links[0]);

  return (
    <nav>
      <ul className="flex-row">
        {links.map((link) => (
          <li 
            key={link.name}
            className={`mx-1 ${ currentUrl.name === link.name && 'navActive'}`}
            onClick={() => {
            setCurrentUrl(link)}}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;