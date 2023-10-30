import React from "react";
import { Text } from "react-native";

export function Title({ children }) {
    return (
        <Text style={{ textTransform: 'uppercase', fontFamily: 'Rubik_700Bold', color: "#fff",fontSize:18 }}>{children}</Text>
    )
}
export function SubTitleData({ children }) {
    return (
        <Text style={{ fontFamily: 'Rubik_600SemiBold', color: "#fff",fontSize:12 }}>{children}</Text>
    )
}