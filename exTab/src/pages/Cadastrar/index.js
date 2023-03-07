import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";






export default function Cadastra() {
    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container} >
          
            <View>
                <TextInput placeholder="Nome" style={styles.input} />
                <TextInput placeholder="Email" style={styles.input} />
                <TextInput placeholder="Senha" style={styles.input} />
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-around"}}>
            <TouchableOpacity onPress={() => navigation.navigate("Dashiboard")}>
                <Text style={styles.tela1}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.tela2} >voltar</Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    tela1: {
        fontSize: 20,
        marginTop: 30,
        padding: 20,
        borderRadius: 40,
        backgroundColor: "#9DF545",
        textAlign: "center"
    },
    tela2: {
        fontSize: 20,
        marginTop: 30,
        padding: 20,
        borderRadius: 40,
        borderWidth: 1,
        backgroundColor: "#42EBCD",
        textAlign: "center"
    },
    input: {
        fontSize: 20,
        marginTop: 30,
        marginBottom: 5,
        padding: 20,
        borderWidth: 1,
        backgroundColor: "#EBA76C",
        textAlign: "center"

    },
    Image: {
        fontSize: 80,
        marginTop: 30,
        height: 200,
        padding: 20,
        resizeMode: 'contain',
    },
})