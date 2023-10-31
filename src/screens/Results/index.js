import React from "react";
import { View } from "react-native";
import TopMenu from "../../components/Menus/TopMenu";
import { ScrollView } from "react-native-gesture-handler";
import DefaultContainer from "../../components/Containers/DefaultContainer";
import CardResults from "../../components/Cards/CardResults";
import { useDefaultConstsContext } from "../../contexts/defaultConsts";
import CardNews from "../../components/Cards/CardNews";
export default function Results() {
    const { layoutTopSidebar } = useDefaultConstsContext();
    const paddingHeigth = layoutTopSidebar?.height + 5;

    return (
        <DefaultContainer defaultPaddingHorizontal={true}>
            <View style={{ flex: 1, position: "relative" }}>
                <ScrollView style={{ flex: 1 }}>
                    {!!paddingHeigth &&
                        <View style={{ paddingTop: paddingHeigth }}>
                            <CardResults />
                        </View>
                    }
                </ScrollView>
                <TopMenu />
            </View>
        </DefaultContainer>
    )
}