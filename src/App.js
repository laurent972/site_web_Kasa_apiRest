import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Fiche from './pages/Fiche';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <div className="container-fluid">
      <BrowserRouter>
       <Header />
        <Routes>
            <Route exact path="/laurentrega_11_10082022" element={ <Home /> } />
            <Route exact path="laurentrega_11_10082022/a-propos" element = { <Apropos />} />
            <Route exact path="laurentrega_11_10082022/fiche-logement" element = { <Fiche />} />
            <Route path="*" element = { <NotFound /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


