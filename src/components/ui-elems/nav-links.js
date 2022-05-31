import React from "react";
import { Link } from "react-router-dom";
import "./nav-links.css";

function NavLinks(props) {
  return (
    <ul className="nav-links-container">
      <li className="nav-item">
        <a href="#intro" className="nav-link">
          Main
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" className="nav-link">
          About
        </a>
      </li>
      <li className="nav-item">
        <a href="#contacts" className="nav-link">
          Contacts
        </a>
      </li>
      <li className="nav-item">
        <Link to="/tools" className="nav-link route-link">All tools</Link>
      </li>
    </ul>
  );
}

export default NavLinks;
