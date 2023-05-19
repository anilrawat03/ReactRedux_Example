import {commonActionTypes} from '../Actions/ActionTypes'
export  function startLoader(payload)
{
   return{
    type:commonActionTypes.LOADERSTART_STOP,payload:payload
}
}
