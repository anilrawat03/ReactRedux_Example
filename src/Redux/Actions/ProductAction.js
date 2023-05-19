import { productActionTypes } from "./ActionTypes"

export const getproduct=(payload)=>{
    return  {type:productActionTypes.GET_PRODUCTS,payload:payload};
}