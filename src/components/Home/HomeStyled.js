import styled from "styled-components";
import theme1 from '../../images/theme1.avif';
import theme2 from '../../images/theme2.jpeg';
import theme3 from '../../images/theme3.jpeg';

export const ShowcaseArea = styled.section`
  height: 70vh;
 
`;

export const ShowcaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 1rem;
  background: 
  ${({ theme }) => {
    switch (theme) {
      case 'theme1':
        return `url(${theme1})`;
      case 'theme2':
        return `url(${theme2})`;
      case 'theme3':
        return `url(${theme3})`;
      default:
        return `url(${theme1})`;
    }
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 
    rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
    rgba(0, 0, 0, 0.06) 0px 2px 1px, 
    rgba(0, 0, 0, 0.09) 0px 4px 2px, 
    rgba(0, 0, 0, 0.09) 0px 8px 4px, 
    rgba(0, 0, 0, 0.09) 0px 16px 8px, 
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

    .link-menu {
      display: inline-block;
      padding: 0.8em 1.5em;
      background-color: #117964;
      color: #fff;
      text-decoration: none;
      border-radius: 15px;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: #0d5642;
      }
    }
`;

export const Title = styled.h1`
  text-transform: uppercase;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: grey;
`;

export const Description = styled.p`
  margin-bottom: 1em;
  text-align: center;
`;

