// Imports react, useNavigate from react router dom and my stylesheet

import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

// Declares component HomePage
function HomePage() {
  // Initializes the navigate function using the useNavigate hook. 
  // This function is used to navigate between pages.
  const navigate = useNavigate();
 // This function is called when user clicks on the "more about me" button.
 // It navigates to the /about route
  const goToAboutPage = () => {
    navigate("/about");
  };

  return (
    <div className="HomePage-main">
        <div className="text-btn-container animate__animated animate__fadeIn">
            <h1>Alex Lehnbom</h1>
            <p>Web developer and runner</p>
            <button onClick={goToAboutPage}><span>More About Me</span></button>
        </div>
        <div className="img-container animate__animated animate__fadeIn">
            <img src={require('../images/pp2.jpg')} alt="profile pic" />
        </div>
    </div>
  );
}

export default HomePage;