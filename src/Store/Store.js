import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartReducer from "../reducers";
const initialState = {
  cart: [],
};

const store = createStore(
  cartReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
