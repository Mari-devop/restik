import React, { useState } from 'react';
import './SubscribeStyled'
import { Form, SubscribeContainer } from './SubscribeStyled'
import { useForm, ValidationError } from '@formspree/react';


const Subscribe = () => {
  const [state, handleSubmit] = useForm("mkndybva");
  const [showText, setShowText] = useState(false);
  const [hideForm, setHideForm] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    if (state.succeeded) {
      setShowText(true);
      setHideForm(true);

      setTimeout(() => {
        setShowText(false);
        setHideForm(false);
      }, 3000);
    }
  }


  return (
    <div>
      {!hideForm && (
        <SubscribeContainer>
                <Form>
                    <h2 class="h">Subscribe to our newsletter</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          required 
                        />
                        <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                        />
                        <button 
                          type="submit"
                          disabled={state.submitting}
                        >
                          Subscribe
                        </button>
                    </form>
                </Form>
           </SubscribeContainer>
      )}
           {showText && <div className="popup">Thank you for subscribing!</div>}
    </div>
  )
}

export default Subscribe
