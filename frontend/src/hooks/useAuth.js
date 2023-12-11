import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

export default useAuth;
/*
import { useContext } from 'react';
import { AuthContext } from '../contexts/auth';

export const useAuth = () => {
  return useContext(AuthContext);
};*/