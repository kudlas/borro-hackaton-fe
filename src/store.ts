import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";

import RootReducer from "./reducers";
import ProductsSaga from "./modules/product/sagas";
import LoginSaga from "./modules/login/sagas";
import {routerMiddleware} from "connected-react-router";

import history from './modules/router/history';

const ProductSagaMiddleware = createSagaMiddleware();
const LoginSagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(ProductSagaMiddleware),
        applyMiddleware(LoginSagaMiddleware),
        applyMiddleware(routerMiddleware(history))
    )
);

ProductSagaMiddleware.run(ProductsSaga);
ProductSagaMiddleware.run(LoginSaga);

const action = type => store.dispatch({type});

export default store;
