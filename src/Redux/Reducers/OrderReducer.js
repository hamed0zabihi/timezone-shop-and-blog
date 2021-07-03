import * as types from "../Actions/ActionTypes";

export const OrderReducer = (state = {}, action) => {
  switch (action.type) {
    case types.ORDER_LIST_SUCCESS:
      return { ...action.payload };
    case types.CLEAR_ORDER_LIST:
      return { ...action.payload };
    default:
      return state;
  }
};
