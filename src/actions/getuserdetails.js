import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

//Action for getting details of particular customer
//Used by Admin and Doctor user
export function* getCustomerDetailRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.user(uid).get();
    if (response.exists) {
      yield put(actions.getCustomerDetailSuccess({ ...response.data(), uid }));
    }
  } catch (e) {
    yield put(actions.getCustomerDetailError(e.message));
  }
}
