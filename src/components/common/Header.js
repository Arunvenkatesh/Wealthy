
import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

const Header = ({
    title,
    onBack
}) => {
    return (
        <View style={headerStyles.header}>
            {onBack && <TouchableOpacity
                style={headerStyles.headerNav}
                onPress={() => {
                    if (onBack) {
                        onBack();
                    }
                }}
            >
                <Image
                    source={require("../../assets/images/back_nav.png")}
                    style={headerStyles.headerNavIcon}
                />

            </TouchableOpacity>}
            <Text style={[headerStyles.headerTitle, { paddingLeft: onBack ? 0 : 15, textAlign: onBack ? "center" : "center" }]} >
                {title}
            </Text>
            <View style={headerStyles.headerNavRight}>

            </View>
        </View>
    );
};
Header.propTypes = {
    title: PropTypes.string,
    onBack: PropTypes.func,
};
const headerStyles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: "#101010",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        paddingTop: 5,
        marginTop: -2
    },
    headerNav: {
        width: 50,
        height: 50,
        alignItems: "flex-start",
        justifyContent: "center",
        paddingLeft: 10
    },
    headerNavRight: {

        height: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 5
    },
    headerNavIcon: {
        width: 30,
        height: 30,
        // backgroundColor: "#000"
    },
    headerTitle: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "500",
        flexGrow: 1,
        textAlign: "left",
        marginRight: 18,
    }
});
export default Header;