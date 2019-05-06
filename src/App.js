import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Peliculas from './components/Peliculas'
import Series from './components/Series'
import Juegos from './components/Juegos'
import Footer from './components/Footer'
import Derechos from './components/Derechos'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Peliculas />    
      <Series />
      <Juegos /> 
      <Footer />   
      <Derechos />
    </div>
  );
}

export default App;
