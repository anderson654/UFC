import React from "react";
import { View } from "react-native";
import { Icon } from '@rneui/themed';
import DefaultContainer from "../../components/Containers/DefaultContainer";
import CardImage from "../../components/Cards/CardImage";
import { ScrollView } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import CardDescribeVideosOne from "../../components/Cards/CardDescribeVideosOne";


export default function ComeHere() {
    const TopMenu = () => {
        return (
            <View style={{ position: "absolute", width: '100%' }}>
                <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} locations={[0.6, 1]} style={{ flex: 1, flexDirection: "row", paddingTop: 10 }}>
                    <Icon name='menu' type="entypo" color={'#fff'} size={30} />
                </LinearGradient>
            </View>
        )
    }


    return (
        <DefaultContainer defaultPaddingHorizontal={true}>
            <View style={{ flex: 1, position: "relative" }}>
                <ScrollView style={{ flex: 1 }}>
                    <CardImage />
                    <CardDescribeVideosOne />
                    <CardDescribeVideosOne />
                </ScrollView>
                <TopMenu />
            </View>
        </DefaultContainer>

    )
}