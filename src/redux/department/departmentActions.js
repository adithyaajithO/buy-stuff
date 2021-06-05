import * as actionTypes from './departmentActionTypes';
import {
    getAllDepts,
    getAllCategories,
    getCategoriesByDept
} from './departmentDataGetter';

export const getCategoriesByDeptAction = dept => dispatch => {
    let categories = getCategoriesByDept(dept);
    dispatch({
        type: actionTypes.GET_CATEGORIES_BY_DEPT,
        payload: categories
    });
}

export const getAllDeptsAction = () => dispatch => {
    let depts = getAllDepts();
    dispatch({
        type: actionTypes.GET_DEPTS,
        payload: depts
    });
}

export const getAllCategoriesAction = () => dispatch => {
    let depts = getAllCategories();
    dispatch({
        type: actionTypes.GET_ALL_CATEGORIES,
        payload: depts
    });
}
