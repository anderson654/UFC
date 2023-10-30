import React from "react";
import CardImage from "../CardImage";
import { Text, View } from "react-native";
import { useDefaultConstsContext } from "../../../contexts/defaultConsts";
import { Title, SubTitleData } from "../../Tipograph/Title";
import CounterTime from "../../CounterTime";

export default function CardNextEvent() {
    const { layoutTopSidebar } = useDefaultConstsContext();

    if (!layoutTopSidebar) {
        return null;
    }

    return (
        <CardImage>
            <View style={{ flex: 1, padding: 10, paddingTop: layoutTopSidebar.height }}>
                <View style={{ marginBottom: 5 }}>
                    <Title>campbell vs west point: cfc match day</Title>
                </View>
                <SubTitleData>qua, 1 de nov de 2023 ás 18:00</SubTitleData>
                <CounterTime/>
            </View>
        </CardImage>
    )
}