import * as types from "../Actions/ActionTypes";

export const HobbyReducer = (state = [], action) => {
  switch (action.type) {
    case types.SET_HOBBY_PRODUCTS:
      return [...action.payload];
    case types.ADD_HOBBY:
      return [...action.payload];
    case types.REMOVE_HOBBY:
      return [...action.payload];
    default:
      return state;
  }
};
