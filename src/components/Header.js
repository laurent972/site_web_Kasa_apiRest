import React from 'react';



import Logo from '../components/Logo';
import Navigation from './Navigation';

const header = () => {
  return (
    <header className='header navbar container-lg mt-3 mb-4' aria-label='header'>
      <Logo />
     <Navigation />
    </header>
  );
};

export default header;