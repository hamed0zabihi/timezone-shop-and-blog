import { combineReducers } from "redux";
import { ArticleReducer } from "./Articles";
import { Cart } from "./Cart";
import { GetSelectedProductRedecer } from "./GetSelectedProduct";
import LocalFakeData from "./LocalFakeData";

export const reducers = combineReducers({
  Article: ArticleReducer,
  ProductsLocal: LocalFakeData,
  Product: GetSelectedProductRedecer,
  cart: Cart,
});
