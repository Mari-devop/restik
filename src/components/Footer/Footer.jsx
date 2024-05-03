import './FooterStyled'
import { FooterContainer, IconsContainer } from './FooterStyled'
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <FooterContainer>
        <h1 class="logo">Restik</h1>
        <p>Mari  <FaReact />  2024</p>
        <IconsContainer>
            <a href="https://www.instagram.com/filon_mari_/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
            <a href="https://t.me/Mari_Filon" target="_blank" rel="noreferrer"><FaTelegram /></a>
            <a href="https://github.com/Mari-devop" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
        </IconsContainer>
    </FooterContainer>
  )
}

export default Footer
