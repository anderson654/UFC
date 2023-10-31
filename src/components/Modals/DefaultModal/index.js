import React from "react";
import { Modal, View, TouchableOpacity } from "react-native";
import { useThemeContext } from "../../../contexts/theme";
import { Icon } from "@rneui/base";

export default function DefaultModal({ status = false, children, arrowBack = false }) {

    const { backGroundDefault } = useThemeContext();

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={status}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                // setModalVisible(!modalVisible);
            }}>
            <View style={[backGroundDefault, { flex: 1 }]}>
                {!!arrowBack &&
                    <View style={{ flexDirection: "row", marginTop: 10, padding: 20 }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Icon name='arrow-back' type="ionicon" color={'#fff'} size={30} />
                        </TouchableOpacity>
                    </View>
                }
                {children}
            </View>
        </Modal>
    )
}