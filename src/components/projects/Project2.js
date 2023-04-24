import React from 'react';
import NextProjectButton from './NextProjectButton';
import PreviousProjectButton from './PreviousProjectButton';

function Project2() {
  return (
    <div className='Project second'>
      <div className='title-btns-container'>
        <h2>Website for Consulting Firm</h2>
        <div className='project-btns'>
          <PreviousProjectButton PreviousProjectPath="/project1" />
          <NextProjectButton nextProjectPath="/project3" />
        </div>
      </div>
      <div className='p-img-conatiner'>
        <p> In this project, I designed and developed a professional website for a consulting firm, focusing on creating a simple yet effective online presence. The project involved designing a custom logo, building a user-friendly web page, and implementing an Elastic Email-powered SMTP server to enable direct message sending through a contact form on the website.
            The website showcases the consulting firm's expertise, services, and contact information while providing a seamless user experience for visitors interested in reaching out for inquiries or assistance.
            Key Features:
            Custom-designed logo that embodies the consulting firm's brand identity and values
            Clean and user-friendly web page layout that highlights the firm's services and expertise
            Contact form integration with Elastic Email's SMTP server for direct and efficient message sending
            Responsive design that ensures an optimal viewing experience across various devices and screen sizes
            This project demonstrates the importance of a professional online presence for businesses in the consulting industry. By combining a visually appealing design, an easy-to-navigate layout, and a reliable messaging system, the website effectively conveys the consulting firm's brand and facilitates seamless communication between potential clients and the firm. <a href='https://xido.se/' target='blank_'>Link to website.</a></p>
        <img src={require('../../images/project2.jpg')} alt="profile pic" />
      </div>
    </div>
  );
}

export default Project2;