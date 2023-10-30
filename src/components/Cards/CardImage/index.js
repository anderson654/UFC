import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CardImage = ({ children }) => {

    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://picsum.photos/800/400' }}
                style={styles.image}
            >
                <LinearGradient colors={['transparent', 'rgba(0,0,0,.2)', 'rgba(0,0,0,1)']} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0.5 }} locations={[0, 0.8, 1]} style={styles.gradient}>
                    <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 1, y: 0.5 }} end={{ x: 0, y: 0.5 }} locations={[0.6, 1]} style={styles.gradient}>
                        <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 0.5, y: 1 }} end={{ x: 0.5, y: 0 }} locations={[0.6, 1]} style={styles.gradient}>
                            <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} locations={[0.6, 1]} style={styles.gradient}>
                                {children}
                            </LinearGradient>
                        </LinearGradient>
                    </LinearGradient>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        height: windowHeight * 0.3,
        marginBottom: 30
    },
    gradient: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default CardImage;
