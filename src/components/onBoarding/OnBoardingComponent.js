

import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';
import { commonStyles } from "../../styles/common"
import { gridLayoutStyles } from "../../styles/gridLayout"
import AlertModal from "../common/AlertModal"
import CustomStatusBar from "../common/CustomStatusBar"
import AddStockPrice from "./AddStockPrice"
import map from "lodash/map";
import PureChart from 'react-native-pure-chart';
import { LineChart, XAxis, Grid } from 'react-native-svg-charts'


export default class OnBoardingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            recordId: null,
            stockId: null,
            stockPrice: null,
            stockDate: null,
            isAddStockClicked: false,
            confirmationModel: false,
            price: null,
            stockList: [],
            stockListLoaded: false,
            stockBought: false,
            buyPrice: null,
            stockSold: false,
            buyDate: null,
            sellDate: null,
            graphList: []
        };
        this.editStock = this.editStock.bind(this);
        this.deleteStockPrice = this.deleteStockPrice.bind(this);
        this.buyAction = this.buyAction.bind(this);
        this.sellAction = this.sellAction.bind(this);
    }
    componentDidMount() {
        this.props.actions.getStockList();
    }
    componentWillReceiveProps(nextProps) {

        if (nextProps && nextProps.stockReducer && nextProps.stockReducer.stockListLoaded) {
            this.setState({
                stockList: nextProps.stockReducer.getStockList["records"],
                stockListLoaded: true
            }, () => {
                this.getGetGraphList()
            })

        }
    }
    buyAction() {
        let data = {
            "fields": {
                "stock_Id": this.state.stockId,
                "stock_price": String(this.state.stockPrice),
                "stock_Date": this.state.stockDate,
                "buyPrice": String(Number(this.state.stockPrice) * 10),
                "stockBought": true,
                "buyDate": this.state.stockDate

            }
        }
        this.props.actions.addStockPrice(this.state.recordId, data, () => {
            alert("10 units Bought successfully");
            this.props.actions.getStockList();
            this.setState({ confirmationModel: false })
        })

    }
    sellAction() {
        if (this.state.stockBought) {
            let data = {
                "fields": {
                    "stock_Id": this.state.stockId,
                    "stock_price": String(this.state.stockPrice),
                    "stock_Date": this.state.stockDate,
                    "sellPrice": String(Number(this.state.stockPrice) * 10),
                    "stockSold": true,
                    "buyPrice": this.state.buyPrice,
                    "stockBought": this.state.stockBought,
                    "buyDate": this.state.stockDate,
                    "sellDate": this.state.stockDate
                }
            }
            this.props.actions.addStockPrice(this.state.recordId, data, () => {
                alert("10 units Sold successfully" + data.sellDate);
                this.props.actions.getStockList();
                this.setState({ isAddStockClicked: false })
            })
        }
    }

    editStock(stocks) {
        let stock = stocks["fields"];
        this.setState({
            stockPrice: stock.stock_price ? stock.stock_price : null,
            stockDate: stock.stock_Date,
            stockId: stock.stock_Id,
            recordId: stocks.id,
            stockBought: stock.stockBought ? stock.stockBought : false,
            buyPrice: stock.buyPrice ? stock.buyPrice : null,
            stockSold: stock.stockSold ? stock.stockSold : false,
            sellPrice: stock.sellPrice ? stock.sellPrice : null,
            buyDate: stock.buyDate ? stock.buyDate : null,
            sellDate: stock.sellDate ? stock.sellDate : null,
            isAddStockClicked: true,

        });
    }
    onAddStockPress() {
        let data = {}
        if (this.state.stockSold && this.state.stockBought) {
            data = {
                "fields": {
                    "stock_Id": this.state.stockId,
                    "stock_price": String(this.state.price),
                    "stock_Date": this.state.stockDate,
                    "stockBought": this.state.stockBought,
                    "buyPrice": this.state.buyPrice,
                    "stockSold": this.state.stockSold,
                    "sellPrice": this.state.sellPrice,
                    "buyDate": this.state.buyDate,
                    "sellDate": this.state.sellDate
                }
            }
        }
        else if (this.state.stockBought) {
            data = {
                "fields": {
                    "stock_Id": this.state.stockId,
                    "stock_price": String(this.state.price),
                    "stock_Date": this.state.stockDate,
                    "stockBought": this.state.stockBought,
                    "buyPrice": this.state.buyPrice,
                    "buyDate": this.state.buyDate,
                }

            }
        }
        else {
            data = {
                "fields": {
                    "stock_Id": this.state.stockId,
                    "stock_price": String(this.state.price),
                    "stock_Date": this.state.stockDate
                }

            }
        }
        if (this.state.price) {
            this.props.actions.addStockPrice(this.state.recordId, data, () => {

                this.props.actions.getStockList();
                this.setState({ isAddStockClicked: false, stockPrice: null, price: null })
                alert(" Stock price updated");
            })
        } else {
            alert("Please fill new value");
        }
    }

    deleteStockPrice() {
        let data = {
            "fields": {
                "stock_Id": this.state.stockId,
                "stock_Date": this.state.stockDate
            }
        }
        this.props.actions.addStockPrice(this.state.recordId, data, () => {
            alert("Deleted Stock price");
            this.props.actions.getStockList();
            this.setState({ isAddStockClicked: false, stockPrice: null, price: null })
        })
    }
    onPriceChange = (passKey) => {
        this.setState({
            price: passKey.nativeEvent.text,
        })
    }
    getGetGraphList() {
        graphList = [];
        map(this.state.stockList, stock => {
            if (stock["fields"].stock_price && stock["fields"].sellPrice && stock["fields"].buyPrice) {
                gain = stock["fields"].sellPrice - stock["fields"].buyPrice
                profit = (gain / stock["fields"].buyPrice) * 100;
                graphList.push({ "x": stock["fields"].sellDate, "y": Number(profit) });
            }
        })
        debugger;
        this.setState({
            graphList: graphList
        })
    }
    render() {
        return !this.state.isAddStockClicked ? (
            <View style={commonStyles.mainView}>
                <CustomStatusBar barStyle="light-content" backgroundColor={"#151515"} />
                <View style={{ alignSelf: "flex-start", backgroundColor: "blue", height: 40, widht: 80, marginTop: 30 }}><Text style={commonStyles.commonTextLayout}>June</Text></View>

                <View style={{ marginTop: 10, flexDirection: "row", height: 350 }}>
                    {this.state.stockListLoaded ? this.state.stockList &&
                        <FlatList
                            data={this.state.stockList}
                            renderItem={({ item }) => {

                                return (<TouchableOpacity
                                    style={[gridLayoutStyles.gridViewContainer, { backgroundColor: item["fields"].stockSold ? "#ff6768" : item["fields"].stockBought ? "#52437b" : "#202020" }]}
                                    onLongPress={() => {
                                        if (item["fields"].stock_price) {
                                            this.setState({
                                                confirmationModel: true,
                                                stockPrice: item["fields"].stock_price ? item["fields"].stock_price : null,
                                                stockDate: item["fields"].stock_Date,
                                                stockId: item["fields"].stock_Id,
                                                recordId: item.id,
                                                stockBought: item["fields"].stockBought ? item["fields"].stockBought : false,
                                                buyPrice: item["fields"].buyPrice ? item["fields"].buyPrice : null,
                                                stockSold: item["fields"].stockSold ? item["fields"].stockSold : false,
                                                sellPrice: item["fields"].sellPrice ? item["fields"].sellPrice : null,
                                                buyDate: item["fields"].buyDate ? item["fields"].buyDate : null,
                                                sellDate: item["fields"].sellDate ? item["fields"].sellDate : null,
                                            })
                                        }
                                    }}

                                    onPress={() => {
                                        this.editStock(item)
                                    }}>
                                    <Text style={gridLayoutStyles.gridViewTextLayout}  > {item["fields"].stock_Id} </Text>
                                    {item["fields"].stock_price && <Text ellipsizeMode={"tail"} numberOfLines={1} style={{ color: item["fields"].stockBought ? "#fff" : item["fields"].stockSold ? "#fff" : "#0f0", fontSize: 12 }}> {item["fields"].stock_price} </Text>}

                                </TouchableOpacity>)
                            }}
                            numColumns={6}
                        /> :
                        <View style={{ backgroundColor: "#202020", alignSelf: "center", justifyContent: "center", alignItems: "center", alignContent: "center", flex: 1, marginHorizontal: "50%", flexDirection: "column" }}>
                            <Image width="200" height="200" source={require('../../assets/spinner.png')} />
                            <Text style={{ textAlign: "center", width: 200, color: "#FFF", fontSize: 16, marginTop: -40 }}>Loading............</Text>
                        </View>
                    }

                </View>

                {/* Confirmation DialogueBox */}
                {this.state.confirmationModel && (
                    <AlertModal
                        title=" You can  do  one of the following action?"
                        cancelText="CANCEL"
                        cancelAction={() => {
                            this.setState({ confirmationModel: false });
                        }}
                        deleteText={"Delete Price"}
                        deleteAction={() => {
                            this.deleteStockPrice();
                            this.setState({ confirmationModel: false });
                        }}
                        buySellAction={() => {

                            this.state.stockBought ? this.sellAction() : this.buyAction()
                            this.setState({ confirmationModel: false });
                        }}
                        buySellText={this.state.stockBought ? "Sell" : "Buy"}
                        visible={this.state.confirmationModel}
                        stockSold={this.state.stockSold}
                    />
                )}
                <View style={{ alignSelf: "center", backgroundColor: "#000", width: "100%", height: 250, padding: 10 }}>
                    <PureChart data={[{ seriesName: 'series1', color: "rgb(134, 65, 244)", data: this.state.graphList }]} type='bar' width={'30%'}
                        height={180} />
                </View>

            </View>
        )
            : (<AddStockPrice
                stockPrice={this.state.stockPrice ? this.state.stockPrice : null}
                stockDate={this.state.stockDate}
                priceValue={this.state.price}
                onPriceChanged={this.onPriceChange}
                onBackPress={() => {
                    this.setState({
                        isAddStockClicked: false
                    })
                }}
                onAddStockPressed={() => { this.onAddStockPress() }} />);

    }
}