import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  box-shadow: 0px 5px 10px 0px #aaa;
  position: fixed;
  width: 100%;
  background: #fff;
  color: #000;
  opacity: 0.85;
  height: 50px;
  z-index: 12;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    height: 64px;
    align-items: center;

    .logo {
      order: 1;
      font-size: 2.3rem;
      margin-bottom: 1rem;
    }
  }

  input[type="checkbox"],
  .hamburger-lines {
    display: none;
  }

  @media (max-width: 768px) {
    .navbar-container input[type="checkbox"],
    .navbar-container .hamburger-lines {
      display: block;
    }

    .navbar-container {
      display: block;
      position: relative;
      height: 64px;
    }

    .navbar-container input[type="checkbox"] {
      position: absolute;
      display: block;
      height: 32px;
      width: 30px;
      top: 20px;
      left: 20px;
      z-index: 5;
      opacity: 0;
    }

    .navbar-container .hamburger-lines {
      display: block;
      height: 23px;
      width: 35px;
      position: absolute;
      top: 17px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .navbar-container .hamburger-lines .line {
      display: block;
      height: 4px;
      width: 100%;
      border-radius: 10px;
      background: #333;
    }

    .navbar-container .hamburger-lines .line1 {
      transform-origin: 0% 0%;
      transition: transform 0.4s ease-in-out;
    }

    .navbar-container .hamburger-lines .line2 {
      transition: transform 0.2s ease-in-out;
    }

    .navbar-container .hamburger-lines .line3 {
      transform-origin: 0% 100%;
      transition: transform 0.4s ease-in-out;
    }

    .logo {
      order: 1;
      font-size: 2rem;
      float: right;
    }

    .menu-items {
      position: absolute;
      top: 100%;
      left: 0;
      padding-top: 20px;
      background: #fff;
      width: 100%;
      max-width: 300px;
      transform: translateY(-100%);
      display: none;
      flex-direction: column;
      margin-left: -40px;
      padding-left: 50px;
      transition: transform 0.5s ease-in-out;
      box-shadow: 5px 0px 10px 0px #aaa;
      z-index: 10;
    }

    .menu-items.open {
      transform: translateY(0);
      display: flex;
    }

    .menu-items li {
      list-style: none;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      font-weight: 500;
    }

    .menu-items a {
      text-decoration: none;
      color: #444;
      transition: color 0.3s ease-in-out;
    }

    .menu-items a:hover {
      color: #117964;
    }

    .navbar-container input[type="checkbox"]:checked ~ .menu-items {
      display: flex; /* Ensure menu is displayed when checkbox is checked */
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
      transform: rotate(35deg);
      margin-top: 2px;
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
      transform: scaleY(0);
    }

    .navbar-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
      transform: rotate(-35deg);
      margin-top: -2px;
    }
  }

  @media (max-width: 474px) {
    .logo {
      font-size: 1rem;
    }
  }
`;

export const MenuItems = styled.div`
  .menu-items {
    order: 2;
    display: flex;

    li {
      list-style: none;
      margin-left: 1.5rem;
      margin-bottom: 0.5rem;
      font-size: 1.2rem;

      a {
        text-decoration: none;
        color: #444;
        font-weight: 500;
        transition: color 0.3s ease-in-out;

        &:hover {
          color: #117964;
          transition: color 0.3s ease-in-out;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .menu-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 100px;
      background: #fff;
      height: 100vh;
      max-width: 300px;
      transform: translateX(-100%);
      position: fixed;
      top: 0;
      left: 0;
      overflow-y: auto;
      transition: transform 0.5s ease-in-out;
      box-shadow: 5px 0px 10px 0px #aaa;
      z-index: 10;
    }

    

    .menu-items li {
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
      font-weight: 500;
    }

    .navbar-container input[type="checkbox"]:checked ~ .menu-items {
      left: 0; /* Adjusted to show menu items when checkbox is checked */
    }
  }
`;
