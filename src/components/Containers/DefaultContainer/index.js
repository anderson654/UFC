import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';


const CustomStatusBar = () => {
    return (
        <View style={styles.customStatusBar}></View>
    )
}

export default function DefaultContainer({ children }) {

    return (
        <View style={styles.container}>
            <CustomStatusBar/>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    customStatusBar: {
        width: "100%",
        height: Constants.statusBarHeight
    }
});