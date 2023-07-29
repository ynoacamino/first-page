import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import Inicio from './Inicio/Inicio';
import './index.css';
import Header from './Header/Header';
import Subscribe from './Subscribe/Subscribe';
import Footer from './Footer/Footer';
import Tiendas from './Tiendas/Tiendas';
import Marcas from './Marcas/Marcas';
import Products from './Products/Products';
import ScreenError from './ScreenError/ScreenError';
import Loading from './Loading/Loading';
import PageToItem from './PageToItem/PageToItem';
import Category from './Category/Category';
import LoginForm from './AuthForm/LoginForm';
import RegisterForm from './AuthForm/RegisterForm';
import Buy from './Buy/Buy';
import { ScrollToTop } from './util';

function App() {
  const { loading, data, error } = useQuery(gql`
    query{
      testConnection
    }
  `);
  // eslint-disable-next-line no-console
  console.log(data ? data.testConnection : 'Loading');
  if (error) return <ScreenError errorCode={error.code} msgError={error.message} />;
  if (loading) return <Loading />;
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/products/item/:productId" element={<PageToItem />} />
        <Route path="/brand" element={<Marcas />} />
        <Route path="/shops" element={<Tiendas />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/singin" element={<RegisterForm />} />
      </Routes>
      <Subscribe />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
