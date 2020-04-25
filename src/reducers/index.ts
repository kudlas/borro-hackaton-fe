import {combineReducers } from 'redux';
import {firebaseReducer} from "react-redux-firebase";
import { loadingBarReducer } from 'react-redux-loading-bar';

import ProductsReducer from "./Products";
import LoginReducer from "./Login";

const RootReducer = combineReducers({
    loadingBar: loadingBarReducer,
    products: ProductsReducer,
    firebase: firebaseReducer,
    login: LoginReducer
});

export default RootReducer;
