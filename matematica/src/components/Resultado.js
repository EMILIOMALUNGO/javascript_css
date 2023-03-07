import { StyleSheet,StatusBar,Text, View,Button, ShadowPropTypesIOS, TextInput } from 'react-native';



export default function Resultado(props) {
    return (
      
      <View style={styles.container}>
     <Text style={styles.resul}>{props.resul}</Text>
      </View>
    )
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      padding:20
    
    },
    resul:{
    padding:10,
    fontSize:20,
    borderWidth:1 

    },
    
  });