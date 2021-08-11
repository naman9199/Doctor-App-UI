import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tabs from "./src/Navigation/Tabs";
import { useFonts } from "expo-font";
import { ActivityIndicatorBase } from "react-native";
import AppLoading from "expo-app-loading";
export default function App() {
    let [fontsLoaded] = useFonts({
        "Saira-Regular": require("./assets/fonts/Saira-Regular.ttf"),
        "Saira-Bold": require("./assets/fonts/Saira-Bold.ttf"),
        "Saira-SemiBold": require("./assets/fonts/Saira-SemiBold.ttf"),
    });

    return !fontsLoaded ? (
        <View
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
            }}
        >
            <AppLoading />
        </View>
    ) : (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fbfbfd",
        alignItems: "center",
        justifyContent: "center",
    },
});
