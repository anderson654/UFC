import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../../contexts/theme";


export default function CardResults() {

    const { backGoundColorCards, textCardResults } = useThemeContext();

    return (
        <TouchableOpacity activeOpacity={0.7} style={[backGoundColorCards, { padding: 10, paddingVertical: 15 }]}>
            <Text style={[textCardResults, { marginBottom: 15 }]}>UFC Fight Night</Text>
            <Text style={{ color: "rgba(255,255,255,.7)", fontFamily: 'Rubik_700Bold', textTransform: "uppercase", fontSize: 12 }}>nc state vs presbterian</Text>
        </TouchableOpacity>
    )
}