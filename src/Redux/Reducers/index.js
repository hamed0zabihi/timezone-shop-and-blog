import { combineReducers } from "redux";
import { ArticleReducer } from "./Articles";
import LocalFakeData from "./LocalFakeData";

export const reducers = combineReducers({
  Article: ArticleReducer,
  ProductLocal: LocalFakeData,
});
