import {call, put, takeEvery} from 'redux-saga/effects'

import {
    LoginActionTypes,
    LoginFail,
    LoginSuccess,
} from "./actions";
import {LoginService} from "./services";

function* postLogin(action) {

    try {
         const data = yield call(LoginService.postLogin, action.creds );
         yield put(LoginSuccess(data));
    } catch(e) {
        yield put( LoginFail(e) );
    }

}

function* LoginSaga() {
    yield takeEvery(LoginActionTypes.Login, postLogin);
}

export default LoginSaga;