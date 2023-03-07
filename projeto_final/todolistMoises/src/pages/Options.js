import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/Auth";
import Buttons from "../components/Button";
import ImageA from "../components/Image"

export default function Option(props){
    const { user } = React.useContext(AuthContext)
    const { logout } = React.useContext(AuthContext)
    const navigation = useNavigation()

    const buttonLogout = () => {
        try {
            logout();
            navigation.navigate("LogIn");
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
    <View style={styles.container}>
    <View style={{alignItems: 'center'}}>
    <ImageA style={styles.Image} image={require("../../assets/perfil.png")}/>
    <View>
    <Text style={styles.title}>Ola Joselito!</Text>
    </View>
    <View>
    <Text style={styles.title}>Email: a@a.com</Text>
    </View>
    </View>
    <View>
    <Buttons style={styles.button} onPress={() => buttonLogout()} styleTxt={styles.txtButton} buttonName='Sair' />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',  
        backgroundColor: '#EBC12C',
    },
    Image:{
        width: 300,
        height:300,
        borderRadius:300/2,
        marginBottom: 30,
        marginTop: 20,
        
      },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button:{
        width: '95%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    img:{
        width: 500,
        height: 200,
        marginBottom: 40,
        marginTop: 20,
        borderRadius: 100
      },
})