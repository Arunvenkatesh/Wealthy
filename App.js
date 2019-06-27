import React, { Component } from 'react';
import AppContainer from "./src/Routes";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
GLOBAL.FormData = GLOBAL.originalFormData
  ? GLOBAL.originalFormData
  : GLOBAL.FormData;

console.disableYellowBox = true;
const store = configureStore();

export default class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}


