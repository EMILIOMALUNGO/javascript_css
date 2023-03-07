
 import { StyleSheet,StatusBar,Text, View,Button, ShadowPropTypesIOS, TextInput } from 'react-native';


 export default function Titulo(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {props.title} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:20
  
  },
  title:{
    marginTop:20,
    textAlign:"center",
    fontWeight: 'bold',
    
    

  },
})