import React, { useState, useRef, useEffect } from 'react';
import './css/HamburgerMenu.css';
import ButtonComponent from './ButtonComponent';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  

  return (
    <div className={`hamburger-menu ${isOpen ? 'open' : 'open'}`} ref={menuRef}>
      <ul>
        <ButtonComponent to="/" text="Home"/>
        <ButtonComponent to="/rent" text="Rent"/>
        <ButtonComponent to="/add-products" text="Add Products"/>
        <ButtonComponent to="/add-admin" text="Add Admin"/>
        <ButtonComponent to="/summary" text="Summary"/>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
