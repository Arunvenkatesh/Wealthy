import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, TextInput, View, Image, Keyboard, Text } from "react-native";

const InputBox = ({
    placeholder,
    boxType,
    onFieldChange,
    value,
    defaultValue,
    editable,
    type
}) => {
    return (
        <View style={styles.inputBox}>
            <TextInput
                style={[styles.textInput, boxType == "icon" ? styles.inputPaddingLeft : boxType == "credit" ? { height: "82%", width: 50, borderRadius: 0, borderColor: "#fff" } : boxType == "body" ? { height: 180, flex: 0.87 } : boxType == "task" ? { height: "100%", width: "100%", borderRadius: 0, borderColor: "#fff" } : boxType == "taskDetails" ? { height: 80, flex: 0.87 } : null]}
                placeholder={placeholder}
                placeholderTextColor={"#808080"}
                onChange={(e) => {
                    onFieldChange(e)
                }}
                value={value}
                keyboardType={type == "number" ? "number-pad" : "default"}
                defaultValue={defaultValue}
                editable={editable}
                onEndEditing={() => { Keyboard.dismiss() }}
                autoCapitalize={false}
                numberOfLines={4}
                multiline={true}

            />
        </View>)
};
InputBox.propTypes = {
    placeholder: PropTypes.string,
    boxType: PropTypes.string,
    onFieldChange: PropTypes.func,
    value: PropTypes.string,
    errorMessage: PropTypes.string,
    onChangeText: PropTypes.func,
    defaultValue: PropTypes.String,
    type: PropTypes.String,
    editable: PropTypes.bool
};

const styles = StyleSheet.create({
    inputBox: {
        marginBottom: 5
    },
    textInput: {
        height: 40,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        width: "100%",
        padding: 5,
        fontSize: 18,
        borderRadius: 5
    },
    inputPaddingLeft: {
        paddingLeft: 45,
    },

});

export default InputBox;