import React from "react";
import { View } from "react-native";
import DefaultContainer from "../../components/Containers/DefaultContainer";
import { ScrollView } from "react-native-gesture-handler";
import CardDescribeVideosOne from "../../components/Cards/CardDescribeVideosOne";
import CardNextEvent from "../../components/Cards/CardNextEvent";
import TopMenu from "../../components/Menus/TopMenu";


export default function ComeHere() {

    return (
        <DefaultContainer defaultPaddingHorizontal={true}>
            <View style={{ flex: 1, position: "relative" }}>
                <ScrollView style={{ flex: 1 }}>
                    <CardNextEvent />
                    <CardDescribeVideosOne />
                    {/* <CardDescribeVideosOne /> */}
                </ScrollView>
                <TopMenu />
            </View>
        </DefaultContainer>
    )
}