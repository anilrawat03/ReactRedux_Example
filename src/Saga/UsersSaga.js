import { call, put, takeEvery } from 'redux-saga/effects'
import { userActionTypes } from '../Redux/Actions/ActionTypes'
import {startLoader} from '../Redux/Actions/CommonActions'
import { api_helper} from '../Common/APIHelper';
import { apiEndPoint } from '../Common/APIEndPoint';
function* fecthusers(action) {
    try {
        yield put(startLoader(true));
        const users = yield call(api_helper.get,apiEndPoint.GETUSERS);
        yield put({ type: userActionTypes.GET_USERS_SUCCESS, payload:users});
    }
    catch (error) {
        console.log(error);
        yield put(startLoader(false));
        let users=[];
        yield put({ type: userActionTypes.GET_USERS_SUCCESS,payload:users});
    }
}

function* usersaga() {
    yield takeEvery(userActionTypes.GET_USERS_REQUESTED, fecthusers)
}

export default usersaga;