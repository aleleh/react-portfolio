import React from 'react';
import NextProjectButton from './NextProjectButton';
import PreviousProjectButton from './PreviousProjectButton';

function Project1() {
  return (
    <div className='Project first'>
      <div className='title-btns-container'>
        <h2>Chatbot using OpenAIs API</h2>
        <div className='project-btns'>
          <PreviousProjectButton PreviousProjectPath="/project6" />
          <NextProjectButton nextProjectPath="/project2" />
        </div>
      </div>
      <div className='p-img-conatiner'>
        <p> In this project, I developed a basic AI-powered chatbot using OpenAI's Davinci-003 API, a natural language processing engine. The chatbot is capable of understanding user inputs and generating responses to address user questions and concerns.
            The chatbot offers a simple user experience, handling a range of topics and conversations. By integrating the Davinci-003 model, the chatbot can maintain context and generate responses that are generally relevant to user inputs.
            Key Features:
            Integration of OpenAI's Davinci-003 API for natural language processing capabilities
            User-friendly interface that enables interaction with the chatbot
            Context-aware responses for relatively accurate communication
            Suitable for basic use cases, such as simple customer support, virtual assistants, or entertainment purposes
            This project demonstrates the potential of AI in enhancing communication and interaction with technology. While the AI-powered chatbot may not be as advanced as GPT-3.5 or GPT-4, it provides users with a basic platform to obtain information, support, and guidance, contributing to an improved user experience. <a href='https://github.com/aleleh/NipponGPT' target='blank_'>Github Repository</a></p>
        <img src={require('../../images/project1.jpg')} alt="profile pic" />
      </div>
    </div>
  );
}

export default Project1;
