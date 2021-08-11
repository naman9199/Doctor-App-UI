import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import Chat from "../Screens/Chat";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

export default Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarLabel: navigation.isFocused() ? route.name : "",
                    tabBarLabelPosition: "beside-icon",
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        height: 60,
                        elevation: 0,
                        // borderTopWidth: 0,
                    },
                    tabBarItemStyle: { backgroundColor: "#a0a" },
                    headerStyle: {
                        backgroundColor: "#fbfbfd",
                        elevation: 0,
                        height: 40,
                    },
                    headerTitle: "",
                };
            }}
        >
            <Tab.Screen
                component={Home}
                name="Home"
                options={({ navigation }) => {
                    let color = "#fff";
                    color = navigation.isFocused() ? "#fff" : "#1d1c21";
                    let bgColor = "#6d5ad3";
                    bgColor = navigation.isFocused() ? "#6d5ad3" : "#fff";
                    return {
                        tabBarItemStyle: {
                            backgroundColor: bgColor,
                            borderRadius: 20,
                            marginVertical: 7,
                            marginHorizontal: 7,
                            // padding: 20,
                            paddingVertical: 20,
                            paddingLeft: 24,
                            paddingRight: 16,
                        },
                        tabBarIcon: () => {
                            return (
                                <Ionicons name="home" size={20} color={color} />
                            );
                        },
                        tabBarLabelStyle: { color: color },
                    };
                }}
            />
            <Tab.Screen
                component={Chat}
                name="Chat"
                options={({ navigation }) => {
                    let color = "#fff";
                    color = navigation.isFocused() ? "#fff" : "#1d1c21";
                    let bgColor = "#6d5ad3";
                    bgColor = navigation.isFocused() ? "#6d5ad3" : "#fff";
                    return {
                        tabBarItemStyle: {
                            backgroundColor: bgColor,
                            borderRadius: 20,
                            marginVertical: 7,
                            marginHorizontal: 7,
                            // padding: 20,
                            paddingVertical: 20,
                            paddingLeft: 24,
                            paddingRight: 16,
                        },
                        tabBarIcon: () => {
                            return (
                                <Ionicons
                                    name="chatbubbles-sharp"
                                    size={20}
                                    color={color}
                                />
                            );
                        },
                        tabBarLabelStyle: { color: color },
                    };
                }}
            />
            <Tab.Screen
                component={Profile}
                name="Home2"
                options={({ navigation }) => {
                    let color = "#fff";
                    color = navigation.isFocused() ? "#fff" : "#1d1c21";
                    let bgColor = "#6d5ad3";
                    bgColor = navigation.isFocused() ? "#6d5ad3" : "#fff";
                    return {
                        tabBarItemStyle: {
                            backgroundColor: bgColor,
                            borderRadius: 20,
                            marginVertical: 7,
                            marginHorizontal: 7,
                            // padding: 20,
                            paddingVertical: 20,
                            paddingLeft: 24,
                            paddingRight: 16,
                        },
                        tabBarIcon: () => {
                            return (
                                <Ionicons
                                    name="person-circle-sharp"
                                    size={22}
                                    color={color}
                                />
                            );
                        },
                        tabBarLabelStyle: { color: color },
                    };
                }}
            />
        </Tab.Navigator>
    );
};
