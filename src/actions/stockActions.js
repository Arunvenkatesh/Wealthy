import axios from "axios";
import * as types from "../constants/actionTypes";
import * as API_END_POINTS from "../constants/api";
export function getStockList() {
    return dispatch => {
        axios
            .get(API_END_POINTS.GET_STOCK_LIST, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.status == 200) {
                    dispatch({
                        type: types.GET_STOCK_LIST,
                        getStockList: response.data,
                    });

                } else {
                    dispatch({
                        type: types.GET_STOCK_LIST,
                        unableToFetch: true
                    });
                }
            })
            .catch(err => {
                if (err && err.config) {
                    dispatch({
                        type: types.GET_STOCK_LIST,
                        unableToFetch: true
                    });
                }
            });
    };
}
export function addStockPrice(recordID, data, refreshComponent) {
    return dispatch => {
        axios
            .put(`${API_END_POINTS.BASE_URL}/${recordID}?${API_END_POINTS.API_KEY}`, data, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                if (response.status == 200) {
                    refreshComponent();
                    dispatch({
                        type: types.ADD_STOCK_PRICE,
                        getStockList: response.data,
                    });
                } else {
                    dispatch({
                        type: types.ADD_STOCK_PRICE,
                        unableToFetch: true
                    });
                }
            })
            .catch(err => {
                if (err && err.config) {
                    dispatch({
                        type: types.ADD_STOCK_PRICE,
                        unableToFetch: true
                    });
                }
            });
    };
}