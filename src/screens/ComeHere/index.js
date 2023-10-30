import React from "react";
import { View } from "react-native";
import { Icon } from '@rneui/themed';
import DefaultContainer from "../../components/Containers/DefaultContainer";
import CardImage from "../../components/Cards/CardImage";
import { ScrollView } from "react-native-gesture-handler";
// import { LinearGradient } from "expo-linear-gradient";
import CardDescribeVideosOne from "../../components/Cards/CardDescribeVideosOne";
// import { useDefaultConstsContext } from "../../contexts/defaultConsts";
import CardNextEvent from "../../components/Cards/CardNextEvent";
import TopMenu from "../../components/Menus/TopMenu";


export default function ComeHere() {

    return (
        <DefaultContainer defaultPaddingHorizontal={true}>
            <View style={{ flex: 1, position: "relative" }}>
                <ScrollView style={{ flex: 1 }}>
                    <CardNextEvent />
                    <CardDescribeVideosOne />
                    <CardDescribeVideosOne />
                </ScrollView>
                <TopMenu />
            </View>
        </DefaultContainer>
    )
}