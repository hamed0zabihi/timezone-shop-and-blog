import * as types from "./ActionTypes";

export const AddUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: types.SET_USER, payload: { ...user } });
  };
};

export const UpdateUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: types.UPDATE_USER, payload: { ...user } });
  };
};

export const ClearUser = () => {
  return async (dispatch) => {
    await dispatch({ type: types.CLEAR_USER, payload: {} });
  };
};
