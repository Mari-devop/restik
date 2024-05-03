import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavbarStyled';
import { MenuItems, NavbarContainer } from './NavbarStyled';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

      
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (  
        <NavbarContainer>
            <div className="navbar-container container">
            <input type="checkbox" id="menuToggle" checked={isOpen} onChange={toggleMenu} />
                <div className="hamburger-lines" onClick={toggleMenu}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <MenuItems>
                    <ul className={isOpen ? 'menu-items open' : 'menu-items'} ref={menuRef}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/category">Category</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/testimonial">Testimonial</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </MenuItems>
                <h1 className="logo">Restik</h1>
            </div>
        
        </NavbarContainer>
    )
}

export default Navbar;

