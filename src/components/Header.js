import React from 'react';



import Logo from '../components/Logo';
import Navigation from './Navigation';

const header = () => {
  return (
    <div className='header'>
    <Logo />
     <Navigation />
    </div>
  );
};

export default header;