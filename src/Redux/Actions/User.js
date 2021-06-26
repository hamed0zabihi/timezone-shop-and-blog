export const AddUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_USER", payload: { ...user } });
  };
};
export const UpdateUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "UPDATE_USER", payload: { ...user } });
  };
};
export const ClearUser = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_USER", payload: {} });
  };
};
