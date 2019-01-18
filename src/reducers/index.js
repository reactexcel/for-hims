import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import login from "./login";
import addcart from "./addremovecart";
import forgotpsw from "./forgotpsw";
import { LOGOUT_SUCCESS } from "../constants";

const makeRootReducer = asyncReducers => {
  const appReducer = combineReducers({
    login,
    forgotpsw,
    form: formReducer,
    addcart,
    ...asyncReducers
  });
  return (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
      state = undefined;
    }
    return appReducer(state, action);
  };
};
export default makeRootReducer;
