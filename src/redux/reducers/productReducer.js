import { ActionTypes } from "../contants/Action-type"


const initialState = {
    products: []
}
export const productReducer = (state = initialState, action) => {
    switch (action.type) {

        // set all fetch products
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload }
        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: action.payload }
        default:
            return state
    }
}

const purchasedProduct = {
    products: [],
}
export const SelectedproductReducer = (state = purchasedProduct, action) => {
    switch (action.type) {


        // set selected products
        case ActionTypes.SELECTED_PRODUCTS:
            const checkAlreadyExist = state.products.findIndex((product) => product.id === action.payload.id);

            if (checkAlreadyExist !== -1) {
                console.log("totoa----", action.payload)
                // Product already exists, increment quantity by 1
                const updatedProducts = [...state.products];
                updatedProducts[checkAlreadyExist].quantity += 1;
                updatedProducts[checkAlreadyExist].TotalPrice += action.payload.price;
                return { ...state, products: updatedProducts };
            } else {
                // Product doesn't exist, add new product with quantity 1
                const updatedProducts = [...state.products, { ...action.payload, quantity: 1, TotalPrice: action.payload.price }];
                return { ...state, products: updatedProducts };
            }


        // descrese the selected qunatity    
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            const updatedProducts = state.products.map((product) => {
                if (product.id === action.payload && product.quantity > 1) {

                    return { ...product, quantity: product.quantity - 1, TotalPrice: product.price };
                }
                return product;
            });

            return { ...state, products: updatedProducts };

        // delete complete card    
        case ActionTypes.DELETE_CARD:
            const updatedNewArray = state.products.filter((product) => product.id !== action.payload)
            return { ...state, products: updatedNewArray }

        default:
            return state
    }
}