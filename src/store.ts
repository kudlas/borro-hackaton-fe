import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";

import RootReducer from "./reducers";
import ProductsSaga from "./modules/product/sagas";
import LoginSaga from "./modules/login/sagas";

const ProductSagaMiddleware = createSagaMiddleware();
const LoginSagaMiddleware = createSagaMiddleware();

const store = createStore(
    RootReducer,
    composeWithDevTools(
        applyMiddleware(ProductSagaMiddleware),
        applyMiddleware(LoginSagaMiddleware)
    )
);

ProductSagaMiddleware.run(ProductsSaga);
ProductSagaMiddleware.run(LoginSaga);

const action = type => store.dispatch({type});

export default store;