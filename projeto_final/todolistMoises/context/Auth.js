import React, {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = async (email, password) => {
        if(email == "a@a.com" && password =="123"){
            const user = {
                email: "a@a.com",
                name: "joselito"
            }
            setUser(user)
            try{
                await AsyncStorage.setItem('user', JSON.stringify(user))
            }catch(err){
                setUser(null)
                console.log(err)
            }
        }
        else {
            setUser(null);
        }
    }

    const logout = async () => {
        setUser(null)
        try{
            await AsyncStorage.setItem('user', null)
        }catch(err){
            setUser(null)
            console.log(err)
        }
    }

    const read = async () => {
        try{
         const r = await AsyncStorage.getItem('user')
            setUser( r != null ? JSON.parse(r) : null)
        }catch(err){
            setUser(null)
            console.log(err)
        }
    }

    const authorized = user  != null
    
    useEffect(() => {
        read()
    }, [])

    return (
        <AuthContext.Provider value={{user, authorized, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}