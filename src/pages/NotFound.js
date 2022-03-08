import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className='container-lg not-found'>
      <div className='not-found--404'>404</div>
      <div className='not-found--sentence '>Oups! La page que vous demandez n'existe pas.</div>
     
      <NavLink className='mt-5 d-block' to="/laurentrega_11_10082022/">
         Retourner sur la page d'accueil
      </NavLink>
    </section>
  );
};

export default NotFound;