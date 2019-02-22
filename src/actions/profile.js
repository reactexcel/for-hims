import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

export function* resetPasswordRequest(action) {
  const { newPassword: password, oldPassword } = action.payload;
  try {
    const res = yield firebase.userSignIn(
      firebase.auth.currentUser.email,
      oldPassword
    );
    if (res) {
      yield firebase.userUpdatePassword(password);
      yield put(actions.resetPasswordSuccess("Your Password has been changed"));
    }
  } catch (e) {
    yield put(actions.resetPasswordError(e.message));
  }
}

export function* updateProfileRequest(action) {
  const { uid, firstName, lastName, phone, email } = action.payload;
  try {
    const response = yield firebase.user(uid).get();

    if (response.exists && response.data().firstName) {
      yield firebase.user(uid).update({ firstName, lastName, phone });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
    } else {
      yield firebase
        .user(uid)
        .set({ firstName, lastName, phone, email }, { merge: true });
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
    // yield put(actions.getProfileInfoSuccess({ firstName: null }));
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
      yield firebase
        .user(uid)
        .update({ shippingAddress: [...shippingAddress] });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
      yield put(
        actions.addShippingAddressSuccess("Your address has been updated")
      );
    } else {
      yield firebase
        .user(uid)
        .set({ shippingAddress: [shippingAddress] }, { merge: true });
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

export function* validateOldPasswordRequest(action) {
  const { password } = action.payload;
  try {
    const response = yield firebase.validateOldPassword(password);
    console.log(response);
  } catch (e) {
    console.log(e, "err");
  }
}

export function* updateAppointmentRequest(action) {
  const { uid, status } = action.payload;
  try {
    const response = yield firebase.user(uid).get();
    if (response.exists && response.data().appointmentStatus) {
      yield firebase.user(uid).update({ appointmentStatus: status });
    } else {
      yield firebase
        .user(uid)
        .set({ appointmentStatus: status }, { merge: true });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
      yield put(
        actions.updateAppointmentSuccess(
          "Your Appointment status has been updated"
        )
      );
    }
  } catch (e) {
    yield put(actions.updateAppointmentError(e.message));
  }
}

export function* saveGenderRequest(action) {
  const { uid, gender } = action.payload;
  try {
    const response = yield firebase.user(uid).get();
    if (response.exists && response.data().gender) {
      yield put(actions.saveGenderSuccess("Your Gender is already saved"));
    } else {
      yield firebase.user(uid).set({ gender }, { merge: true });
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
      yield put(actions.saveGenderSuccess("Your Gender has been updated"));
    }
  } catch (e) {
    yield put(actions.saveGenderError(e));
  }
}

export function* uploadPhotoRequest(action) {
  const { file } = action.payload;
  try {
    const response = yield firebase.uploadPhoto(file);
    if (response.status === "success") {
      yield actions.uploadPhotoSuccess("Photo uploadedd Successfully");
    }
  } catch (e) {
    yield actions.uploadPhotoSuccess(e.message);
  }
}

export function* savingConsentRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.user(uid).get();
    if (response.exists && response.data().consent) {
      yield put(actions.savingConsentSuccess("Your Consent is already saved"));
    } else {
      yield firebase.user(uid).set(
        {
          consent: {
            consentProvided: true,
            dateOfConsent: new Date()
          }
        },
        { merge: true }
      );
      const userData = yield firebase.user(uid).get();
      yield put(actions.updateProfileSuccess(userData.data()));
      yield put(actions.savingConsentSuccess("Your Consent has been saved"));
    }
  } catch (e) {
    yield put(actions.savingConsentError(e));
  }
}
