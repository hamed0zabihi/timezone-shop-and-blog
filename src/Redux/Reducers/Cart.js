export const Cart = (state = [], action) => {
  //   let doesItemExist= false;
  console.log("payload", action.payload);
  let doesItemExist = false;
  switch (action.type) {
    case "ADD_TO_CART":
      doesItemExist = state.find((el) => el.id === action.payload.id);
      if (!doesItemExist) {
        return [...state, action.payload];
      } else {
        return state.map((el) => {
          if (
            el.id === action.payload.id &&
            el.quantity < el.inventory &&
            action.payload.quantity <= el.inventory - el.quantity
          ) {
            return { ...el, quantity: el.quantity + action.payload.quantity };
          }
          return el;
        });
      }
    case "REMOVE_FROM_CART":
      let findProduct = [];
      findProduct = state.filter((el) => el.id === action.payload);
      const { quantity } = findProduct[0];
      if (quantity === 1) {
        return state.filter((el) => el.id !== action.payload);
      } else {
        return state.map((el) =>
          el.id === action.payload ? { ...el, quantity: el.quantity - 1 } : el
        );
      }

    case "CLEAR_CART":
      return [...action.payload];
    default:
      return state;
  }
};
