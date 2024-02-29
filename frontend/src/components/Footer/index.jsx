import React from 'react';
import footerLogo from '../../assets/img/footer-logo.png';
import playStore from '../../assets/img/google-play.png';
import appStore from '../../assets/img/app-store.png';

import './footer.css';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <img className='footer-logo' src={footerLogo} alt='footrtlogo' />

      <div className='row footer-inner'>
        <div className='col-md-2'>
          <ul>
            <li>
              <a href='www.google.com'>Lorem, ipsum.</a>
            </li>
            <li>
              <a href='www.google.com'>Eveniet, quam?</a>
            </li>
            <li>
              <a href='www.google.com'>Illo, quisquam.</a>
            </li>
            <li>
              <a href='www.google.com'>Repellendus, perspiciatis?</a>
            </li>
            <li>
              <a href='www.google.com'>Iste, culpa.</a>
            </li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul>
            <li>
              <a href='www.google.com'>Lorem, ipsum.</a>
            </li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul>
            <li>
              <a href='www.google.com'>Lorem, ipsum.</a>
            </li>
          </ul>
        </div>
        <div className='col-md-2'>
          <ul>
            <li>
              <a href='www.google.com'>Lorem, ipsum.</a>
            </li>
            <li>
              <a href='www.google.com'>Eveniet, quam?</a>
            </li>
          </ul>
        </div>
        <div className='col-md-4'>
          <ul className='store-img-wrapper'>
            <li>
              <a href='www.google.com'>
                <img src={playStore} alt='' />
              </a>
            </li>
            <li>
              <a href='www.google.com'>
                <img src={appStore} alt='' />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='copywrite'>
        <p>© 2024 KFC Canada. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
