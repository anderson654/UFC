import * as React from 'react';
import { BottomNavigation, Text, TouchableRipple } from 'react-native-paper';
import { Icon } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

const RouteMap = () => {
    const [selectIndex, setSelectIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline' },
        { key: 'albums', title: 'Albums', focusedIcon: 'album' },
        { key: 'recents', title: 'Recents', focusedIcon: 'history' },
        { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
    ]);
    return routes.map((obj, index) => (
        <LabelMenu key={index} index={index} selectIndex={selectIndex} setBtnSelect={setSelectIndex} />
    ));
}

const LabelMenu = React.memo(({ index, selectIndex, setBtnSelect }) => {

    return (
        <TouchableRipple rippleColor="rgba(255, 255, 255, .1)" onPress={() => setBtnSelect(index)} borderless={true} style={{ paddingVertical: 15, overflow: "visible" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name='rowing' color={selectIndex === index ? styles.enableBtn.color : styles.disableBtn.color} />
                <Text style={{ color: selectIndex === index ? styles.enableBtn.color : styles.disableBtn.color }}>Notifications</Text>
            </View>
        </TouchableRipple>
    )
});

const CustomBottomNavigation = () => {
    return (
        <View style={{ flex: 1, flexDirection: "column-reverse" }}>
            <View style={{ backgroundColor: "#fff", flexDirection: "row", backgroundColor: "black", justifyContent: "space-around" }}>
                <RouteMap />
            </View>
        </View>
    );
};

export default CustomBottomNavigation;

const styles = StyleSheet.create({
    enableBtn: {
        color: "red"
    },
    disableBtn: {
        color: "#fff"
    }
});