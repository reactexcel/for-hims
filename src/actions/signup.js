import { put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* signupRequest(action) {
  const { email, password } = action.payload;

  try {
    const response = yield firebase.createUser(email, password);
    const data = {
      displayName: response.user.displayName,
      email: response.user.email,
      phoneNumber: response.user.phoneNumber,
      uid: response.user.uid
    };
    yield put(actions.signupSuccess(data));
  } catch (e) {
    yield put(actions.signupError(e));
    yield delay(5000);
    yield put(actions.resetAuthMessage());
  }
}

export function* createUserByAdminRequest(action) {
  const {
    firstName,
    lastName,
    phone,
    states,
    email,
    password,
    role
  } = action.payload;

  try {
    const response = yield firebase.createUserByAdmin(email, password);
    const { uid } = response.user;
    const userResponse = yield firebase.user(uid).get();
    if (!userResponse.exists) {
        yield firebase
          .user(uid)
          .set(
            { email, role, firstName, lastName, phone, states },
            { merge: true }
          );
      }
    
    console.log(response,'jhgf');
  } catch (e) {
    console.log(e, "s");
  }
}
