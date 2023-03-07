
import React from 'react';
import { StyleSheet,StatusBar, Text, View, SafeAreaView, TextInput } from 'react-native';


 
export default function Nome(props){
 const [nome, setNome] =React.useState ()

    return(
     <View style={styles.container}>
      <TextInput placeholder='Nome' style={styles.input} />
      </View>
    )
  }
  


 const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
    },
    input:{
      alignItems: 'center',
      fontSize:30,
      marginTop:10,
     marginBottom:10,
    },
    
  });
  