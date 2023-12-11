import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/login', { withCredentials: true })
      .then(response => {
        if (response.data.loggedIn) {
          setUser(response.data.user);
        }
      });
  }, []);

  const signin = (username, password) => {
    axios.post('http://localhost:3001/login', { username, password }, { withCredentials: true })
      .then(response => {
        if (response.data.length > 0) {
          setUser(response.data[0]);
        } else {
          return "Senha ou usuário incorretos.";
        }
      })
      .catch(() => {
        return "O usuário não existe";
      });
  };

  const signup = (username, email, password) => {
    axios.post('http://localhost:3001/signup', { username, email, password }, { withCredentials: true })
      .then(response => {
        return;
      });
  };

  const signout = () => {
    axios.get('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        setUser(null);
      });
  };

  return (
    <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
      {children}
    </AuthContext.Provider>
  );
};