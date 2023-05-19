import { authenticationActionTypes } from "../Actions/ActionTypes"
const initialstate =
{
    loggeduserdetail: {}
}
export const authenticationReducer = (state = initialstate, { type, payload }) => {
    switch (type) {
        case authenticationActionTypes.LOGIN_SUCCESS:
            return { state, ...payload };
        default:
            return {...state}
            break;
}}