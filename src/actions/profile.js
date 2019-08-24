import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

//Action for resetting password of the user
export function* resetPasswordRequest(action) {
  const { newPassword: password, oldPassword } = action.payload;
  try {
    //Firstly api for user sign in will be called to verify
    //the old password
    const res = yield firebase.userSignIn(
      firebase.auth.currentUser.email,
      oldPassword
    );
    if (res) {
      //If response is there api for updating password
      yield firebase.userUpdatePassword(password);
      yield put(actions.resetPasswordSuccess("Your Password has been changed"));
    }
  } catch (e) {
    yield put(actions.resetPasswordError(e.message));
  }
}

//Action for updating profile information
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

//To get profile info of users
export function* getProfileInfoRequest(action) {
  const { uid } = action.payload;
  try {
    const response = yield firebase.user(uid).get();
    if (response.exists) {
      yield put(actions.getProfileInfoSuccess(response.data()));
    }
    // else {
    //   // if user have no info registered,need to send firstName as null
    //   //For stoping unneccesary api call for getProfileInfo in requireAuth HOC
    //   yield put(actions.getProfileInfoSuccess({ firstName: null }));
    // }
  } catch (e) {
    yield put(actions.getProfileInfoError(e.message));
    // yield put(actions.getProfileInfoSuccess({ firstName: null }));
  }
}

//Action for adding date of birth 
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

//Action for updating and adding shipping address
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
  } catch (e) {
    console.log(e, "err");
  }
}
//Updating appointment status of customer
export function* updateAppointmentRequest(action) { 
  let ariaDoctor
  const { uid, status, role ,state,email} = action.payload;
  const data_detail = action.payload;
  console.log(action.payload,"in function value");// Latest user detail...
  try {    
    const response = yield firebase.user(uid).get();
    if (response.exists && response.data().approvalStatus) {
      yield firebase.user(uid).set({ approvalStatus: status }, { merge: true });
      // let x=sda(actio.payload,"doctor")
      yield put(actions.emailSendDoctorRequest({to:email,data_detail}))
      yield put(
        actions.updateAppointmentSuccess("Appointment status has been updated")
      );
    } else {
      yield firebase.user(uid).set({ approvalStatus: status }, { merge: true });
      yield firebase.fetchDoctor(state).get().then(function(res){
        for(let val of res.docs){
          if(val.data().shippingAddress.states===state){
            ariaDoctor=val.data();
            break
          }
        }
      });
      yield put(actions.emailSendDoctorRequest({to:ariaDoctor.email,data_detail}))
      //to prevent changing data for doctor
      if (!role) {        
        const userData = yield firebase.user(uid).get();
        yield put(actions.updateProfileSuccess(userData.data()));
      }
      yield put(
        actions.updateAppointmentSuccess("Appointment status has been updated")
      );
    }
  } catch (e) {    
    yield put(actions.updateAppointmentError(e.message));
  }
}

//To save gender of customer
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

//To upload photo of customer
export function* uploadPhotoRequest(action) {
  const { file } = action.payload;
  try {
    const response = yield firebase.uploadPhoto(file);
    yield put(
      actions.uploadPhotoSuccess(
        "Photo uploaded Successfully and Wait for appointment"
      )
    );
  } catch (e) {
    yield put(actions.uploadPhotoError(e.message));
  }
}

//To save the consent given by customer
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

//To save the consent given by customer
export function* emailSendAdminRequest(action) {
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


