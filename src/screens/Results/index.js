import React from "react";
import { View } from "react-native";
import TopMenu from "../../components/Menus/TopMenu";
import { ScrollView } from "react-native-gesture-handler";
import DefaultContainer from "../../components/Containers/DefaultContainer";
import CardResults from "../../components/Cards/CardResults";
import { useDefaultConstsContext } from "../../contexts/defaultConsts";

export default function Results() {
    const { layoutTopSidebar } = useDefaultConstsContext();
    
    return (
        <DefaultContainer defaultPaddingHorizontal={true}>
            <View style={{ flex: 1, position: "relative" }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ paddingTop: layoutTopSidebar.height }}>
                        <CardResults />
                    </View>
                </ScrollView>
                <TopMenu />
            </View>
        </DefaultContainer>
    )
}