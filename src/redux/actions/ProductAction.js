import axios from "axios"
import { ActionTypes } from "../contants/Action-type"
import { loadStripe } from '@stripe/stripe-js'


export const FetchProducts = () => async (dispatch) => {

    // loading start..
    dispatch({ type: ActionTypes.FETCH_PRODUCTS_REQUEST });

    try {

        // get Products..
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("fetch products..", response)
        // 
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.FETCH_PRODUCTS_FAILURE,
            payload: "Error fetching products", // You can customize the error message
        });
    }
}


export const Checkout = (products) => async (dispatch) => {
    try {
        const stripe = await loadStripe('pk_test_51OPrroHw1RpTY5mdmVldWuSuKXM8YfZb4AoDq10umyjUbdS1qoS9tf3yrhJ5w4QmGSkjhUdxjkXCxo5uXXCwBgj000hNQBDJKI');

        dispatch({ type: ActionTypes.CHECKOUT_PRODUCTS_REQUEST });

        console.log("stripe", products)
        const response = await axios.post('https://react-redux-stripe-back-end.vercel.app/stripe/create-checkout-session', { products }, {
            headers: {
                "Content-Type": "application/json"
            },
        });
        const session = response.data;
        const result = stripe.redirectToCheckout({
            sessionId: session.id
        })

        if (result.error) {
            console.log("result.error")
        }

        dispatch({
            type: ActionTypes.CHECKOUT_PRODUCTS_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        dispatch({
            type: ActionTypes.CHECKOUT_PRODUCTS_FAILURE,
            payload: "Error checkout products",
        });
    }
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


