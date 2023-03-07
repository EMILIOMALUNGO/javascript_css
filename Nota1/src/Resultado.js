import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function Resultado() {
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