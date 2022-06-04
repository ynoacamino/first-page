import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// eslint-disable-next-line import/order
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
