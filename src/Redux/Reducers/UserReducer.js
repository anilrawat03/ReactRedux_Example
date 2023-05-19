import { userActionTypes} from "../Actions/ActionTypes"
const initialState = {
    users: [],
  };

  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case userActionTypes.GET_USERS_REQUESTED:
        return {...state}
      case userActionTypes.GET_USERS_SUCCESS:
        return {
          ...state,users:action.payload
        }
      default:
        return {...state}
    }
  }