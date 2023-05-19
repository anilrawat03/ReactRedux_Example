import { call, put, takeEvery } from "redux-saga/effects";
import { apiEndPoint } from "../Common/APIEndPoint";
import { storeActionTypes } from "../Redux/Actions/ActionTypes";
import { startLoader } from "../Redux/Actions/CommonActions";
import { api_helper } from "../Common/APIHelper";

function* fetchStores(action)
{
    console.log("fetchStores");
    try {
        yield put(startLoader(true));
        const stores = yield call(api_helper.get,apiEndPoint.GET_STORES);
        console.log("stores",stores);
        yield put({ type: storeActionTypes.GET_STORES_SUCCESS, payload:stores});
    }
    catch (error) {
        console.log(error);
        yield put(startLoader(false));
        yield put({ type: storeActionTypes.GET_STORES_SUCCESS,payload:[]});
    }
}

function* storesaga() {
    console.log("storesaga");
    yield takeEvery(storeActionTypes.GET_STORES, fetchStores)
}

export default storesaga;