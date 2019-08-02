import { put, call } from "redux-saga/effects";
import * as actions from "./index";
import axios from "axios";
function aw(){
let x=`<div>
<div style="font-size:14px">You have a new order to review!</div>



</div>`
return x
}
const url = "https://us-central1-noleuderm-d2b6a.cloudfunctions.net/payment";

function sendDoctorEmailApi(data) {
    return axios.post(`${url}/emailsend`, data);
  }
export function* emailSendDoctorRequest(action) {
  
    const { uid, token, to,name,email,subject,message } = action.payload;
    // aw(data)
    try {
      const response = yield call(sendDoctorEmailApi,{to,name,email,subject,message})      
      yield put(actions.emailSendDoctorSuccess(response.docs));
    } catch (e) {
      yield put(actions.emailSendDoctorError(e.message));
    }
  }
