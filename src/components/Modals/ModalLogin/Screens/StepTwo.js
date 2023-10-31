import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../../../contexts/theme";
import DefaultBtn from "../../../Buttons/DefaultBtn";
import { useDefaultConstsContext } from "../../../../contexts/defaultConsts";
import { TextInput } from "react-native-paper";


export default function StepTwo() {
    const { textCardResults, subTextCards } = useThemeContext();
    const { setModalLogin, setStepModalLogin } = useDefaultConstsContext();

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checkPassword, setCheckPassword] = React.useState("");
    const [passwordIsVisible, setPasswordIsVisible] = React.useState(false);


    return (
        <View style={{ flex: 1, alignItems: "center", marginTop: 40, padding: 20 }}>
            <Text style={[textCardResults, { fontSize: 20 }]}>ASSINE{'\n\n'}</Text>
            <View style={{ width: "100%" }}>
                <TextInput
                    style={{ marginBottom: 20, backgroundColor: "rgba(255,255,255,1)" }}
                    label="Nome completo"
                    value={name}
                    onChangeText={text => setName(text)}
                    selectionColor="red"
                    activeUnderlineColor="red"
                    autoCapitalize="words"
                />
                <TextInput
                    style={{ marginBottom: 20, backgroundColor: "rgba(255,255,255,1)" }}
                    label="E-mail"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    selectionColor="red"
                    activeUnderlineColor="red"
                />
                <TextInput
                    style={{ marginBottom: 20, backgroundColor: "rgba(255,255,255,1)" }}
                    label="Criar senha"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    selectionColor="red"
                    activeUnderlineColor="red"
                    secureTextEntry={passwordIsVisible}
                    right={<TextInput.Icon onPress={() => setPasswordIsVisible(!passwordIsVisible)} icon="eye-off" />}
                />
                <TextInput
                    style={{ marginBottom: 20, backgroundColor: "rgba(255,255,255,1)" }}
                    label="Confirme a senha"
                    value={checkPassword}
                    onChangeText={text => setCheckPassword(text)}
                    selectionColor="red"
                    activeUnderlineColor="red"
                    secureTextEntry={passwordIsVisible}
                    right={<TextInput.Icon onPress={() => setPasswordIsVisible(!passwordIsVisible)} icon="eye-off" />}
                />
                <DefaultBtn text="Fazer login" backgroundColor={'red'} color={'#fff'} />
            </View>
        </View>
    )
}