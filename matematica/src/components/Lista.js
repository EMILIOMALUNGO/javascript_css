import { StyleSheet, StatusBar, Text, View, Button, ShadowPropTypesIOS, TextInput } from 'react-native';

function Lista1(props) {

    return (

        <Text style={styles.text}>{props.item}</Text>
    )
}

export default function Lista(props) {
    return (
        <View style={styles.container}>
            {props.items.map((item) => <Lista1 item={item} />)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "flex-start"
    },
    text: {
        fontSize: 16,
        padding: 20,
        borderWidth: 1,
        margin: 10
    }
});
