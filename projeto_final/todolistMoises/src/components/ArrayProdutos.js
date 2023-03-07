import React, {useContext} from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, ScrollView} from "react-native";

import { ListProductContext } from "../../context/ListProductCreate";
import ProdutoItem from "./ProdutoItem";

export default function ListaProdutos(props){


    const  {  productListFilter }  = React.useContext(ListProductContext)

    return(
        <ScrollView style={styles.container}>
             { productListFilter.map((p) => <ProdutoItem title={p.titulo} data={p.data} estoque={p.precisanssa} />)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
container:{
}
})