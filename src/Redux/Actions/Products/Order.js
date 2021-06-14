export const OrderCreate = (order1) => {
  console.log("order1", order1);
  return async (dispatch) => {
    await dispatch({ type: "ORDER_LIST_SUCCESS", payload: { ...order1 } });
  };
};

export const ClearOrder = () => {
  return async (dispatch) => {
    await dispatch({ type: "CLEAR_ORDER_LIST", payload: {} });
  };
};
