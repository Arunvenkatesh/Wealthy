

import React from 'react';
import PropTypes from "prop-types";
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { commonStyles } from "../../styles/common"
import Button from "../common/Button"
import Header from "../common/Header"
import InputBox from "../common/InputBox"
import CustomStatusBar from "../common/CustomStatusBar"


const AddStockPrice = ({
    stockPrice,
    stockDate,
    onAddStockPressed,
    onPriceChanged,
    onBackPress,
    priceValue
}) => {
    return (
        <View style={commonStyles.mainView} >
            <CustomStatusBar barStyle="light-content" backgroundColor={"#151515"} />
            <Header title={stockPrice ? "Update Stock Price" : "Add Stock Price"} onBack={() => {
                onBackPress()
            }} />

            < View style={commonStyles.flexContainer}>
                <ScrollView keyboardShouldPersistTaps="never">
                    < View style={commonStyles.formGroup}>
                        <View
                            style={{
                                alignSelf: "flex-start",
                                backgroundColor: "blue",
                                height: 40,
                                widht: 80,
                                marginBottom: 20
                            }}>
                            <Text style={commonStyles.commonTextLayout}>
                                {stockDate} June 2019
                                </Text>
                        </View>
                        <Text style={commonStyles.inputBoxTitle}>
                            Stock Price
                            </Text>
                        <InputBox
                            onFieldChange={(e) => {
                                onPriceChanged(e)
                            }}
                            value={priceValue}
                            type={"number"}
                            defaultValue={stockPrice}
                            editable={true} />
                        <View
                            style={{
                                marginTop: 25,
                                width: "60%",
                                alignSelf: "flex-end"
                            }}>
                            <Button
                                title={stockPrice ? "Update Price" : "Add Price"}
                                onPress={() => {
                                    onAddStockPressed()
                                }} />
                        </View>
                    </ View>
                </ScrollView>

            </View>

        </View>
    );
}


export default AddStockPrice;

AddStockPrice.propTypes = {
    stockPrice: PropTypes.string,
    stockDate: PropTypes.string,
    onBackPress: PropTypes.func,
    onAddStockPressed: PropTypes.func,
    onPriceChanged: PropTypes.func,
    priceValue: PropTypes.string,
};