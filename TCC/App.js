import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import Routes from './src/pages/routes/Routes';

export default function App() {

  return (
  <NavigationContainer>
    <StatusBar backgroundColor="#fff"  barStyle='light-content' translucent={false} />
    <Routes/>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#07F042',
  },
});
