// imports react, link component from react router dom, stylesheet and my resume

import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import resume from "../assets/Alexander_Lehnbom_Resume.pdf";

// navbar function using link copmponents that navigates to a specific route
function NavBar() {
  return (
    <header>
      <nav className="animate__animated animate__slideInDown">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/running">Running</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href={resume} download>Download Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;