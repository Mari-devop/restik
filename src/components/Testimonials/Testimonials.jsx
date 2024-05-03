
import React from 'react'
import './TestimonialsStyled'
import { TestimonialsComponent, TestimonialContainer } from './TestimonialsStyled'

import testimonialList from '../../constants/testimonialList';


const Testimonials = () => {
  return (
    <TestimonialsComponent>
        <h2 class="testimonial-title">What Our Customers Say</h2>
        <TestimonialContainer>
            {testimonialList.map((testimonial, index) => (
                <div class="testimonial-box" key={index}>
                    <div class="customer-photo">
                        <img src={testimonial.image} alt="" />
                        <p class="customer-name">{testimonial.name}</p>
                    </div>
                    <p class="testimonial-text">{testimonial.text}</p>
                </div>
            ))} 
        </TestimonialContainer>
   

    </TestimonialsComponent>
  )
}

export default Testimonials;