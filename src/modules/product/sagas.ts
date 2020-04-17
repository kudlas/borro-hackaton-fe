import {call, put, takeEvery} from 'redux-saga/effects'

import {GetProductsFail, GetProductsSuccess, ProductActionTypes} from "./actions";
import {ProductsService} from "./services";

function* getProducts() {

    try {
        const data = yield call(ProductsService.getProducts);
        yield put(GetProductsSuccess(data));
    } catch(e) {
        yield put( GetProductsFail() );
        return;
    }

}

function* ProductsSaga() {
    yield takeEvery(ProductActionTypes.GetProducts, getProducts);
}

export default ProductsSaga;