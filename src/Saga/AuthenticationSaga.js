import { call, put, takeEvery } from "redux-saga/effects";
import { apiEndPoint } from "../Common/APIEndPoint";
import { authenticationActionTypes } from "../Redux/Actions/ActionTypes";
import { startLoader } from "../Redux/Actions/CommonActions";
import { api_helper } from "../Common/APIHelper";
import { setLoggeduserToken } from "../Services/Authservice";
function* userlogin({payload})
{
    try {
        yield put(startLoader(true));
        const response = yield call(api_helper.post,apiEndPoint.LOGIN_USER,payload.userlogin);
        yield put({ type: authenticationActionTypes.LOGIN_SUCCESS, payload:response});
        setLoggeduserToken(response.token);
        alert("logged in");
        payload.navigate('/dashboard')
    }
    catch (error) {
        yield put(startLoader(false));
    }
};
function* authenticationsaga() {
    yield takeEvery(authenticationActionTypes.LOGIN_USER, userlogin)
}

export default authenticationsaga;