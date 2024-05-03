import React from 'react'
import { useState } from 'react'
import './ContactStyled'
import { ContactComponent, ContactContainer, ContactForm } from './ContactStyled'
import berry from '../../images/berryContact.jpeg'
import { useForm, ValidationError } from '@formspree/react';



const Contact = () => {
  const [state, handleSubmit] = useForm("mkndybva");
  const [showPage, setShowPage] = useState(false);
  const [formData, setFormData] = useState({ email: '', name: '', message: '' });
 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      setShowPage(true);
      setTimeout(() => {
        setShowPage(false);
        setFormData({ email: '', name: '', message: '' });
      }, 3000);
    }
  }

  return (
    <ContactComponent>
    <ContactContainer>
        <div class="contact-img">
            <img src={berry} alt="berry" />
        </div>

      <ContactForm>
          <form onSubmit={handleFormSubmit}>
            <label htmlFor="email">
              Email 
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              value={formData.email} 
              onChange={handleInputChange}
            />
            <label htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
            <label htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
      </ContactForm>
    </ContactContainer>
    {showPage && <div className="popup">Thank you! We will answer soon!</div>}
</ContactComponent>
  )
}

export default Contact;