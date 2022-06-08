import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({ reducer: {} });

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  ,
);
