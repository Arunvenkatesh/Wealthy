
import * as types from "../constants/actionTypes"
const initialState = {
    getStockList: {},
    stockListLoaded: false,
    stockPriceAdded: false
}
export default function stockReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_STOCK_LIST: {
            if (action.unableToFetch) {
                return Object.assign({}, state, { stockListLoaded: false });
            } else {
                return Object.assign({}, state, { getStockList: action.getStockList, stockListLoaded: true });
            }
        }
        case types.ADD_STOCK_PRICE: {
            if (action.unableToFetch) {
                return Object.assign({}, state, { stockPriceAdded: false });
            } else {
                return Object.assign({}, state, { stockPriceAdded: true });
            }
        }
        default:
            return state;

    }

}