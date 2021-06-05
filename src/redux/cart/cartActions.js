import * as actionTypes from './cartActionTypes';

export const addProductsToCartAction = product => dispatch => (
    dispatch({
        type: actionTypes.ADD_PRODUCT_TO_CART,
        payload: product
    })
);

export const removeProductFromCartAction = product => dispatch => (
    dispatch({
        type: actionTypes.REMOVE_PRODUCT_FROM_CART,
        payload: product.name
    })
);

export const emptyCartAction = product => dispatch => (
    dispatch({
        type: actionTypes.EMPTY_CART,
        payload: product
    })
);
