import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ListContext } from "../../context/ListCreate";
import Title from "./Title";

export default function TarefaItem({task}){

    const { removeTask } = React.useContext(ListContext)

    return(
            <View style={styles.container}>
                <View style={styles.containerTask}>
                     <Title title={task.titulo} />
                     <Text style={styles.data}>{task.data}</Text>
                </View>
                <View style={styles.containerButtons} >
                    {/* <TouchableOpacity style={styles.button}>
                        <Ionicons name="checkmark-done-circle" size={30} color={"#000"}/>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.button} onPress={() => removeTask(task)}>
                        <Icon name="trash-alt" size={30} color={"#000"}/>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
 container:{
    flexDirection: "row", 
    width: "99%",
    marginBottom: 10, 
    marginLeft: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
},
containerTask:{
    width: "80%",
    height: 70,
    paddingLeft: 20,
    justifyContent: 'center',
},
containerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around',
},
button:{
    width: "20%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
},
  txtLista:{
    fontSize: 20,
    fontWeight: '700',
  },
})