import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import {AuthContext} from '../context/AuthContext';
import Loading from '../components/Loading';
import Stores from '../screens/Stores';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export const Navigation = () => {
  const {status} = useContext(AuthContext);

  //   if (status === 'checking') {
  //     return <Loading />;
  //   }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <>
          <Stack.Screen name="Stores" component={Stores} />
          <Stack.Screen name="Profile" component={Profile} />
        </>
      )}
    </Stack.Navigator>
  );
};
