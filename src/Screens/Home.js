import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { categories, doctors } from "../data/dummy-data";
import { AntDesign } from "@expo/vector-icons";

const Home = () => {
    const renderCatItem = ({ item }) => {
        return (
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "#fff",
                    borderRadius: 20,
                    width: 130,
                    height: 150,
                    margin: 10,
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Image
                    source={item.imageUrl}
                    style={{ height: 50, width: 50 }}
                />
                <Text
                    style={{
                        paddingTop: 20,
                        fontFamily: "Saira-Bold",
                        color: item.color,
                    }}
                >
                    {item.title}
                </Text>
            </View>
        );
    };

    const renderDocItem = ({ item }) => {
        return (
            <View
                style={{
                    backgroundColor: "#fff",
                    height: 110,
                    width: 250,
                    marginRight: 20,
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-around",
                    borderRadius: 20,
                }}
            >
                <View>
                    <Image
                        source={item.imageUrl}
                        style={{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            // marginLeft: 10,
                        }}
                    />
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingRight: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            fontFamily: "Saira-Bold",
                            color: "#444",
                        }}
                    >
                        Dr. {item.name}
                    </Text>
                    <Text
                        style={{
                            fontSize: 13,
                            fontFamily: "Saira-Regular",
                            color: "#444",
                        }}
                    >
                        {item.type}
                    </Text>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name="star" size={16} color="#F1EB9C" />
                        <Text
                            style={{
                                fontSize: 11,
                                fontFamily: "Saira-SemiBold",
                                paddingLeft: 5,
                                color: "#444",
                            }}
                        >
                            {item.stars} Reviews
                        </Text>
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.Screen}>
            <View>
                <Text style={styles.hi}>Hi,</Text>
                <Text style={styles.find}>Let's Find Your Doctor</Text>
            </View>
            <View style={styles.search}>
                <Text style={styles.searchText}>Search</Text>
                <FontAwesome name="search" size={18} color="#11142d" />
            </View>
            <View>
                <Text style={styles.catText}>Categories</Text>
                <FlatList
                    data={categories}
                    keyExtractor={(item) => item.id}
                    renderItem={renderCatItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.docBox}>
                <View style={styles.docBoxTextContainer}>
                    <Text style={styles.docText1}>How to Save your life</Text>
                    <Text style={styles.docText1}>from COVID-19</Text>
                    <Text style={styles.readMoreText}>read more</Text>
                </View>

                <View style={styles.docImageContainer}>
                    <Image
                        source={require("../../assets/doc.png")}
                        style={styles.docImage}
                    />
                    <Image
                        source={require("../../assets/virus.png")}
                        style={styles.virusImage}
                    />
                </View>
            </View>
            <View style={styles.popDocContainer}>
                <Text style={styles.popDocText}>Popular Doctors</Text>
                <FlatList
                    data={doctors}
                    keyExtractor={(item) => item.id}
                    renderItem={renderDocItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: "#fbfbfd",
        paddingHorizontal: 20,
    },
    hi: {
        fontFamily: "Saira-Regular",
        fontSize: 30,
        color: "#444",
    },
    find: {
        fontSize: 35,
        fontFamily: "Saira-Bold",
        color: "#444",
    },
    search: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#eee",
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 40,
    },
    searchText: {
        fontSize: 15,
        color: "#777",
    },
    catText: {
        fontSize: 15,
        color: "#11142d",
        marginTop: 20,
        marginBottom: 10,
        fontFamily: "Saira-Bold",
    },
    docBox: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        borderRadius: 30,
        marginVertical: 30,
        backgroundColor: "#6c5dd3",
    },
    docBoxTextContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "center",
        // backgroundColor: "#a00",
        paddingLeft: 20,
    },
    docText1: {
        color: "#fff",
        fontFamily: "Saira-SemiBold",
        fontSize: 18,
        // padding: 20,
    },
    readMoreText: {
        backgroundColor: "#f5a3bd",
        color: "#fff",
        textAlign: "center",
        paddingVertical: 8,
        fontFamily: "Saira-Bold",
        width: "55%",
        marginTop: 10,
        borderRadius: 40,
    },
    popDocContainer: {
        display: "flex",
        flexDirection: "column",
        // marginTop: 10,
    },
    popDocText: {
        fontSize: 15,
        marginBottom: 10,
        fontFamily: "Saira-Bold",
    },
    docImageContainer: {
        height: "100%",
        width: 150,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    docImage: {
        height: 150,
        width: 150,
        marginRight: 15,
    },
    virusImage: {
        width: 70,
        height: 70,
        position: "absolute",
        top: -30,
        left: -15,
    },
});
