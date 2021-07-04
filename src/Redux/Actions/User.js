import * as types from "./ActionTypes";

const initialState = {};

export const AddUser = (user = initialState) => {
  return async (dispatch) => {
    await dispatch({ type: types.SET_USER, payload: { ...user } });
  };
};

export const UpdateUser = (user = initialState) => {
  return async (dispatch) => {
    await dispatch({ type: types.UPDATE_USER, payload: { ...user } });
  };
};

export const ClearUser = () => {
  return async (dispatch) => {
    await dispatch({ type: types.CLEAR_USER, payload: {} });
  };
};
