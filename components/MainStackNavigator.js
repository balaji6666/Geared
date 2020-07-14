import Main from './MainComponent';
import CarDetails from './CarDetails';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './HomeScreen';

const Stack = createStackNavigator()
export default function MainStackNavigator() {
    return (
      <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
            name='Main'
            component={Main}
            options={{ title: 'All cars' }}
          />
        <Stack.Screen name="Details" component={CarDetails} />
      </Stack.Navigator>
    


        {/* <Stack.Navigator initialRouteName='Details' >

<Stack.Screen
            name='Home'
            component={Home}
            options={{ title: 'Home Screen' }}
          />

        <Stack.Screen
            name='Main'
            component={Main}
            options={{ title: 'All cars' }}
          />
          
       <Stack.Screen
            name='Details'
            component={CarDetails}
            options={{ title: 'Car Details' }}
          />
       
        </Stack.Navigator> */}
      </NavigationContainer>
    )
  }