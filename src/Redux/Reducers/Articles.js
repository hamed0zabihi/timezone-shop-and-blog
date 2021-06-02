const initialState = [];
export const ArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICLES":
      return [...action.payload];
    default:
      return state;
  }
};
