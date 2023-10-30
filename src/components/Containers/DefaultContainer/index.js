import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from 'expo-constants';
import { LinearGradient } from "expo-linear-gradient";


const CustomStatusBar = () => {
    return (
        <View style={styles.customStatusBar}></View>
    )
}

export default function DefaultContainer({ children, defaultPaddingHorizontal = false }) {

    return (
        <View style={[styles.container, { paddingHorizontal: defaultPaddingHorizontal ? 20 : 0 }]}>
            <CustomStatusBar />
            <View style={{ position: "relative" }}>
                <View style={{ position: "absolute", height: 20, width: '100%' }}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} locations={[0.1, 1]} style={{ flex: 1 }}></LinearGradient>
                </View>
            </View>
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