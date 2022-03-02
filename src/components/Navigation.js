import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
 
    <>
        <nav>
          <ul className="nav justify-content-end">
          <li className="nav-item"> 
            <NavLink to="laurentrega_11_10082022/" className={(nav) => nav.isActive ? "nav-active" : ""}>
              Accueil 
            </NavLink>
          </li>
          <li className="nav-item"> 
            <NavLink to="laurentrega_11_10082022/a-propos" className={(nav) => nav.isActive ? "nav-active" : ""}>
               À propos 
            </NavLink>
          </li>
          </ul>
        </nav>
    </>         

  );
};

export default Navigation;