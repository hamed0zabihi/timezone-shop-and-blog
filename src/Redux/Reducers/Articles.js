import * as types from "../Actions/ActionTypes";

const initialState = [];

export const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLES:
      return [...action.payload];
    default:
      return state;
  }
};
