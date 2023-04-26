//imports react, links from react router dom and stylesheet

import React from "react";
import { Link } from "react-router-dom";
import "../index.css";


//Projects function with images as links to specific project pages
function ProjectsPage() {
  return (
    <div className="ProjectsPage-main">
      <div className="projects-upper">
        <div className="project-container animate__animated animate__fadeIn">
        <Link to="/project1">
          <img src={require("../images/project1.jpg")} alt="profile pic" />
        </Link>
          <p>Chatbot using OpenAIs API</p>
        </div>
        <div className="project-container two animate__animated animate__fadeIn">
        <Link to="/project2">
          <img src={require('../images/project2.jpg')} alt="profile pic" />
        </Link>
          <p>Website for Consulting Firm</p>
        </div>
        <div className="project-container three animate__animated animate__fadeIn">
        <Link to="/project3">
          <img src={require("../images/project3.jpg")} alt="profile pic" />
        </Link>
          <p>Voice Controlled Chatbot</p>
        </div>
      </div>
      <div className="projects-lower">
        <div className="project-container four animate__animated animate__fadeIn">
        <Link to="/project4">
          <img src={require("../images/project11.png")} alt="profile pic" />
        </Link> 
          <p>Color Palette Generator</p>
        </div>
        <div className="project-container five animate__animated animate__fadeIn">
        <Link to="/project5">
          <img src={require("../images/project10.png")} alt="profile pic" />
        </Link>
          <p>React Movie Database</p>
        </div>
        <div className="project-container six animate__animated animate__fadeIn">
        <Link to="/project6">
          <img src={require("../images/project12.png")} alt="profile pic" />
          </Link>
          <p>Website for Gaming Bar</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;