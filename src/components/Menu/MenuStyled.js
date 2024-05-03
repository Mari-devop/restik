import styled from "styled-components";

export const MenuHeading = styled.h2`
    padding: 70px 0px;
    text-align: center;
    font-size: 2rem;
    font-weight: 400;
    color: #666;
    text-transform: uppercase;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 5%;
    img {
        display: block;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        transform: translateX(150%);
        animation: about-img-animation 1s ease-in-out forwards;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
    }  
      @keyframes about-img-animation {
        100% {
        transform: translate(0);
        }
      }
      .food-menu-item {
        display: flex;
        flex: 1 1 600px;
        justify-content: space-evenly;
        margin-bottom: 3rem;
      }
      
      .food-description {
        margin: auto 2.5rem;
        transform: translate(-150%);
        animation: about-text-animation 1s ease-in-out forwards;
      }
      @keyframes about-text-animation {
        100% {
        transform: translate(0);
        }
      }
      .font-title {
        font-size: 1rem;
        font-weight: 400;
        color: #444;
      }
      
      .food-description p {
        font-size: 1.2rem;
        color: #555;
        font-weight: 500;
      }
      
      .food-description .food-price {
        margin-top: 1rem;
        color: #117964;
        font-weight: 700;
      }
          
`;

