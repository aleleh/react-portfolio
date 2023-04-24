import React from 'react';
import { useNavigate } from 'react-router-dom';

function NextProjectButton({ nextProjectPath }) {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(nextProjectPath);
  };

  return <button onClick={handleNext}><i className='bx bx-right-arrow-circle'></i></button>;
}

export default NextProjectButton;

// Renders a button woth a right arrow and when clicked it naviagates to the next project or 'NextProjectPath' 
// which is defined in each project component, using 'navigate' function from the 'useNavigate' hook from 'react-router-dom'