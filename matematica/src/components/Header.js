import React from 'react';
import { StyleSheet, StatusBar, Text, View, Button, ShadowPropTypesIOS, TextInput } from 'react-native';


export default function Header(props) {

  const [numero, setNumero] = React.useState();

  return (
    <View style={styles.container}>
      <TextInput placeholder='Numero' style={styles.input} value={numero} onChangeText={setNumero} />
      <Button title='Mostrar' onPress={() => props.onMostrar(Number(numero))} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20, 
    backgroundColor: '#fff',

  },
  input: {
    padding: 10,
    fontSize: 20,
    borderWidth: 1
  },

});
