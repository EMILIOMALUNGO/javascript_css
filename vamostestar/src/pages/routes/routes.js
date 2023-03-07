import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import Sala from "../Sala";
import Turma from "../Turma";
import Alunos from "../Alunos"



const Drawer = createDrawerNavigator();

export default function Routes() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Sala"
                component={Sala} />
            <Drawer.Screen
                name="Turma"
                component={Turma} />
            <Drawer.Screen
                name="Alunos"
                component={Alunos} />

        </Drawer.Navigator>

    )

}