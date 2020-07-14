import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Main from './MainComponent';
import CarDetails from './CarDetails';
import Home from './HomeScreen';
import MainStackNavigator from './MainStackNavigator';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Details" component={CarDetails} /> */}
        <Drawer.Screen name = "StackNavigator" component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}