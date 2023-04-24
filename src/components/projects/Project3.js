import React from 'react';
import NextProjectButton from './NextProjectButton';
import PreviousProjectButton from './PreviousProjectButton';

function Project3() {
  return (
    <div className='Project third'>
      <div className='title-btns-container'>
        <h2>Voice Controlled Chatbot</h2>
        <div className='project-btns'>
          <PreviousProjectButton PreviousProjectPath="/project2" />
          <NextProjectButton nextProjectPath="/project4" />
        </div>
      </div>
      <div className='p-img-conatiner'>
        <p> This Python project utilizes the power of speech recognition and text-to-speech conversion to create a simple chatbot that responds to voice commands. The chatbot is built using the speech_recognition, pyttsx3, pywhatkit, datetime, wikipedia, and pyjokes Python packages.
            The chatbot can perform a variety of tasks, such as playing a song on YouTube, searching for information on Wikipedia, telling jokes, and even providing the current time. It responds to voice commands in a natural and conversational tone, making it an engaging and interactive tool for users.
            The speech_recognition package is used to recognize and convert spoken commands into text, while pyttsx3 is used to convert the bot's responses into speech. Pywhatkit is used to perform various web-based tasks, such as playing music on YouTube and searching on Google. The datetime package is used to provide the current time and date, and wikipedia is used to search for information on a wide range of topics.
            Finally, the pyjokes package is used to provide a touch of humor to the chatbot's responses, making it a fun and entertaining tool for users. With this project, users can experience the power of voice-controlled chatbots and explore the possibilities of natural language processing with Python. <a target='blank_' href='https://github.com/aleleh/Voice-Assistant-Python'>Github Repository</a></p>
        <img src={require('../../images/project3.jpg')} alt="profile pic" />
      </div>
    </div>
  );
}

export default Project3;