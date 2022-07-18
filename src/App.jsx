import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Slider from './Slider/Slider';
import Background from './Background/Background';
import PrimaryProducts from './PrimaryProducts/PrimaryProducts';
import SecundaryProducts from './SecundaryProducts/SecundaryProducts';

function App() {
  return (
    <div className="App">
      <Background />
      <Slider />
      <PrimaryProducts />
      <SecundaryProducts />
    </div>
  );
}

export default App;
