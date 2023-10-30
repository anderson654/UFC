import { StyleSheet } from "react-native";

const darkTheme = {
    primaryColor: "#000",
    principalColorText: "#fff",
    colorCards: "#232323"
}
const tipoGraph = {
    customHours: 60,
    h1: 20,
    h2: 18,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,
    lower: 8,
}

export const styles = StyleSheet.create({
    backGroundDefault: {
        backgroundColor: darkTheme.primaryColor
    },
    primaryTextColor: {
        color: darkTheme.principalColorText
    },
    hours: {
        color: darkTheme.principalColorText,
        fontFamily: 'RobotoMono_400Regular',
        fontSize: tipoGraph.customHours,
        letterSpacing: -3
    },
    subTextHours: {
        color: darkTheme.principalColorText,
        fontFamily: 'Rubik_600SemiBold',
        fontSize: tipoGraph.h6,
        textTransform: "uppercase"
    },
    titleTextHours: {
        color: darkTheme.principalColorText,
        fontFamily: 'Rubik_600SemiBold',
        fontSize: tipoGraph.h5,
        textTransform: "uppercase"
    },
    backGoundColorCards: {
        backgroundColor: darkTheme.colorCards
    },
    textCardResults: {
        fontFamily: 'Rubik_600SemiBold',
        fontSize: tipoGraph.h2,
        color: darkTheme.principalColorText
    },
    subTextCards: {
        color: "rgba(255,255,255,.7)",
        fontFamily: 'Rubik_700Bold',
        textTransform: "uppercase",
        fontSize: 10
    },
});