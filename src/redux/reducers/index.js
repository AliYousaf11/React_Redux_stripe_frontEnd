import { combineReducers } from "redux";
import { productReducer, SelectedproductReducer, checkoutReducer } from "./productReducer";


export const reducers = combineReducers({
    allProducts: productReducer,
    productArray: SelectedproductReducer,
    checkout: checkoutReducer,
})