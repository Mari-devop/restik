import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    .html {
        font-size: 62.5%;
    }

    body {
        font-family: "Poppins", sans-serif;
    }
    .container {
        max-width: 1200px;
        width: 90%;
        margin: auto;
      }
      
    .btn {
        display: inline-block;
        padding: 0.5em 1.5em;
        text-decoration: none;
        border-radius: 50px;
        cursor: pointer;
        outline: none;
        margin-top: 1em;
        text-transform: uppercase;
        font-weight: small;
    }
      
    .btn-primary {
        color: #fff;
        background: #16a083;
    }
      
    .btn-primary:hover {
        background: #117964;
        transition: background 0.3s ease-in-out;
    }


`;

export default GlobalStyles;
