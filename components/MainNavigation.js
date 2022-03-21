import React from 'react';
import { Text } from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Detail'; 
import Navbar from './Navbar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class MainNavigation extends React.PureComponent {

    render() {
        return (
            <Stack.Navigator headerMode={'screen'}>
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
        );
    }
}

export default MainNavigation;