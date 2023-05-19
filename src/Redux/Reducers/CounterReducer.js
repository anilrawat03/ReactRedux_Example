import { DECREMENTVALUE, INCREMENTVALUE } from "../Actions/ActionTypes";

const initialstate={
value:0
};
export function counterReducer(state=initialstate,action){
    console.log(action);
    switch (action.type) {
        case INCREMENTVALUE:
          return  {...state,value:state.value+1};
            break;
        case DECREMENTVALUE:
            return {...state,value:state.value-1}
                break;
        default:
            return state;
            break;
    }

}