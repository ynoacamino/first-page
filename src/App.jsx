import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import Background from './Background/Background';

function App() {
  return (
    <div className="App">
      <Header />
      <Background />
      <Slider />
    </div>
  );
}

export default App;
