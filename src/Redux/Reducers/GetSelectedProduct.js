import * as types from "../Actions/ActionTypes";

const initialState = [];

export const GetSelectedProductRedecer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SELECTED_PRODUCT:
      return [...action.payload];

    default:
      return state;
  }
};
