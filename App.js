import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail'; 
import Navbar from './components/Navbar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          headerTransparent: true,
          headerTitle: false,
          header: ({navigation}) => <Navbar navigation={navigation} main={true} />
        }} />
        <Stack.Screen name="Detail" component={Detail}  options={{
          headerTransparent: true,
          header: ({navigation}) => <Navbar navigation={navigation} main= {false}/>
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;