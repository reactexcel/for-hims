import { put, call } from "redux-saga/effects";
import * as actions from "./index";
import axios from "axios";

const url = "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/payment";

function sendDoctorEmailApi(data) {
    return axios.post(`${url}/emailsend`, data);
  }
  
export function* emailSendDoctorRequest(action) {
  console.log(action.payload,'Value......')

    const { uid, token, to,name,email,subject,message } = action.payload;
    try {
      const response = yield call(sendDoctorEmailApi,{to,name,email,subject,message})      
      yield put(actions.emailSendDoctorSuccess(response.docs));
    } catch (e) {
      yield put(actions.emailSendDoctorError(e.message));
    }
  }
