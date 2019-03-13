import { put } from "redux-saga/effects";
import { delay } from "redux-saga";
import * as actions from "./index";
import { firebase } from "../Firebase";
import * as ROLES from "../constants/roles";

//Action for signup for the user
export function* signupRequest(action) {
  const { email, password } = action.payload;
  const role = ROLES.CUSTOMER;
  try {
    const response = yield firebase.createUser(email, password);
    const data = {
      displayName: response.user.displayName,
      email: response.user.email,
      phoneNumber: response.user.phoneNumber,
      uid: response.user.uid
    };
    const { uid } = response.user;
    yield firebase.user(uid).set({ email, role }, { merge: true });
    yield put(actions.signupSuccess(data));
  } catch (e) {
    yield put(actions.signupError(e));
    yield delay(5000);
    yield put(actions.resetAuthMessage());
  }
}

//To create profile doctor by Admin user
export function* createUserByAdminRequest(action) {
  const {
    firstName,
    lastName,
    phone,
    states,
    city,
    street,
    type,
    zipcode,
    email,
    password,
    role
  } = action.payload;

  try {
    const response = yield firebase.createUserByAdmin(email, password);
    const { uid } = response.user;
    const userResponse = yield firebase.user(uid).get();
    if (!userResponse.exists) {
      const stateResponse = yield firebase
        .users()
        .where("role", "==", "doctor")
        .where("shippingAddress.states", "==", states).get();
      if (stateResponse.empty) {
        const shippingAddress = {
          states,
          city,
          street,
          type,
          zipcode
        };
        yield firebase.user(uid).set(
          {
            email,
            role,
            firstName,
            lastName,
            phone,
            shippingAddress
          },
          { merge: true }
        );
        yield put(
          actions.createUserByAdminSuccess(
            `Doctor's Account with ${email} has been created Successfully`
          )
        );
        yield delay(5000);
        yield put(actions.resetAuthMessage());
      } else {
        yield put(
          actions.createUserByAdminError(
            `A Doctor has been already assigned to ${states}. Please select another state `
          )
        );
        yield delay(5000);
        yield put(actions.resetAuthMessage());
      }
    }
  } catch (e) {
    yield put(actions.createUserByAdminError(e.message));
    yield delay(5000);
    yield put(actions.resetAuthMessage());
  }
}
