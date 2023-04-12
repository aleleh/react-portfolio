import React, { useState } from 'react';

function ContactPage() {
  // Define the state for form data and submitted data
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes and update the formData state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission, update submittedData, and reset formData
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({ name: '', email: '', message: '' });
  };

  // Define the state for the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Toggle the modal open/closed state
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="ContactPage-main">
      <div className="ContactPage-form-container">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
        <div className="submitted-data-container">
          {submittedData && (
            <div className="submitted-data">
              <p>Message Sent!</p>
              <p>Name: {submittedData.name}</p>
              <p>Email: {submittedData.email}</p>
              <p>Message: {submittedData.message}</p>
            </div>
          )}
        </div>
      </div>
      <div className="ContactPage-modal-container">
        <button className='book-a-call-btn' onClick={toggleModal}>Book a Call</button>
      </div>
      {isModalOpen && (
        <div className="Modal">
          <div className="Modal-content">
            <button className="Modal-close" onClick={toggleModal}>
              Close
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