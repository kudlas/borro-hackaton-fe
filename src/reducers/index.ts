import {combineReducers } from 'redux';
import {firebaseReducer} from "react-redux-firebase";
import { loadingBarReducer } from 'react-redux-loading-bar';

import ProductsReducer from "./Products";
import LoginReducer from "./Login";

import history from '../modules/router/history';
import {connectRouter} from "connected-react-router";

const RootReducer = combineReducers({
    router: connectRouter(history),
    loadingBar: loadingBarReducer,
    products: ProductsReducer,
    firebase: firebaseReducer,
    login: LoginReducer,
});

export default RootReducer;
