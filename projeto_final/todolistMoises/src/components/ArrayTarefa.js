import React, {useContext} from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";

import TarefaItem from "./TarefaItem";
import { ListContext } from "../../context/ListCreate";

export default function ListaTarefas(props){

    const  {  tasksListFilter }  = React.useContext(ListContext)

    return(
        <View>
        <ScrollView style={styles.container}>
             { tasksListFilter.map((t) => <TarefaItem task={t} />)}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    padding: 10, 
    flex: 1,
},
title:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 40,
  },
})