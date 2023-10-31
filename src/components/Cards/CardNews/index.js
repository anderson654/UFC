import React from "react";
import CardImageSimple from "../CardImageSimple";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useThemeContext } from "../../../contexts/theme";

export default function CardNews() {

    const { subTextCards, textCardResults } = useThemeContext();

    return (
        <CardImageSimple>
            <View style={{ flex: 1, flexDirection: "column-reverse" }}>
                <LinearGradient style={{ padding: 10, paddingVertical: 15 }} colors={['transparent', 'rgba(0,0,0,.2)', 'rgba(0,0,0,1)']} start={{ x: 1, y: 0.5 }} end={{ x: 0, y: 0.5 }} locations={[0, 0, 1]}>
                    <Text style={[textCardResults, { fontSize: 16,marginBottom:5 }]}>Title interation card example</Text>
                    <Text style={[subTextCards, { fontSize: 12 }]}>10/11/1994</Text>
                </LinearGradient>
            </View>
        </CardImageSimple>
    );
}