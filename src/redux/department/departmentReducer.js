import * as actionTypes from './departmentActionTypes';

const INIT_STATE = {
    depts: [],
    categories: [],
    categoriesByDept: []
};

const deptReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_DEPTS:
            return { ...state, depts: action.payload };
        case actionTypes.GET_ALL_CATEGORIES:
            return { ...state, categories: action.payload };
        case actionTypes.GET_CATEGORIES_BY_DEPT:
            return { ...state, categoriesByDept: action.payload };
        default:
            return { ...state };
    }
};

export default deptReducer;
