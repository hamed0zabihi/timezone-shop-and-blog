export const OrderReducer = (state = {}, action) => {
  console.log("action", action.payload);
  switch (action.type) {
    case "ORDER_LIST_SUCCESS":
      return { ...action.payload };

    case "CLEAR_ORDER_LIST":
      return { ...action.payload };
    default:
      return state;
  }
};
