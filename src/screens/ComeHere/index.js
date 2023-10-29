import React from "react";
import { View } from "react-native";
import { Icon } from '@rneui/themed';
import DefaultContainer from "../../components/Containers/DefaultContainer";


export default function ComeHere() {
    const TopMenu = () => {
        return (
            <View style={{ backgroundColor: "transparent", flexDirection: "row" }}>
                <Icon name='menu' type="entypo" color={'#fff'} size={30}/>
            </View>
        )
    }


    return (
        <DefaultContainer defaultPaddingHorizontal={true}>
            <TopMenu />
        </DefaultContainer>

    )
}