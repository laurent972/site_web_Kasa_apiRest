import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <>
      <NavLink className='navbar-brand' to="laurentrega_11_10082022/">
        <img src="./logo_kasa.svg" alt="Logo Kasa" width={190}/>
      </NavLink>
    </>
  );
};

export default Logo;