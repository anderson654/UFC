import React from "react";
import { View, Image, Text } from "react-native";

export default function CardDescribeVideosOne() {
    return (
        <View style={{ flexDirection: "row", flex: 1, marginBottom: 30 }}>
            <View style={{ flex: 0.4, height: 100 }}>
                <Image source={{ uri: 'https://picsum.photos/800/400' }} style={{ width: "100%", height: "100%", resizeMode: "cover", borderRadius: 10 }} />
            </View>
            <View style={{ flex: 0.6, padding: 10 }}>
                <Text style={{ color: "#fff", fontFamily: 'Rubik_700Bold', textTransform: "uppercase", paddingBottom: 5 }}>nc state vs presbterian</Text>
                <Text style={{ color: "rgba(255,255,255,.7)", fontFamily: 'Rubik_700Bold', textTransform: "uppercase", fontSize: 10 }}>nc state vs presbterian</Text>
            </View>
        </View>
    )
}