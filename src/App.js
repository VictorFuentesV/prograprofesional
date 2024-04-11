import React, { useState } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from './components/Navbar';
import Home from './components/home';
import Certificados from './components/certificados';
import Miscertificados from './components/miscertificados';
import Cuenta from './components/cuenta';
import Carreras from './components/carreras';
import LanguageSwitcher from './components/botonidioma';
import './App.css';
import './i18n';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <LanguageSwitcher />
        <NavBar  />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/carreras" element={<Carreras />} />
          <Route exact path="/miscertificados" element={<Miscertificados />} />
          <Route exact path="/cuenta" element={<Cuenta />} />
          <Route exact path="/certificados/:id" element={<Certificados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;