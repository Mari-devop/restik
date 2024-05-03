import styled from "styled-components";

export const CategoryComponent = styled.section`
        padding: 5rem 0 10rem 0;
          h2 {
              text-align: center;
              font-size: 2.5rem;
              font-weight: 400;
              margin-bottom: 40px;
              text-transform: uppercase;
              color: #555;
          }
          .food-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
          }
          .food-container img {
            display: block;
            height: 300px;
            width: 100%;
            object-fit: cover;
            object-position: center;
          }
          .img-container {
            flex: 1 1 400px;
            margin: 0 1rem;
            position: relative;
            overflow: hidden;
            width: calc(33.333% - 2rem); 
            cursor: pointer;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            box-shadow: 
              rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, 
              rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, 
              rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, 
              rgba(0, 0, 0, 0.06) 0px 2px 1px, 
              rgba(0, 0, 0, 0.09) 0px 4px 2px, 
              rgba(0, 0, 0, 0.09) 0px 8px 4px, 
              rgba(0, 0, 0, 0.09) 0px 16px 8px,
              rgba(0, 0, 0, 0.09) 0px 32px 16px;
            
          }
       
          
          .img-content {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0;
            z-index: 2;
            text-align: center;
            transition: all 0.3s ease-in-out 0.1s;
          }
          
          .img-content h3 {
            color: #fff;
            font-size: 2.2rem;
          }
          
          .img-content button {
            margin-top: 20px;
            padding: 10px 20px;
            background: #fff;
            color: #000;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
          }
          
          .img-container::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.871);
            opacity: 0;
            z-index: 1;
            transform: scaleY(0);
            transform-origin: 100% 100%;
            transition: all 0.3s ease-in-out;
          }
          
          .img-container:hover::after {
            opacity: 1;
            transform: scaleY(1);
          }
          
          .img-container:hover .img-content {
            opacity: 1;
            top: 40%;
          }
`;

