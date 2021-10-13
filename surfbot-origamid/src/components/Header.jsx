import React from 'react';
import logo from '../images/surfbot-logo.svg';
import NavMenu from './NavMenu';
import '../css/header.css';

function Header() {
  return(
    <div className="header">
      <img className="image-logo" src={ logo } alt="logo" />
      <NavMenu />
    </div>
  );
}

export default Header;
