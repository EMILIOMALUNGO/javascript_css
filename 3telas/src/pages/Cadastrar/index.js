
import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from "react-native";


import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/Auth";


export default function Cadastra() {
    const navigation = useNavigation()
    const {Cadastra } = React.useContext(AuthContext);
    const [nome, setNome]= React.useState();
    const [email, setEmail] = React.useState();
    const [senha, setSenha] =  React.useState()

    
const [erro, setErro] = React.useState(null);

const loginHandle = () => {
    try {
        console.log(nome,email,senha);
        // logar
        login(nome,email, senha);
        // redirecionar para Dashboard
        navigation.navigate("Dashiboard")
    }catch (err) {
        setErro(err.message);
    }
   
}

    return (
        <SafeAreaView style={styles.container} >
            <Image style={styles.Image} source={require("../../../assets/andro1.jpg")} />
            <View>
                <TextInput placeholder="Nome" style={styles.input}  value={nome}  onChangeText={setNome}/>
                <TextInput placeholder="Email" style={styles.input}  value={email}  onChangeText={setEmail}/>
                <TextInput placeholder="Senha" style={styles.input}  value={senha}  onChangeText={setSenha}/>
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