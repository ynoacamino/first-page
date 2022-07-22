import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Inicio from './Inicio/Inicio';
import './index.css';
// eslint-disable-next-line import/order
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Header from './Header/Header';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
import Tiendas from './Tiendas/Tiendas';
import Marcas from './Marcas/Marcas';

const store = configureStore({ reducer: {} });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<h1>Products</h1>} />
        <Route path="/brand" element={<Marcas />} />
        <Route path="/shops" element={<Tiendas />} />
        <Route path="/buy" element={<h1>Comprar</h1>} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  </Provider>
  ,
);
