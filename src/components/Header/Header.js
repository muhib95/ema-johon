import React from 'react';
import logo from'../../images/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <nav className='nav-container'>
      <img src={logo} alt="" />
      <div>
        <a href="f">Order</a>
        <a href="h">Order review</a>
        <a href="h">Manage Inventory</a>
        <a href="f">Login</a>
      </div>
    </nav>
  );
};

export default Header;