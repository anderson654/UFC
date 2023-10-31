import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../../../contexts/theme";
import DefaultBtn from "../../../Buttons/DefaultBtn";
import { useDefaultConstsContext } from "../../../../contexts/defaultConsts";


const TitleNewAccount = () => {
    const { subTextCards } = useThemeContext();
    return (
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <View style={{ flex: 1, height: 3, backgroundColor: "rgba(255,255,255,.8)", borderRadius: 1 }}></View>
            <Text style={[subTextCards, { fontSize: 12, color: 'rgba(255,255,255,.8)', margin: 20 }]}>Ou assine agora</Text>
            <View style={{ flex: 1, height: 3, backgroundColor: "rgba(255,255,255,.8)", borderRadius: 1 }}></View>
        </View>
    )
}

export default function StepOne() {
    const { textCardResults, subTextCards } = useThemeContext();
    const { setModalLogin, setStepModalLogin } = useDefaultConstsContext();

    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 40, padding: 20 }}>
            <Text style={[textCardResults, { fontSize: 20 }]}>Bem-vindo{'\n\n'}</Text>
            <Text style={[subTextCards, { fontSize: 12, color: 'rgba(255,255,255,.8)', marginBottom: 40 }]}>Escolha como fazer login</Text>
            <View style={{ width: '100%' }}>
                <DefaultBtn text="continue com login" onPress={() => setStepModalLogin(2)} />
                <DefaultBtn text="login sky" />
                <DefaultBtn text="login HBO" style={{ marginBottom: 0 }} />
                <TitleNewAccount />
                <DefaultBtn backgroundColor="red" color={"#fff"} text="assine" onPress={() => setStepModalLogin(1)} />
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity onPress={() => setModalLogin(false)} style={{ padding: 20 }}>
                        <Text style={[textCardResults, { fontSize: 14 }]}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}