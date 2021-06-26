export const HobbyReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_HOBBY_PRODUCTS":
      return [...action.payload];
    case "ADD_HOBBY":
      return [...action.payload];
    case "REMOVE_HOBBY":
      return [...action.payload];
    default:
      return state;
  }
};
