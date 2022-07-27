import React, { createContext, useContext, useReducer } from 'react';
import { useRouter } from 'next/router';

import { supabase } from '../../service/supabase';

import { AuthContextProps, authCredentials } from './type';
import { AuthReducer, INITIAL_STATE } from './AuthReducer';

interface Children {
  children: JSX.Element | JSX.Element[];
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const useAuth = () => {
  const Context = useContext(AuthContext);

  if (!Context) {
    throw new Error('Can\'t use "useAuth" without an AuthProvider!');
  }

  return Context;
};

const AuthProvider = ({ children }: Children) => {
  const [loginState, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  const router = useRouter();

  const login = async (data: authCredentials) => {
    try {
      dispatch({ type: 'LOGIN_REQUEST' });
      const { error } = await supabase.auth.signIn(data);

      if (error) {
        dispatch({ type: 'LOGIN_ERROR', payload: `Error: ${JSON.stringify(error)}` });
      }
      dispatch({ type: 'LOGIN_SUCCESS' });
    } catch (error) {
      if (typeof error === 'string') {
        dispatch({ type: 'LOGIN_ERROR', payload: `Error: ${error}` });
      }
    }
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    // TODO: Add handle error
    if (error) {
      dispatch({ type: 'LOGIN_ERROR', payload: `Error: ${JSON.stringify(error)}` });
    }
    router.push('/login');
  };

  const state = {
    loginState,
    login,
    logout,
  };

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
};

export { useAuth };
export default AuthProvider;
