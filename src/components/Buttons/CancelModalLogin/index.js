import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useThemeContext } from "../../../contexts/theme";
import { useDefaultConstsContext } from "../../../contexts/defaultConsts";



export default function CancelModalLogin() {

    const { subTextCards } = useThemeContext();
    const { setModalLogin } = useDefaultConstsContext();

    return (
        <TouchableOpacity onPress={() => setModalLogin(false)} style={{ padding: 20 }}>
            <Text style={[subTextCards, { fontSize: 12, color: 'rgba(255,255,255,.8)', margin: 20, textTransform: "none" }]}>Cancelar</Text>
        </TouchableOpacity>
    )
}