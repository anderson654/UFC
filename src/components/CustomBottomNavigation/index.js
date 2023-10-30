import * as React from 'react';
import { BottomNavigation, Text, TouchableRipple } from 'react-native-paper';
import { Icon } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';

//screeans
import ComeHere from '../../screens/ComeHere';
import Results from '../../screens/Results';
import News from '../../screens/News';
import FightPass from '../../screens/FightPass';
import Athletes from '../../screens/Athletes';

const RouteMap = ({ setActivityScreean }) => {
    const [selectIndex, setSelectIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'VEM AÍ', title: 'Favorites', focusedIcon: 'calendar', typeIcon: 'ionicon', setActivityScreean: () => setActivityScreean(ComeHere) },
        { key: 'RESULTADOS', title: 'Albums', focusedIcon: 'clipboard', typeIcon: 'ionicon', setActivityScreean: () => setActivityScreean(Results) },
        { key: 'FIGHT PASS', title: 'Recents', focusedIcon: 'tv', typeIcon: 'ionicon', setActivityScreean: () => setActivityScreean(FightPass) },
        { key: 'NOTÍCIAS', title: 'Notifications', focusedIcon: 'newspaper', typeIcon: 'ionicon', setActivityScreean: () => setActivityScreean(News) },
        { key: 'ATLETAS', title: 'Notifications', focusedIcon: 'boxing-glove', typeIcon: 'material-community', setActivityScreean: () => setActivityScreean(Athletes) },
    ]);
    return routes.map((obj, index) => (
        <LabelMenu key={index} index={index} selectIndex={selectIndex} setBtnSelect={setSelectIndex} icon={obj?.focusedIcon} typeIcon={obj?.typeIcon} title={obj?.key} setActivityScreean={obj.setActivityScreean} />
    ));
}

const LabelMenu = React.memo(({ index, selectIndex, setBtnSelect, icon, typeIcon, title, setActivityScreean }) => {

    return (
        <TouchableRipple rippleColor="rgba(255, 255, 255, .1)" onPress={() => { setBtnSelect(index), setActivityScreean() }} borderless={true} style={{ paddingVertical: 15, overflow: "visible" }}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Icon name={icon} type={typeIcon} color={selectIndex === index ? styles.enableBtn.color : styles.disableBtn.color} />
                <Text style={{ color: selectIndex === index ? styles.enableBtn.color : styles.disableBtn.color, fontFamily: 'Rubik_500Medium', fontSize: 10, marginTop: 3 }}>{title || ''}</Text>
            </View>
        </TouchableRipple>
    )
});

const CustomBottomNavigation = () => {

    const [screen, setActivityScreean] = React.useState(ComeHere);

    return (
        <View style={{ flex: 1, flexDirection: "column", backgroundColor: 'black'}}>
            <View style={{ flex: 1 }}>
                {/* {screen} */}
                <ComeHere />
            </View>
            <View style={{ backgroundColor: "#fff", flexDirection: "row", backgroundColor: "#0a0a0a", justifyContent: "space-around",overflow:"hidden" }}>
                <RouteMap setActivityScreean={setActivityScreean} />
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