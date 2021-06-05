import { combineReducers } from 'redux';
import productReducer from './product/productReducer';
import cartReducer from './cart/cartReducer';
import departmentReducer from './department/departmentReducer';

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    departmentReducer
});

export default rootReducer;