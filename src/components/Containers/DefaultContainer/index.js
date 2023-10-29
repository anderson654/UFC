import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';


const CustomStatusBar = () => {
    return (
        <View style={styles.customStatusBar}></View>
    )
}

export default function DefaultContainer({ children, defaultPaddingHorizontal = false }) {

    return (
        <View style={[styles.container, { paddingHorizontal: defaultPaddingHorizontal ? 20 : 0 }]}>
            <CustomStatusBar />
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