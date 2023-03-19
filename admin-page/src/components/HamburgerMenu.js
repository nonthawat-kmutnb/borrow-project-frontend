import React, { useState, useRef, useEffect } from 'react';
import './css/HamburgerMenu.css';
import ButtonComponent from './ButtonComponent';
import kmutnb from './image/kmutnb.png';
import ece from './image/ece.png';
import { useLocation,Link } from 'react-router-dom'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const location = useLocation()
  
  const isHomePage = location.pathname === '/' || location.pathname === '/admin' || location.pathname === '/admin/';

  return (
    <div className={`hamburger-menu ${isHomePage ? 'hide' : 'open'}`} ref={menuRef}>

      <div>
      <Link to="/">
      <img src={kmutnb} alt="kmutnb" className="kmutnb-logo"/>
      </Link>
      <Link to="/">
      <img src={ece} alt="ece" className="ece-logo"/>
      </Link>
      </div>
      <ul>
        {/* <ButtonComponent to="/" text="Home"/> */}
        <ButtonComponent to="/admin/rent" text="Rent"/>
        <ButtonComponent to="/admin/products" text="Products"/>
        <ButtonComponent to="/admin/add-products" text="Add Products"/>
        <ButtonComponent to="/admin/add-admin" text="Add Admin"/>
        <ButtonComponent to="/admin/summary" text="Summary"/>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
