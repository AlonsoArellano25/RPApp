import React, {createContext, useReducer} from 'react';
import {authReducer} from '../reducer/AuthReducer';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const authInicalState = {
  status: 'checking',
  infoUser: {},
};

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, authInicalState);

  const signIn = infoUser => {
    dispatch({type: 'signin', payload: infoUser});
  };

  const logout = async () => {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    dispatch({type: 'logout'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
