import React from 'react';



import Logo from '../components/Logo';
import Navigation from './Navigation';

const header = () => {
  return (
    <header className='header' aria-label='header'>
    <Logo />
     <Navigation />
    </header>
  );
};

export default header;