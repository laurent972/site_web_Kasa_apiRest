import React from 'react';
import Banner from '../components/Banner';
import Logement from '../components/Logement';
import homeBanner from '../assets/IMG.png'

const home = () => {
  return (
    <section className='container-lg home-page'>
        <Banner link={homeBanner} text={'Chez vous, partout et ailleurs'} />
        <Logement />
    </section>
  );
};

export default home;