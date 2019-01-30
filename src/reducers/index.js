import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import user from "./user";
import addcart from "./addremovecart";
import forgotpsw from "./forgotpsw";
import profile from "./profile";
import message from "./message";
import orders from "./orders";
import { LOGOUT_SUCCESS } from "../constants";

const makeRootReducer = asyncReducers => {
  const appReducer = combineReducers({
    user,
    forgotpsw,
    profile,
    message,
    form: formReducer,
    addcart,
    orders,
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
