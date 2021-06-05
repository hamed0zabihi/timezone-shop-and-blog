import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { GetArticles } from "../Actions/Blog/Articles/GetArticles";
import GetProdcuts from "../Actions/Products/GetProductjs";
import { reducers } from "../Reducers";

export const Store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
//
Store.dispatch(GetArticles());
Store.dispatch(GetProdcuts());
//subscribe
Store.subscribe(() => console.log(Store.getState()));
