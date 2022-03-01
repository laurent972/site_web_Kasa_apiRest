import './styles/App.css';

import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Fiche from './pages/Fiche';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <>
     
      <BrowserRouter>
       <Header />
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/a-propos" element = { <Apropos />} />
            <Route exact path="/fiche-logement" element = { <Fiche />} />
            <Route path="*" element = { <NotFound /> } />
        </Routes>
      </BrowserRouter>

    </>


  );
};

export default App;


