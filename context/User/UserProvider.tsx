import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { supabase } from '../../service/supabase';
import { User, UserContextProps } from './type';
import { UserReducer } from './UserReducer';

interface Children {
  children: JSX.Element | JSX.Element[];
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const useUser = () => {
  const Context = useContext(UserContext);

  if (!Context) {
    throw new Error('Can\'t use "useAuth" without an AuthProvider!');
  }

  return Context;
};

const UserProvider = ({ children }: Children) => {
  const [userState, dispatch] = useReducer(UserReducer, {} as User);
  const user = supabase.auth.user();

  useEffect(() => {
    if (user) {
      dispatch({ type: 'SET_USER', payload: user });
    }
  }, [user]);

  const state = {
    userState,
  };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export { useUser };
export default UserProvider;
