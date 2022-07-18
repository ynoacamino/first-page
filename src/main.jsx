import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';

const store = configureStore({ reducer: {} });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <App />
      <Subscribe />
      <Footer />
    </BrowserRouter>
  </Provider>
  ,
);
