import React from 'react';
import {StatusBar} from "react-native"; 
import { SafeAreaView, StyleSheet,Text,TouchableOpacity,View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'


import Routes from './src/pages/routes/Routes';

export default function App() {
  return (
   < NavigationContainer>
    <StatusBar  backgroundColor='#FF7E01' barStyle='light-content' translucent={false} />
    <Routes/>
   </ NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
  },
});