// imports useState hook and XCircle icon from react icons
import axios from 'axios';
import React, { useState } from 'react';
import { BiXCircle } from "react-icons/bi";

function ContactPage() {
  
  // States
  // formData keeps track of the current values of the inpit fields in the form.
  // It is initialized as an object with 'name', 'email' and 'mesasge' properties all set to empty strings. 
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  // submittedData stores the data submitted through the form and is inittially set to 'null'.
  const [submittedData, setSubmittedData] = useState(null);
  // isModalOpen This state determines if booking call modal is open or closed and is initally set to 'false'.
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle input changes.
  // When user makes changes to any of the fields
  // this function is called and updates the formData state to include new value
  // while keeping the other fields unchanged. 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  // e.preventDefault() prevents the default behaviour of the form such as reloading the page
  // setSubmittedData(formData) stores the current formData so it can be displayed
  // laste line is just resetting the formData to it's initial values
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Make a POST request to your server with form data
      const response = await axios.post('http://localhost:3000/sendmail', formData);
  
      if(response.status === 200){
        setSubmittedData(formData);
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Handle error, e.g. show a notification or message
        console.error("Error sending message");
      }
    } catch (error) {
      // Handle error, e.g. show a notification or message
      console.error("Error sending message: ", error);
    }
  };
  

  // Toggle modal open/closed state or 'true' or 'false'
  // Calls setIsModalOpen function then passes argument '!IsModalOpen' to  'setIsModalOpen'
  // The '!' (not operator) inverts the current boolean value of 'isModalOpen'
  // making it possible to toggle back and forth everytime toggleModal is called
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="ContactPage-main">
      <div className="ContactPage-form-container animate__animated animate__fadeIn">
        <div className="form-card">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}/>
            <br/>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}/>
            <br/>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}>
              </textarea>
            <br/>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* if submittedData is true the code after will run */} 
        {submittedData && (
          <div className="submitted-data">
            <p>Message Sent!</p>
            <p>Name: {submittedData.name}</p>
            <p>Email: {submittedData.email}</p>
            <p>Message: {submittedData.message}</p>
          </div>
        )}
      </div>
        
      {/* toggle button fir modal */}
      <div className="ContactPage-modal-container animate__animated animate__fadeIn">
        <button className='book-a-call-btn' onClick={toggleModal}>Book a Call</button>
      </div>
      
      {/* if isModalOpen is true the code after will run */} 
      {isModalOpen && (
        <div className="Modal">
          <div className="Modal-content">
            <button className="Modal-close" onClick={toggleModal}>
              <BiXCircle />
            </button>
            <h2>Book a Call</h2>
            <p>Here's some information about booking a call.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactPage;