import { combineReducers } from "redux";
import shoppingReducer from "./Shopping/shoppingReducer";

const rootReducer = combineReducers({
  shopping: shoppingReducer,
});

export default rootReducer;
