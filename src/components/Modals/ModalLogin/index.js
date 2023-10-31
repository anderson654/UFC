import React from "react";
import DefaultModal from "../DefaultModal";
import { ImageBackground, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TabView } from "@rneui/base";
import { useDefaultConstsContext } from "../../../contexts/defaultConsts";
import StepSelectTypeLogin from "./Screens/StepSelectTypeLogin";
import StepRegister from "./Screens/StepRegister";
import StepLogin from "./Screens/StepLogin";
import StepResetPassword from "./Screens/StepResetPassword";


export default function ModalLogin() {

    const { modalLogin, stepModalLogin } = useDefaultConstsContext();

    return (
        <DefaultModal status={modalLogin}>
            <ImageBackground
                source={require('../../../../assets/images/ufclogin.jpg')}
                style={{ width: '100%', height: '100%' }}
                resizeMode="repeat"
            >
                <LinearGradient colors={['transparent', 'rgba(0,0,0,1)']} start={{ x: 0.5, y: -1 }} end={{ x: 0.5, y: 1 }} locations={[0, 1]} style={{ flex: 1 }}>
                    {/* //colocar aqui */}
                    <TabView value={stepModalLogin} animationType="spring">
                        <TabView.Item style={{ flex: 1 }}>
                            <StepSelectTypeLogin />
                        </TabView.Item>
                        <TabView.Item style={{ flex: 1 }}>
                            <StepLogin />
                        </TabView.Item>
                        <TabView.Item style={{ flex: 1 }}>
                            <StepRegister />
                        </TabView.Item>
                        <TabView.Item style={{ flex: 1 }}>
                            <StepResetPassword />
                        </TabView.Item>
                    </TabView>
                </LinearGradient>
            </ImageBackground>
        </DefaultModal>
    )
}