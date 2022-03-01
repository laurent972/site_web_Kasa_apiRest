import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <img src="./logo_kasa.svg" alt="Logo Kasa"/>
      </NavLink>
    </div>
  );
};

export default Logo;