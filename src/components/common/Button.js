import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({
    title,
    onPress,
    disabled
}) => {
    return (
        <TouchableOpacity disabled={disabled} style={styles.buttonStyle}
            onPress={() => {
                onPress();
            }}>
            <Text style={styles.buttonLabel}>{title}</Text>
        </TouchableOpacity >
    );
};
Button.propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};
const styles = StyleSheet.create({
    buttonStyle: {
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        backgroundColor: "#00CE22",
        width: "100%",
        height: 42,
        borderRadius: 1,
        borderColor: "#FFFFFF",
        borderWidth: 0.5
    },
    buttonLabel: {
        color: "#FFFFFF",
        paddingHorizontal: 10,
        fontSize: 22,
        fontWeight: "600"

    },
});

export default Button;