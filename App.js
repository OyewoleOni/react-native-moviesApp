import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <MainNavigation/>
    </NavigationContainer>
  );
}

export default App;