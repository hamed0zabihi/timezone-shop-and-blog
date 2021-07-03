import * as types from "../Actions/ActionTypes";

export const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case types.SET_USER:
      return { ...action.payload };
    case types.UPDATE_USER:
      return { ...action.payload };
    case types.CLEAR_USER:
      return { ...action.payload };
    default:
      return state;
  }
};
