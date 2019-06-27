import React from "react";
import PropTypes from "prop-types";
import { Text, View, TouchableOpacity, Modal } from "react-native";
const AlertModal = ({
    title,
    cancelText,
    cancelAction,
    deleteText,
    deleteAction,
    visible,
    buySellAction,
    buySellText,
    stockSold
}) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            onRequestClose={() => {
                cancelAction();
            }}
        >
            <View
                style={{
                    flex: 1,
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    justifyContent: "center"
                }}
            >
                <View>
                    <View
                        style={{
                            backgroundColor: "#101010",
                            marginHorizontal: 30,
                            paddingVertical: 55,
                            borderRadius: 4,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text
                            style={[
                                {
                                    color: "rgba(255,255,255,1)"
                                }
                            ]}
                        >
                            {title}
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                this.setModalVisible(!this.state.modalVisible);
                            }}
                        />
                    </View>
                </View>
                <View
                    style={{
                        marginHorizontal: 40,
                        flexDirection: "row",

                        justifyContent: "space-between",
                        top: -20
                    }}
                >
                    <TouchableOpacity
                        style={{
                            borderRadius: 4,
                            backgroundColor: "#FFF",
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            shadowColor: "black",
                            shadowOpacity: 0.2,
                            marginRight: 5,
                            justifyContent: "center",
                            paddingHorizontal: 10
                        }}
                        onPress={() => {
                            cancelAction();
                        }}
                    >
                        <Text>   {cancelText} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            marginLeft: 5,
                            borderRadius: 4,
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            shadowColor: "black",
                            shadowOpacity: 0.2,
                            marginRight: 5,
                            backgroundColor: "#F00",
                            height: 30,
                            justifyContent: "center",
                            paddingHorizontal: 10
                        }}
                        onPress={() => {
                            deleteAction();
                        }}
                    >
                        <Text style={{ color: "#FFF" }}> {deleteText}</Text>
                    </TouchableOpacity>
                    {!stockSold && <TouchableOpacity
                        style={{
                            marginLeft: 5,
                            borderRadius: 4,
                            shadowOffset: {
                                width: 0,
                                height: 0
                            },
                            shadowColor: "black",
                            shadowOpacity: 0.2,
                            marginRight: 5,
                            backgroundColor: "#0041FF",
                            height: 30,
                            justifyContent: "center",
                            paddingHorizontal: 10
                        }}
                        onPress={() => {
                            buySellAction();
                        }}
                    >
                        <Text style={{ color: "#FFF" }}> {buySellText}</Text>
                    </TouchableOpacity>}
                </View>
            </View>
        </Modal>
    );
};
AlertModal.propTypes = {
    title: PropTypes.string,
    cancelText: PropTypes.string,
    cancelAction: PropTypes.func,
    deleteText: PropTypes.string,
    deleteAction: PropTypes.func,
    buySellText: PropTypes.string,
    buySellAction: PropTypes.func,
    visible: PropTypes.bool,
    stockSold: PropTypes.bool
};
export default AlertModal;
