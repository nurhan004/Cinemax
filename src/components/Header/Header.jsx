import 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import User from '../../assets/user.svg';
import { FiLogIn } from "react-icons/fi";
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
          <Link to="/appa">
        <FiLogIn className='gtuhj'/>
          </Link>
          <p className="user-icon">
            <Link to="/profile">
            <img src={User} alt="User" className='ji' />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
