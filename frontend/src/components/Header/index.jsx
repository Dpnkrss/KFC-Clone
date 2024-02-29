import React from 'react';
import logo from '../../assets/img/KFC-Logo.png';
import Menu from '../Menu';
import './header.css';

export const Header = () => {
  return (
    <>
      <div className='headerWrapper'>
        <div className='logo'>
          <img width='150px' src={logo} alt='KFC Logo' />
        </div>

        <ul className='auth-link'>
          <li>
            <a href='www.google.com'>
              <i class='bi bi-geo-alt-fill'></i> Store Locator
            </a>
          </li>
          <li>
            <a href='www.google.com'>
              <i class='bi bi-person-circle'></i> Signin/Register
            </a>
          </li>
        </ul>
      </div>
      <Menu />
    </>
  );
};

export default Header;
