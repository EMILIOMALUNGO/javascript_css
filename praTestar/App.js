import React from 'react';

import { StyleSheet,StatusBar,TouchableOpacity,Text, View, SafeAreaView, TextInput } from 'react-native';

import Campo from './src/components/Campo';
import Title from './src/components/Title';
import Registrar from './src/components/Registrar';




export default function App() {
  const [ lista, setLista] = React.useState([])
  const mostrar= (estilos) => {
    let res = []
       res.push(estilos)
       setLista(res)
     }
  return (
  <View>
    
    <Title titulo="Cadrastrar novo usuario"/>
  <Registrar textButton="Registrar" />
  </View>
   )
}
    
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
},
  
});
