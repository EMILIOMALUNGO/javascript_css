 
 import React from 'react';



 
export const AuthContext = React.createContext();


export const AuthProvider=({children}) =>{

    const [user,  setUser]= React.useState(null);

    const login =(email, password) => {
        if (email == "emilio.malungo@hotmail.com" && password =="123") {
            setUser({
                email:"emilio.malungo@hotmail.com",
                name:"senha "
            })
        }
        else {
            setUser (null);
            throw new Error("Usuario ou senha invalida");
        }
    } 
    const logout = () => {
        setUser (null);
    }
   
    const authorized = user !=null;
     return(
        <AuthContext.Provider value={{ user,authorized,login,logout}}>
            {children}
        </AuthContext.Provider>
     )

    }