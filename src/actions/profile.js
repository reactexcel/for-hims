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

    if (response.exists && response.data().firstName) {
      yield firebase.user(uid).update({ firstName, lastName, phone });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
    } else {
      yield firebase
        .user(uid)
        .set({ firstName, lastName, phone }, { merge: true });
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

export function* addDateOfBirthRequest(action) {
  const { dateOfBirth, uid } = action.payload;
  try {
    yield firebase.user(uid).set({ dateOfBirth }, { merge: true });
    const userData = yield firebase.user(uid).get();
    yield put(actions.updateProfileSuccess(userData.data()));
    yield put(actions.addDateOfBirthSuccess("Your date has been added"));
  } catch (e) {
    yield put(actions.addDateOfBirthError(e.message));
    yield put(actions.updateProfileError(e.message));
  }
}

export function* addShipingAddressRequest(action) {
  const { shippingAddress, uid } = action.payload;
  try {
    const response = yield firebase.user(uid).get();

    if (response.exists && response.data().shippingAddress) {
      yield firebase.user(uid).update({ shippingAddress });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
      yield put(
        actions.addShippingAddressSuccess("Your address has been updated")
      );
    } else {
      yield firebase.user(uid).set({ shippingAddress }, { merge: true });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
      yield put(
        actions.addShippingAddressSuccess("Your address has been saved")
      );
    }
  } catch (e) {
    yield put(actions.updateProfileError(e.message));
    yield put(actions.addShippingAddressError(e.message));
  }
}
