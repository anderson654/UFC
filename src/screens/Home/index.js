import React from "react";
import { View } from "react-native";
import CustomBottomNavigation from "../../components/CustomBottomNavigation";

export default function Home() {
    return (
        <View style={{ flex: 1 }}>
            <CustomBottomNavigation />
        </View>
    );
}