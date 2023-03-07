import React from "react";
import { useState, useContext } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../Contexts/Auth";



export default function Login(props) {
    const navigation = useNavigation()
    const {login}= React.useContext(AuthContext)
    const [nome, setNome]= React.useState("emilio.malungo@hotmail.com")
    const [email, setEmail]= React.useState("emilio.malungo@hotmail.com")
    const [senha, setSenha]=React.useState ()

    const [erro, setErro] = React.useState(null);

    const loginHandle = () => {
        try {
           
            // logar
            login(email, senha);
            console.log(email, senha);
            // redirecionar para Noticias
            navigation.navigate("Noticias")
        }catch (err) {
            console.log(err);
            setErro(err.message);
        }
       
    }



    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.Image} source={require("../../../assets/fotocapa.jpg")} />

            <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail}/>
            <TextInput style={styles.input1} placeholder="senha" value={senha} onChangeText={setSenha }/>

            <TouchableOpacity onPress={() => {loginHandle()}}>
                <Text style={styles.tela}>Entrar</Text>
            </TouchableOpacity>

            {erro && (
                    <View>

                    <Text style={styles.tela3}>
                        {erro}
                    </Text >
                    <TouchableOpacity onPress={() => setErro(null)}><Text style={styles.tela4}>X</Text></TouchableOpacity>
                    </View>
                )}
        
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                <Text style={styles.tela1}>Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                <Text style={styles.tela1}>Esquece minha senha</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#A96DFC",
    },
    Image: {
        marginTop :50,
        marginStart:15,
        height:"20%",
        width:"90%",
        resizeMode: "stretch",
    },
    input: {
        fontSize: 25,
        borderWidth: 1,
        marginTop: 90,
        padding: 7.5,
        marginBottom: 10,
        textAlign: "center",
        backgroundColor: "#AFFF8B"
    },
    input1: {
        fontSize: 25,
        borderWidth: 1,
        padding: 7.5,
        marginBottom: 5,
        textAlign: "center",
        backgroundColor: "#AFFF8B"
    },
    tela: {
        fontSize: 25,
        marginTop: 50,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 60,
        textAlign: "center",
        padding: 10,
        backgroundColor: "#5A6169",
    },
    tela1: {
        fontSize: 25,
        marginTop: 10,
        marginBottom: 5,
        borderWidth: 1,
        borderRadius: 60,
        textAlign: "center",
        padding: 10,
        backgroundColor: "#5A6169",
    },
    tela3:{
backgroundColor:"#F5474E",
fontSize: 20,
padding:15,
    },
    tela4:{
fontSize:30,
padding:15,
    },

});
