
import React from "react";
import { StyleSheet, StatusBar, Text, View, Button, ShadowPropTypesIOS, TextInput } from 'react-native';
import DivisivelPage from "./src/pages/DivisivelPage";


export default function App() {
  
  return (
    <View style={styles.container}>
      <DivisivelPage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },

});

