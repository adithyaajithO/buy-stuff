import * as actionTypes from './productActionTypes';

const INIT_STATE = {
    products: [],
};

const productReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_PRODUCTS:
            return { ...state, products: action.payload };
        case actionTypes.FILTER_PRODUCTS:
            return { ...state, products: action.payload };
        case actionTypes.DELETE_FILTER_RESULTS:
            return { ...state, products: [] };
        default:
            return { ...state };
    }
};

export default productReducer;
