import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../../../contexts/theme";
import DefaultBtn from "../../../Buttons/DefaultBtn";
import { useDefaultConstsContext } from "../../../../contexts/defaultConsts";
import { TextInput } from "react-native-paper";
import { Icon } from "@rneui/base";
import CancelModalLogin from "../../../Buttons/CancelModalLogin";


export default function StepLogin() {
    const { textCardResults, subTextCards } = useThemeContext();
    const { setStepModalLogin, setScreenPrevius } = useDefaultConstsContext();

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);


    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", marginTop: 10, padding: 20, width: "100%" }}>
                <TouchableOpacity onPress={() => setStepModalLogin(0)} activeOpacity={0.8}>
                    <Icon name='arrow-back' type="ionicon" color={'#fff'} size={30} />
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
                <Text style={[textCardResults, { fontSize: 20 }]}>Acesse a conta{'\n\n'}</Text>
                <View style={{ width: "100%" }}>
                    <TextInput
                        style={{ marginBottom: 20, backgroundColor: "rgba(255,255,255,1)" }}
                        label="E-mail"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        activeUnderlineColor="red"
                    />
                    <TextInput
                        style={{ marginBottom: 20, backgroundColor: "rgba(255,255,255,1)" }}
                        label="Senha"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        activeUnderlineColor="red"
                        secureTextEntry={passwordIsVisible}
                        right={<TextInput.Icon onPress={() => setPasswordIsVisible(!passwordIsVisible)} icon="eye-off" />}
                    />
                    <DefaultBtn text="Fazer login" backgroundColor={'red'} color={'#fff'} />
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity onPress={() => { setStepModalLogin(3), setScreenPrevius(1) }}>
                            <Text style={[subTextCards, { fontSize: 12, color: 'rgba(255,255,255,.8)', margin: 20, marginBottom: 10, textTransform: "none" }]}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                        <Text style={[subTextCards, { fontSize: 12, color: 'rgba(255,255,255,.8)', margin: 20, marginBottom: 10, textTransform: "none" }]}>Ainda não tem uma conta? ASSINE</Text>
                        <CancelModalLogin />
                    </View>
                </View>
            </View>
        </View>
    )
}