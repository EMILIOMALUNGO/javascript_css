import React from 'react';
import { StatusBar } from "react-native";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'

import Login from './src/pages/login';


import Routes from './src/routes/routes';
import { AuthProvider } from './src/contexts/Auth';
;

export default function App() {
  return (
    <AuthProvider>
      < NavigationContainer>
        <Routes />
      </ NavigationContainer>
      <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />
    </AuthProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
