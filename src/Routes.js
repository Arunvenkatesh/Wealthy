import React from "react";
import {
    createStackNavigator,
    createAppContainer
} from "react-navigation";
import OnBoardingComponent from "./components/onBoarding/OnBoardingComponent";
import AddStockPrice from "./components/onBoarding/AddStockPrice"
import CommonContainer from "./container/CommonContainer"


MainNavigator = createStackNavigator({
    OnBoarding: {
        screen: CommonContainer(OnBoardingComponent),
        navigationOptions: {
            header: null
        }
    },
    AddStockPrice: {
        screen: AddStockPrice,
        navigationOptions: {
            header: null
        }
    },
    initialRouteName: "OnBoarding"
});


const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;