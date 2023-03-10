import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/HamburgerMenu.css';
import ButtonComponent from './ButtonComponent';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation()
  
  const isHomePage = location.pathname === '/';

  return (
    <div className={`hamburger-menu ${isHomePage ? 'hide' : 'open'}`} ref={menuRef}>
      <ul>
        {/* <ButtonComponent to="/" text="Home"/> */}
        <ButtonComponent to="/admin/rent" text="Rent"/>
        <ButtonComponent to="/admin/add-products" text="Add Products"/>
        <ButtonComponent to="/admin/add-admin" text="Add Admin"/>
        <ButtonComponent to="/admin/summary" text="Summary"/>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
