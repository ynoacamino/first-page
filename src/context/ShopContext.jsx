/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useApolloClient, useQuery } from '@apollo/client';
import React, {
  useContext, createContext, useState, useEffect,
} from 'react';
import { QUERY_USERDATA } from '../Operations/Query';
import { LOGIN_USER, REGISTER_USER } from '../Operations/Mutation';

const shopContext = createContext();

export const useShop = () => {
  const context = useContext(shopContext);
  if (!context) throw new Error('context not found');
  return context;
};

export function ShopProvider({ children }) {
  const [user, setUser] = useState(null);
  const { data, refetch, loading } = useQuery(QUERY_USERDATA);
  const [token, setToken] = useState(null);
  const client = useApolloClient();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (data?.findUserData) {
      setUser(data.findUserData);
      setCart(data.findUserData.cart);
    }
  }, [data]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('user-login-token', token);
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const tk = await client.mutate({
        mutation: LOGIN_USER,
        variables: {
          username,
          password,
        },
      });
      if (tk) {
        setToken(tk.data.loginUser.value);
      }
      location.reload();
    } catch (err) {
      throw new Error('Wrong credentials');
    }
  };

  const register = async (username, password, phone, name, lastname) => {
    try {
      const tk = await client.mutate({
        mutation: REGISTER_USER,
        variables: {
          username,
          name,
          lastname,
          phone,
          password,
        },
      });
      if (tk) {
        setToken(tk.data.createUser.value);
      }
      location.reload();
    } catch (err) {
      throw new Error(`${err.message} Creadentials wrong`);
    }
  };

  const isLoged = () => !!user;

  useEffect(() => {
    if (localStorage.getItem('user-login-token')) refetch();
  }, []);

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
        register,
        logout,
        isLoged,
        reload: refetch,
        loading,
        cart,
      }}
    >
      {children}
    </shopContext.Provider>
  );
}
