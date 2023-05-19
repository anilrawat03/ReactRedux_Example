import { storeActionTypes } from "./ActionTypes"

export const getStores=()=>{
    return {type:storeActionTypes.GET_STORES};
}

export const getStoresSuccess=(payload)=>{
    return {type:storeActionTypes.GET_STORES_SUCCESS,payload:payload};
}