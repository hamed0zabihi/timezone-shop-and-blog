import { combineReducers } from "redux";
import { ArticleReducer } from "./Articles";
import { LocalHostFakeData } from "./LocalHostFakeData";
import { ProductsReducers } from "./Products";

export const reducers = combineReducers({
  Article: ArticleReducer,
  products: ProductsReducers,
  LocalProducts: LocalHostFakeData,
});
