import Main from './MainComponent';
import CarDetails from './CarDetails';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()
export default function MainStackNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name='Main'
            component={Main}
            options={{ title: 'Home Screen' }}
          />
       <Stack.Screen
            name='Details'
            component={CarDetails}
            options={{ title: 'Details Screen' }}
          />
       
        </Stack.Navigator>
      </NavigationContainer>
    )
  }