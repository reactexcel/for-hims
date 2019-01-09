import { delay } from "redux-saga";
import { call, put } from "redux-saga/effects";
import * as actions from "./index";

export function* loginRequest(action) {
  yield call(delay, 2000);
  localStorage.setItem("auth", "true");
  yield put(actions.loginSuccess());
}

export function* logout(action) {
  localStorage.removeItem("auth");
  yield put(actions.logoutSuccess());
}
