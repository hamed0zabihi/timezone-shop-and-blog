import * as types from "../Actions/ActionTypes";

const initialState = [];

export const ArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ARTICLES:
      return [...action.payload];
    default:
      return state;
  }
};

export const OneArticle = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ARTICLE:
      return { ...action.payload };
    default:
      return state;
  }
};
