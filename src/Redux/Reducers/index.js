import { combineReducers } from "redux";
import { ArticleReducer } from "./Articles";
import { GetSelectedProductRedecer } from "./GetSelectedProduct";
import LocalFakeData from "./LocalFakeData";

export const reducers = combineReducers({
  Article: ArticleReducer,
  ProductsLocal: LocalFakeData,
  Product: GetSelectedProductRedecer,
});
