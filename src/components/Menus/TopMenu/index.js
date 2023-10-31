import React from "react";
import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/base";
import { useDefaultConstsContext } from "../../../contexts/defaultConsts";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


const TopMenu = () => {
    const { setLayoutTopSidebar } = useDefaultConstsContext();
    const navigation = useNavigation();

    return (
        <View style={{ position: "absolute", width: '100%' }} onLayout={(e) => setLayoutTopSidebar(e.nativeEvent.layout)}>
            <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} locations={[0.6, 1]} style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <Icon name='menu' type="entypo" color={'#fff'} size={30} />
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default TopMenu;