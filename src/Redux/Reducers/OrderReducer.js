export const OrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_LIST_SUCCESS":
      return { ...action.payload };
    case "CLEAR_ORDER_LIST":
      return { ...action.payload };
    default:
      return state;
  }
};
