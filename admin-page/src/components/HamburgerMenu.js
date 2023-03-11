import React, { useState, useRef, useEffect } from 'react';
import './css/HamburgerMenu.css';
import ButtonComponent from './ButtonComponent';
import kmutnb from './image/kmutnb.png';
import ece from './image/ece.png';
import { useLocation } from 'react-router-dom'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const location = useLocation()
  
  const isHomePage = location.pathname === '/' || location.pathname === '/admin';

  return (
    <div className={`hamburger-menu ${isHomePage ? 'hide' : 'open'}`} ref={menuRef}>
      <img src={kmutnb} alt="kmutnb" className="kmutnb-logo"/>
      <img src={ece} alt="ece" className="ece-logo"/>
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
