import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";


import Routes from './src/Routes/routes';
import { AuthProvider } from './src/Contexts/Auth';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
