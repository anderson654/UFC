import React from "react"
import { View, Text } from "react-native"
import { useThemeContext } from "../../../contexts/theme";
import { TouchableRipple } from 'react-native-paper';

export default function DefaultBtn({ style, backgroundColor, color, text = '', onPress = () => { } }) {

    const { textCardResults } = useThemeContext();

    return (
        <TouchableRipple onPress={onPress} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: backgroundColor || "#fff", borderRadius: 3, marginBottom: 20, ...style }}>
            <Text style={[textCardResults, { textTransform: "uppercase", padding: 14, fontSize: 16, color: color || '#000' }]}>{text}</Text>
        </TouchableRipple>
    )
}