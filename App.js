import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './components/MainComponent';
import MainStackNavigator from './components/MainStackNavigator';
import DrawerNavigator from './components/DrawerNavigator';

export default class App extends React.Component {
  render() {
    return (
      <DrawerNavigator/>
    );
  }
}
