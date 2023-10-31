import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../../../contexts/theme";
import DefaultBtn from "../../../Buttons/DefaultBtn";
import { useDefaultConstsContext } from "../../../../contexts/defaultConsts";
import CancelModalLogin from "../../../Buttons/CancelModalLogin";


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

export default function StepSelectTypeLogin() {
    const { textCardResults, subTextCards } = useThemeContext();
    const { setStepModalLogin } = useDefaultConstsContext();

    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 40, padding: 20 }}>
            <Text style={[textCardResults, { fontSize: 20 }]}>Bem-vindo{'\n\n'}</Text>
            <Text style={[subTextCards, { fontSize: 12, color: 'rgba(255,255,255,.8)', marginBottom: 40 }]}>Escolha como fazer login</Text>
            <View style={{ width: '100%' }}>
                <DefaultBtn text="Continue com E-mail" onPress={() => setStepModalLogin(1)} textTransform="none" />
                <DefaultBtn text="Login sky" textTransform="none" />
                <DefaultBtn text="Login HBO" style={{ marginBottom: 0 }} textTransform="none" />
                <TitleNewAccount />
                <DefaultBtn backgroundColor="red" color={"#fff"} text="assine" onPress={() => setStepModalLogin(2)} />
                <View style={{ alignItems: "center" }}>
                    <CancelModalLogin />
                </View>
            </View>
        </View>
    )
}