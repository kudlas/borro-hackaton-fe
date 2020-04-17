import {combineReducers } from 'redux';
import {firebaseReducer} from "react-redux-firebase";

import ProductsReducer from "./Products";
import LoginReducer from "./Login";

const RootReducer = combineReducers({
    products: ProductsReducer,
    firebase: firebaseReducer,
    login: LoginReducer
});

export default RootReducer;