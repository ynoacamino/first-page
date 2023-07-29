import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import App from './App';
import { ShopProvider } from './context/ShopContext';

const getAuth = () => {
  const token = localStorage.getItem('user-login-token');
  return token ? `bearer ${token}` : null;
};

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    headers: {
      authorization: getAuth(),
    },
    uri: 'https://first-page-backend-production.up.railway.app/',
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ShopProvider>
      <App />
    </ShopProvider>
  </ApolloProvider>
  ,
);
