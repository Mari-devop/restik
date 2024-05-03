import styled from "styled-components";

export const TestimonialsComponent = styled.div`
    padding: 5rem 0;
    height: 100vh;
    background: rgba(243, 243, 243);
      .testimonial-title {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 400;
          color: #555;
          margin-bottom: 2rem;
          text-transform: uppercase;
        }
`;

export const TestimonialContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    font-weight: 300;
    
      
      .testimonial-box .testimonial-text {
        color: #444;
        font-size: 1.2rem;
        padding-left: 2rem;
      }
      
      .testimonial-box {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1rem;
      }
      
      .customer-photo img {
        display: block;
        width: 100px;
        height: 100px;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
      }

      .customer-name {
        font-size: 1.2rem;
        font-weight: 500;
        margin-top: 1rem;
        color: #555;
      }    
`;