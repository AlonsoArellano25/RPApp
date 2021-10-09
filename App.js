import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './src/navigation/Navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

const AppState = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppState>
          <Navigation />
        </AppState>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
