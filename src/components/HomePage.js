import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function HomePage() {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate('/about');
  };

  return (
    <div className="HomePage-main">
        <div className="text-btn-container">
            <h1>Alex Lehnbom</h1>
            <p>I am a web developer and ultra runner</p>
            <button onClick={goToAboutPage}><span>More About Me</span></button>
        </div>
        <div className='img-container'>
            <img src={require('../images/pp2.jpg')} alt="profile pic" />
        </div>
    </div>
  );
}

export default HomePage;