import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/Home';

const Drawer = createDrawerNavigator();

function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}


const MenuItems = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1,alignItems:"center" }}>
                <View style={{flex:1}}></View>
                <DrawerContentScrollView {...props} style={{width:"80%"}}>
                    <View style={{ flex: 1, backgroundColor: "#fff" }}>
                        <DrawerItemList {...props} />
                    </View>
                </DrawerContentScrollView>
                <View style={{flex:1}}></View>
            </View>
            <View>
                <Text>Hello</Text>
            </View>
        </View>
    )
}

export default function DrawerNavigation() {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerLabelStyle:{fontFamily:"Rubik_900Black"},
            cardStyle: { backgroundColor: "transparent" },
            drawerActiveTintColor: "#fff",
            drawerActiveBackgroundColor:"red"
        }}  initialRouteName="Home" drawerContent={(props) => <MenuItems {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
    );
}