import React from "react";
import { View } from "react-native";
import IframeVimeo from "../../components/Videos/IframeVimeo";
export default function News() {
    return (
        <View style={{ flex: 1, backgroundColor: "#000" }}>

            <IframeVimeo />

        </View>
    )
}