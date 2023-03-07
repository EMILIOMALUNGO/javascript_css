import React from "react";
import { SafeAreaView, StyleSheet, Text, Image, Button, TouchableOpacity, View, TextInput } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../contexts/Auth";



export default function Login(props) {
    const navigation = useNavigation()
    const { login } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState("emilio.malungo@hotmail.com");
    const [senha, setSenha] = React.useState();

    const [erro, setErro] = React.useState(null);

    const loginHandle = async () => {
        try {
            console.log(email, senha);
            // logar
            await login(email, senha);
            // redirecionar para Dashboard
            navigation.navigate("Dashiboard")
        } catch (err) {          
            setErro(err.message);
        }

    }


    return (
        <SafeAreaView style={styles.container}>

            <Image style={styles.Image} source={require("../../../assets/andro1.jpg")} />
            <View>
                <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
                <TextInput placeholder="Senha" style={styles.input} value={senha} onChangeText={setSenha} />
            </View>
            <TouchableOpacity onPress={loginHandle}>
                <Text style={styles.tela1}>Entrar</Text>
            </TouchableOpacity>

            {erro && (
                <View>

                    <Text>
                        {erro}
                    </Text>
                    <TouchableOpacity onPress={() => setErro(null)}><Text>X</Text></TouchableOpacity>
                </View>
            )}

            <TouchableOpacity onPress={() => navigation.navigate("Cadastrar")}>
                <Text style={styles.tela2}>Cadastra usuario</Text>
            </TouchableOpacity>

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
        marginBottom: 5,
        padding: 20,
        borderWidth: 1,
        borderRadius: 40,
        backgroundColor: "#9DF545",
        textAlign: "center"
    },
    tela2: {

        fontSize: 20,
        marginTop: 30,
        marginBottom: 5,
        padding: 20,
        borderWidth: 1,
        borderRadius: 40,
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
        height: 100,
        padding: 20,
        resizeMode: 'contain',
    },
})