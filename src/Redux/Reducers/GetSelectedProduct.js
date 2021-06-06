const init = [];
export const GetSelectedProductRedecer = (state = init, action) => {
  switch (action.type) {
    case "GET_SELECTED_PRODUCT":
      return [...action.payload];

    default:
      return state;
  }
};
