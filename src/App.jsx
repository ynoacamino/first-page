import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Background from './Background/Background';
import Subscribe from './Subscribe/Subscribe';
// import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Slider />
      <Subscribe />
    </div>
  );
}

export default App;
