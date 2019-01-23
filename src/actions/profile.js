import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* resetPasswordRequest(action) {
  const { newPassword: password } = action.payload;
  try {
    yield firebase.userUpdatePassword(password);
    yield put(actions.resetPasswordSuccess("Your Password is resetted"));
  } catch (e) {
    yield put(actions.resetPasswordError(e.message));
  }
}

export function* updateProfileRequest(action) {
  const { uid, firstName, lastName, phone } = action.payload;
  try {
    const response = yield firebase.user(uid).get();

    if (response.exists) {
      yield firebase.user(uid).update({ firstName, lastName, phone });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
    } else {
      yield firebase.user(uid).set({ firstName, lastName, phone });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
    }
  } catch (e) {
    yield put(actions.updateProfileError(e.message));
  }
}

export function* getProfileInfoRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.user(uid).get();
    if (response.exists) {
      yield put(actions.getProfileInfoSuccess(response.data()));
    } else {
      // if user have no info registered,need to send firstName as null
      //For stoping unneccesary api call for getProfileInfo in requireAuth HOC
      yield put(actions.getProfileInfoSuccess({ firstName: null }));
    }
  } catch (e) {
    yield put(actions.getProfileInfoError(e.message));
  }
}
