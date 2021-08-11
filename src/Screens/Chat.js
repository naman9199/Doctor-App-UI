import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
    return (
        <View style={styles.centered}>
            <Text>Chat Screen</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        backgroundColor: "#fbfbfd",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});
