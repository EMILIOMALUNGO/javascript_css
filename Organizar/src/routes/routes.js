import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Calendario from "../pages/Calendario";
import Data from "../pages/Data/inde";
import Dia from "../pages/Dias";



const Stack = createNativeStackNavigator()

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Calendario"
                component={Calendario} />
            <Stack.Screen
                name="Data"
                component={Data} />
            <Stack.Screen
                name="Dia"
                component={Dia} />

        </Stack.Navigator>

    )

}