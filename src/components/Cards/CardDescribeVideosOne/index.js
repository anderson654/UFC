import React from "react";
import { View, Image, Text } from "react-native";
import { useThemeContext } from "../../../contexts/theme";

export default function CardDescribeVideosOne() {

    const { subTextCards } = useThemeContext();

    return (
        <View style={{ flexDirection: "row", flex: 1, marginBottom: 30 }}>
            <View style={{ flex: 0.4, height: 100 }}>
                <Image source={{ uri: 'https://picsum.photos/800/400' }} style={{ width: "100%", height: "100%", resizeMode: "cover", borderRadius: 5 }} />
            </View>
            <View style={{ flex: 0.6, padding: 10 }}>
                <Text style={{ color: "#fff", fontFamily: 'Rubik_700Bold', textTransform: "uppercase", paddingBottom: 5 }}>nc state vs presbterian</Text>
                <Text style={subTextCards}>nc state vs presbterian</Text>
            </View>
        </View>
    )
}