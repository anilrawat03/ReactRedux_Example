import { authenticationActionTypes } from "./ActionTypes"
export const userloginAction=(payload)=>
{
return {type:authenticationActionTypes.LOGIN_USER,payload:payload}
}

export const userloginSuccessAction=(payload)=>
{
    return {type:authenticationActionTypes.LOGIN_SUCCESS,payload:payload}
}