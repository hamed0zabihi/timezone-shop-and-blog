import { combineReducers } from "redux";
import { ArticleReducer } from "./Articles";

export const reducers = combineReducers({ Article: ArticleReducer });
