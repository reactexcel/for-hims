import { combineReducers } from "redux";
import login from "./login";
 const makeRootReducer = asyncReducers => combineReducers({
  login,
  ...asyncReducers
});
export default makeRootReducer;