import React from "react";
import { View, Text } from "react-native";
import { useThemeContext } from "../../../contexts/theme";


export default function CardResults() {

    const { backGoundColorCards, textCardResults } = useThemeContext();

    return (
        <View style={{ backgroundColor: backGoundColorCards }}>
            <Text style={textCardResults}>Hello</Text>
        </View>
    )
}