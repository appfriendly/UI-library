import * as React from 'react'
import { View, Text, StyleSheet } from "react-native";

export const FButton = (props) => {
    return (
        <View style={styles.background}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: '0',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#161616',
        paddingHorizontal: 'auto',
        paddingVertical: 14,
        borderRadius: '20',
        marginBottom: 20
    },
    title: {
        color: '#fff',
        fontSize: 28,
    },
  });



