import React from 'react';
import logo from '../assets/LOGO.png'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo footer" width={100} />
      <div className='mt-4'>© 2020 Kasa. All rights reserved</div>
    </footer>
  );
};

export default Footer;