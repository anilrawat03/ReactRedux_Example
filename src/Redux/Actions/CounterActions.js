import { DECREMENTVALUE, INCREMENTVALUE } from "./ActionTypes";

export function counterIncrement(payload)
{
 return {
    type:INCREMENTVALUE,
    payload:payload
 }
}
export function counterDecrement(payload)
{
    return {
        type:DECREMENTVALUE,
        payload:payload
     } 
}