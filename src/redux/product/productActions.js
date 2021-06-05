import * as actionTypes from './productActionTypes';
import { getProductsByCategory, getProductsByDept } from './productDataGetter';

export const getProductsByDeptAction = dept => dispatch => {
    let products = getProductsByDept(dept);
    dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: products
    });
}

export const getProductsByCategoryAction = category => dispatch => {
    let products = getProductsByCategory(category);
    dispatch({
        type: actionTypes.GET_PRODUCTS,
        payload: products
    });
}

export const searchProductAction = (
    dept,
    category,
    filters
) => dispatch => {
    if (category !== undefined) {
        let products = getProductsByCategory(category);
        console.log(products)
        let filteredProducts = products.filter(el => {
            for (let key in filters) {
                if (el[key] !== undefined || filters[key] !== el[key]) {
                    return false;
                }
                return true;
            }
        });
        dispatch({
            type: actionTypes.FILTER_PRODUCTS,
            payload: filteredProducts
        });
    } else {
        let products = getProductsByDept(dept);
        let filteredProducts = products.filter(el => {
            for (let key in filters) {
                if (el[key] !== undefined || filters[key] !== el[key]) {
                    return false;
                }
                return true;
            }
        });
        dispatch({
            type: actionTypes.FILTER_PRODUCTS,
            payload: filteredProducts
        });
    }
}

export const resetSearchAction = () => dispatch => dispatch({
    type: actionTypes.DELETE_FILTER_RESULTS,
});
