import { userActionTypes } from "./ActionTypes";
export function getUsers(payload) {
    return {
      type: userActionTypes.GET_USERS_REQUESTED,
      payload:payload
    }
  }