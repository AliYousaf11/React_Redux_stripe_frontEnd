import { combineReducers } from "redux";
import { productReducer, SelectedproductReducer } from "./productReducer";


export const reducers = combineReducers({
    allProducts: productReducer,
    productArray: SelectedproductReducer
})