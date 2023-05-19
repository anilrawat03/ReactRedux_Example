import { storeActionTypes } from "../Actions/ActionTypes"
const initialstate={
    stores:[]
}
export const storeReducer=(state=initialstate,{type,payload})=>
{
    console.log("storeReducer",payload);
    switch(type)
    {
        case storeActionTypes.GET_STORES:
            return {...state};
            break;
       case storeActionTypes.GET_STORES_SUCCESS:
        return {...state,stores:payload};
        break;
        default:
            return {...state};
            break;
    }
}