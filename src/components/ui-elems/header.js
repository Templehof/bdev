import React, { useState } from "react";
import Menu from "./menu";
import "./header.css";
import NavLinks from "./nav-links";

function Header() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  function toggleMenu() {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <React.Fragment>
      <header className="header">
        <h2 className="logo">
          Business<span>/</span>Dev
        </h2>
        <div className="menu-btn" onClick={toggleMenu}>
          Menu
        </div>
      </header>
      <Menu shown={isMenuShown} toggleShown={toggleMenu}>
        <div className="menu" onClick={toggleMenu}>
          <NavLinks />
        </div>
      </Menu>
    </React.Fragment>
  );
}

export default Header;
