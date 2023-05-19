import { commonActionTypes } from "../Actions/ActionTypes";
const intitialstate=
{
    isLoaderStart:false
}
export default function loaderReducer(state=intitialstate,action){
    switch(action.type)
    {
        case commonActionTypes.LOADERSTART_STOP:
            return {...state,isLoaderStart:action.payload}
        default:
            return {...state,isLoaderStart:false};
    }

}