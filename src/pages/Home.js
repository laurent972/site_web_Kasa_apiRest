import React from 'react';
import Banner from '../components/Banner';
import Logement from '../components/Logement';

const home = () => {
  return (
    <div className='container-lg home-page'>
        <Banner />
        <Logement />
    </div>
  );
};

export default home;