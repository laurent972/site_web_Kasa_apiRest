import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Apropos from './pages/Apropos';
import Fiche from './pages/Fiche';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <BrowserRouter>
       <Header />
        <Routes>
            <Route exact path="/laurentrega_11_10082022" element={ <Home /> } />
            <Route exact path="laurentrega_11_10082022/a-propos" element = { <Apropos />} />
            <Route  path="laurentrega_11_10082022/fiche-logement/:id" element = { <Fiche />} />
            <Route path="laurentrega_11_10082022/404" element = { <NotFound /> } />
            <Route path="*" element = { <Navigate replace to='laurentrega_11_10082022/404' /> } />
            <Route path="/*" element = { <Navigate replace to='laurentrega_11_10082022/404' /> } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    
  );
};

export default App;


