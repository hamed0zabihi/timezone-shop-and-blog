import { combineReducers } from "redux";
import { ArticlesReducer, OneArticle } from "./Articles";
import { Cart } from "./Cart";
import { GetSelectedProductRedecer } from "./GetSelectedProduct";
import LocalFakeData from "./LocalFakeData";
import { OrderReducer } from "./OrderReducer";
import { UserReducer } from "./User";
import { HobbyReducer } from "./Hobby";

export const reducers = combineReducers({
  articles: ArticlesReducer,
  article: OneArticle,
  productsLocal: LocalFakeData,
  product: GetSelectedProductRedecer,
  cart: Cart,
  user: UserReducer,
  order: OrderReducer,
  hobby: HobbyReducer,
});
