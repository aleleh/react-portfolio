import React from 'react';
import { useNavigate } from 'react-router-dom';

function PreviousProjectButton({ PreviousProjectPath }) {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(PreviousProjectPath);
  };

  return <button onClick={handleNext}><i className='bx bx-left-arrow-circle'></i></button>;
}

export default PreviousProjectButton;

// Renders a button with a left arrow and when clicked it naviagates to the previous project or 'PreviousProjectPath' 
// which is defined in each project component, using 'navigate' function from the 'useNavigate' hook from 'react-router-dom'