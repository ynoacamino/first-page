/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useApolloClient } from '@apollo/client';
import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import { QUERY_USERDATA } from '../Operations/Query';

const shopContext = createContext();

export const useShop = () => {
  const context = useContext(shopContext);
  if (!context) throw new Error('context not found');
  return context;
};

export function ShopProvider({ children }) {
  const [user, setUser] = useState(null);
  const client = useApolloClient();

  const login = async () => {
    try {
      const { data } = await client.query({
        query: QUERY_USERDATA,
      });
      setUser({
        username: data.findUserData.username,
        name: data.findUserData.name,
        phone: data.findUserData.phone,
        lastname: data.findUserData.lastname,
      });
    } catch (err) {
      throw new Error('Wrong credentials');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('userData')) {
      setUser(JSON.parse(localStorage.getItem('userData')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(user));
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.clear();
    client.clearStore();
    location.reload();
  };

  return (
    <shopContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
