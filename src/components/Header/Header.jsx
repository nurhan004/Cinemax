import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import User from '../../assets/user.svg';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src={Logo} alt="Logo" />
          <div className="">
            <Link className='nav-link' to="/">Главная</Link>
          </div>
        </div>

        <div className="user-container">
          <p className="language">EN</p>
          <p className="user-icon">
            <img src={User} alt="User" />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
