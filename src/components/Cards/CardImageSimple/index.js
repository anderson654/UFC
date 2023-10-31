import React from "react";
import { View, ImageBackground } from "react-native";
import { Dimensions } from 'react-native';

export default function CardImageSimple({ children }) {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={{ width: '100%', height: windowHeight * 0.25 }}>
            <ImageBackground
                source={{ uri: 'https://picsum.photos/800/400' }}
                style={{ width: '100%', height: '100%', borderRadius: 5 }}
                resizeMode="cover"
            >
                <View style={{ flex: 1 }}>
                    {children}
                </View>
            </ImageBackground>
        </View>
    )
}