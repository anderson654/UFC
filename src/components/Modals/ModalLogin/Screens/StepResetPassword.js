import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../../../contexts/theme";
import DefaultBtn from "../../../Buttons/DefaultBtn";
import { useDefaultConstsContext } from "../../../../contexts/defaultConsts";
import { TextInput } from "react-native-paper";
import { Icon } from "@rneui/base";
import CancelModalLogin from "../../../Buttons/CancelModalLogin";


export default function StepResetPassword() {
    const { textCardResults } = useThemeContext();
    const { setStepModalLogin, screenPrevius } = useDefaultConstsContext();

    const [email, setEmail] = React.useState("");

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", marginTop: 10, padding: 20, width: "100%" }}>
                <TouchableOpacity onPress={() => setStepModalLogin(screenPrevius)} activeOpacity={0.8}>
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
                    <DefaultBtn text="enviar" backgroundColor={'red'} color={'#fff'} />
                    <View style={{ alignItems: "center" }}>
                        <CancelModalLogin />
                    </View>
                </View>
            </View>
        </View>
    )
}