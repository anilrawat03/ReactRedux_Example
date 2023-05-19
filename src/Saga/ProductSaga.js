import { call, put, takeEvery } from "redux-saga/effects";
import { productActionTypes } from "../Redux/Actions/ActionTypes";
import { api_helper, apihelper } from "../Common/APIHelper";
import { apiEndPoint } from "../Common/APIEndPoint";
import { startLoader } from "../Redux/Actions/CommonActions";
function * fetchproduct(){
    try {
        debugger;
        yield put(startLoader(true));
        const products = yield call(api_helper.get,apiEndPoint.GET_PRODUCTS);
        yield put({ type: productActionTypes.GET_PRODUCT_SUCCESS,payload:products});
    }
    catch (error) {
        console.log(error);
        yield put(startLoader(false));
        let products=[];
        yield put({ type: productActionTypes.GET_PRODUCT_SUCCESS,payload:products});
       
    }
}

export function * productsaga(){
    yield takeEvery(productActionTypes.GET_PRODUCTS,fetchproduct);
}