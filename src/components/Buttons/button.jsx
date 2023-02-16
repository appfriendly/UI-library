import * as React from 'react'
import { Text, StyleSheet, TouchableHighlight } from "react-native";

export const FButton = (props) => {
    const [isPress, setIsPress] = React.useState(false);

    const touchProps = { // Функция нажатия на кнопку
        activeOpacity: 1,
        underlayColor: '#323232',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
        style: isPress ? styles.btnPress : styles.btnNormal, // <-- but you can still apply other style changes
        onHideUnderlay: () => setIsPress(false),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => {
            console.log('click');
        },
    };
    return (
        <TouchableHighlight {...touchProps}>
            <Text style={styles.title}>{props.title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#fff',
        fontSize: 28,
    },
    btnNormal: {
        flex: '0',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#252525',
        paddingHorizontal: 'auto',
        paddingVertical: 14,
        borderRadius: '20',
        marginBottom: 20,
      },
    btnPress: {
        flex: '0',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#252525',
        paddingHorizontal: 'auto',
        paddingVertical: 14,
        borderRadius: '20',
        marginBottom: 20
    }
});



