import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/base";
import { useDefaultConstsContext } from "../../../contexts/defaultConsts";


const TopMenu = () => {
    const { setLayoutTopSidebar } = useDefaultConstsContext();
    return (
        <View style={{ position: "absolute", width: '100%' }} onLayout={(e) => setLayoutTopSidebar(e.nativeEvent.layout)}>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} locations={[0.6, 1]} style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
                <Icon name='menu' type="entypo" color={'#fff'} size={30} />
            </LinearGradient>
        </View>
    )
}

export default TopMenu;