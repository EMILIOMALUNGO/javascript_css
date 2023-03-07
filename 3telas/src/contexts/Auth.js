
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';




export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

  
    const [user, setUser] = React.useState(null);

    const login = async (email, password) => {
        if (email == "emilio.malungo@hotmail.com" && password == "123") {
            const v = {
                email: "emilio.malungo@hotmail.com",
                name: "senha"
            };

            try {
                await AsyncStorage.setItem('user', JSON.stringify(v));
            }
            catch (err) {
                console.log(err);
            }
            setUser(v);
        }

         else {
            setUser(null);
            throw new Error("Usuário ou senha inválidos!")
        }
    }

    const logout = async () => {
        setUser(null);
        try {
            await AsyncStorage.setItem('user', null);
        }
        catch (err) {
            console.log(err);
        }
    }
    const carregar = async () => {
        try {
            const v = await AsyncStorage.getItem('user');
            console.log("v",v)
            setUser(v != null ? JSON.parse(v) : null);
        }
        catch (err) {
            console.log("ERRO", err);
            setUser (null);
            console.log(err);
        }
    }

    useEffect(() => {
        carregar();
        console.log("MONTAR");
        return () => {

        }
    }, []);

    console.log("USER", user);
    const authorized = user != null;

    return (
        <AuthContext.Provider value={{ user, authorized, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}