import React from 'react';
import NextProjectButton from './NextProjectButton';
import PreviousProjectButton from './PreviousProjectButton';

function Project6() {
  return (
    <div className='Project sixth'>
      <div className='title-btns-container'>
        <h2>Website for Gaming Bar</h2>
        <div className='project-btns'>
          <PreviousProjectButton PreviousProjectPath="/project5" />
          <NextProjectButton nextProjectPath="/project1" />
        </div>
      </div>
      <div className='p-img-conatiner'>
        <p> This school project is a basic E-Sport Cafe booking website developed using vanilla JavaScript, CSS, and HTML. The website is designed to provide customers with a straightforward method to reserve gaming stations at the e-sport cafe through an online platform.
            The E-Sport Cafe Booking Website features a simple layout that guides users through the reservation process. It includes a reservation form where customers can input their contact information, select their preferred gaming station, and choose a desired time slot. The website uses vanilla JavaScript to handle form validations and user interactions, ensuring a seamless experience for the customers.
            The website's visual design is created using HTML and CSS, resulting in an aesthetically pleasing and responsive user interface. This design approach makes it easy for customers to navigate the website and complete their reservations on various devices.
            In conclusion, the E-Sport Cafe Booking Website is a modest yet functional solution for customers to reserve gaming stations at an e-sport cafe. Developed as a school project using core web development technologies, it demonstrates the effectiveness of vanilla JavaScript, CSS, and HTML in creating a user-friendly and practical website. <a target='blank_' href='https://github.com/aleleh/e-sport-cafe/'>Github Repository</a></p>
        <img src={require('../../images/project12.png')} alt="profile pic" />
      </div>
    </div>
  );
}

export default Project6;