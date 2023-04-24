import React from 'react';
import NextProjectButton from './NextProjectButton';
import PreviousProjectButton from './PreviousProjectButton';

function Project4() {
  return (
    <div className='Project fourth'>
      <div className='title-btns-container'>
        <h2>Color Palette Generator</h2>
        <div className='project-btns'>
          <PreviousProjectButton PreviousProjectPath="/project3" />
          <NextProjectButton nextProjectPath="/project5" />
        </div>
      </div>
      <div className='p-img-conatiner'>
        <p> This JavaScript project generates a random color palette consisting of five colors, allowing users to explore unique and aesthetically pleasing color combinations. The project is built using HTML, CSS, and JavaScript, with a focus on creating an interactive and visually appealing user interface.
            The color palette generator is designed with a simple button that, when clicked, generates a new set of five random colors. Each color is represented by a square with a corresponding hex code displayed below it. Users can easily copy the hex codes and use them in their own design projects.
            The JavaScript code utilizes an event listener to trigger the random color generation when the button is clicked. A custom function, randomHexColor(), is used to generate random hex codes for the colors. This function iterates through an array of hexadecimal characters to create a six-digit color code, ensuring a wide variety of possible colors. 
            The generated colors and their respective hex codes are then applied to the appropriate HTML elements using the DOM manipulation methods provided by JavaScript. As a result, users can see the visual representation of the colors and their corresponding hex codes in real-time.
            This project offers a simple yet effective way for designers, artists, and creative individuals to discover new color combinations and gain inspiration for their own work. With the Random Color Palette Generator, users can explore the endless possibilities of color combinations and incorporate them into their designs. <a target='blank_' href='https://github.com/aleleh/color-palette-generator'>Github Repository</a></p>
        <img src={require('../../images/project11.png')} alt="profile pic" />
      </div>
    </div>
  );
}

export default Project4;