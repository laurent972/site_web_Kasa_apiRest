import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo_kasa.svg'

const Logo = () => {
  return (
    <>
      <NavLink className='navbar-brand' to="laurentrega_11_10082022/">
        <img src={logo} alt="Logo Kasa" width={150}/>
      </NavLink>
    </>
  );
};

export default Logo;