import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
 
    <>
        <div className="nav">
        <nav>
          <ul>
            <NavLink to="/">
                Accueil
            </NavLink>
            <NavLink to="a-propos">
              À propos
            </NavLink>
            
          </ul>
        </nav>
        </div>
   
    </>         

  );
};

export default Navigation;