import * as types from "../ActionTypes";

const initialState = {};

export const OrderCreate = (order1 = initialState) => {
  return async (dispatch) => {
    await dispatch({ type: types.ORDER_LIST_SUCCESS, payload: { ...order1 } });
  };
};

export const ClearOrder = () => {
  return async (dispatch) => {
    await dispatch({ type: types.CLEAR_ORDER_LIST, payload: {} });
  };
};
