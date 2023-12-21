import axios from "axios"
import { ActionTypes } from "../contants/Action-type"

export const FetchProducts = () => async (dispatch) => {
    const response = await axios.get("https://fakestoreapi.com/products")
    dispatch({
        type: ActionTypes.FETCH_PRODUCTS,
        payload: response.data
    })
}


export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type: ActionTypes.SELECTED_PRODUCTS,
        payload: products
    }
}

export const DelProducts = (productId) => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
        payload: productId
    }
}

export const DelCard = (productId) => {
    return {
        type: ActionTypes.DELETE_CARD,
        payload: productId
    }
}


