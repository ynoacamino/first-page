import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';
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
import Products from './Products/Products';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:5000/',
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Products />} />
        <Route path="/brand" element={<Marcas />} />
        <Route path="/shops" element={<Tiendas />} />
        <Route path="/buy" element={<h1>Comprar xd</h1>} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  </ApolloProvider>
  ,
);
