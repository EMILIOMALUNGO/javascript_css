import React from "react";
import { StyleSheet, Text,Image,TextInput,View,Button,placeholder, SafeAreaView,StatusBar } from 'react-native';


<SafeAreaView style={styles.container}>
    <View style={styles.titulo}>
<Text style={styles.titulo}>Tarefas Diarias</Text>
    </View>

</SafeAreaView>



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },titulo:{
        fontSize:30,
        marginTop:40,
        marginBottom:30,
        textAlign:"center",
    },
});
