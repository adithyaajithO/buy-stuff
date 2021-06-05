import * as actionTypes from './cartActionTypes';

const INIT_STATE = {
    cart: [],
};

const cartReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_PRODUCT_TO_CART:
            return { ...state, cart: [...state.cart, action.payload] };
        case actionTypes.REMOVE_PRODUCT_FROM_CART:
            return { ...state, cart: state.cart.filter(el => el.name !== action.payload) };
        case actionTypes.EMPTY_CART:
            return { ...state, cart: [] };
        default:
            return { ...state };
    }
};

export default cartReducer;
