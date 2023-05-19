import { productActionTypes } from "../Actions/ActionTypes";

const initialstate={
products:[]
};
export const productReducer=(state=initialstate, action)=>
{  console.log("productReducer",action);
    switch(action.type){
        case productActionTypes.GET_PRODUCTS:
        return {...state,products:action.payload}   
        case productActionTypes.GET_PRODUCT_SUCCESS:
          
            return {...state,products:action.payload} 
        break;
        default:
            return {...state}
            break;
    }
}