import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Title(props){

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
               <Text style={styles.title}>{props.title}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    title:{
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    }
})