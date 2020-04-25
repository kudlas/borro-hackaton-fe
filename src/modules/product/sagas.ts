import {call, put, takeEvery, all} from 'redux-saga/effects'

import {GetProductsFail, GetProductsSuccess, ProductActionTypes} from "./actions";
import {ProductsService} from "./services";
import {hideLoading} from "react-redux-loading-bar";

function* getProducts() {

    try {
        const data = yield call(ProductsService.getProducts);
        yield all([
            put(GetProductsSuccess(data)),
            put(hideLoading())
        ])
    } catch(e) {
        yield put( GetProductsFail() );
        return;
    }

}

function* ProductsSaga() {
    yield takeEvery(ProductActionTypes.GetProducts, getProducts);
}

export default ProductsSaga;
