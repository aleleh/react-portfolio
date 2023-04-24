// imports react, strylesheet and boxicons
import React from 'react';
import '../index.css';
import 'boxicons';

//footer function with some simple animations, links and icons
function Footer() {
  return (
    <footer className="animate__animated animate__slideInUp">
      <p>&copy; Alexander Lehnbom</p>
      <a href="https://github.com/aleleh" target="_blank" rel="noreferrer">
        <i className="bx bxl-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/alexander-lehnbom-1705b2107/" target="_blank" rel="noreferrer">
        <i className="bx bxl-linkedin-square"></i>
      </a>
    </footer>
  );
}

export default Footer;