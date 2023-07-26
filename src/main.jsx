import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  ApolloClient, HttpLink, InMemoryCache, ApolloProvider,
} from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://first-page-backend-production.up.railway.app/',
  }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
);
