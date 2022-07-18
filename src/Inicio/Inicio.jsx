import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import Slider from './Slider/Slider';
import Background from './Background/Background';
import PrimaryProducts from './PrimaryProducts/PrimaryProducts';
import SecundaryProducts from './SecundaryProducts/SecundaryProducts';

function Inicio() {
  return (
    <>
      <Background />
      <Slider />
      <PrimaryProducts />
      <SecundaryProducts />
    </>
  );
}

export default Inicio;
