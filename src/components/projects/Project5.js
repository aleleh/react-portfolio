import React from 'react';
import NextProjectButton from './NextProjectButton';
import PreviousProjectButton from './PreviousProjectButton';

function Project5() {
  return (
    <div className='Project fifth'>
      <div className='title-btns-container'>
        <h2>Movie Database using TMDBs API</h2>
        <div className='project-btns'>
          <PreviousProjectButton PreviousProjectPath="/project4" />
          <NextProjectButton nextProjectPath="/project6" />
        </div>
      </div>
      <div className='p-img-conatiner'>
        <p> This React project creates a dynamic and responsive movie database using The Movie Database (TMDB) API. The application is built using modern web development technologies, including React, JavaScript, HTML, and CSS, to provide a seamless user experience when browsing and searching for movies.
            The movie database features an intuitive user interface with search functionality, allowing users to easily find movies based on keywords or phrases. It also offers a visually appealing layout, displaying movie posters, titles, release dates, and other relevant information in a grid format.
            The TMDB API is integrated with the application to fetch real-time movie data and ensure the database stays up-to-date with the latest releases and popular titles. The API provides comprehensive movie information, such as cast, crew, ratings, and synopses, enabling the application to deliver a rich and immersive user experience.
            The React framework is utilized to create a highly responsive and efficient user interface, with components rendering and updating as needed. This approach results in a smooth and interactive experience for users, as they can quickly navigate through the application and explore the movie database without any performance lag.
            In summary, the React Movie Database project offers a practical and engaging solution for movie enthusiasts to discover new films, revisit their favorite titles, and learn more about the world of cinema. Using modern web development technologies and the power of the TMDB API, this application provides a user-friendly platform to explore and enjoy a vast collection of movies. <a href='https://github.com/aleleh/react-movie-list' target='blank_'>Github Repository</a></p>
        <img src={require('../../images/project10.png')} alt="profile pic" />
      </div>
    </div>
  );
}

export default Project5;