import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import login from "./login";
import signup from "./signup";
import loadDummyDataReducer from "./loadDummyData";
import { LOGOUT_SUCCESS } from "../constants";

const makeRootReducer = asyncReducers => {
  const appReducer = combineReducers({
    login,
    form: formReducer,
    dummyData: loadDummyDataReducer,
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
