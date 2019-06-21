import { put } from "redux-saga/effects";
import * as actions from "./index";
import { firebase } from "../Firebase";

//Action for sending message
export function* sendMessageRequest(action) {
  const { uid, message } = action.payload;
  try {
    yield firebase
    .userMessages(uid)
    .add(action.payload);
    const resp = yield firebase
    .userMessages(uid)
    .orderBy("timestamp", "asc")
    .get();
    const res=resp.docs
    yield put(actions.sendMessageSuccess({res,uid}));
  } catch (e) {
    yield put(actions.sendMessageError(e.message));
  }
}

//Action for getting all the messages of the user
export function* getAllMessageRequest(action) {
  const { uid } = action.payload;
  console.log(uid,'yyyyyyyy');
  
  try {
    const response = yield firebase
      .userMessages(uid)
      .orderBy("timestamp", "asc")
      .get();
      const res=response.docs
    yield put(actions.getAllMessageSuccess({res,uid}));
  } catch (e) {
    console.log(e.message);
    
    yield put(actions.getAllMessageError(e.message));
  }
}

//Action for updating the status of message to read 
export function* messageReadStatusRequest(action) {
  const { uid, messageId } = action.payload;
  try {
    yield firebase
      .userMessages(uid)
      .doc(messageId)
      .update({ read: true });
    yield put(actions.messageReadStatusSuccess());
    const response = yield firebase
      .userMessages(uid)
      .orderBy("timestamp", "desc")
      .get();
    yield put(actions.getAllMessageSuccess(response.docs));
  } catch (e) {
    yield put(actions.messageReadStatusError(e.message));
  }
}

export function* areaUserRequest(action) {
  const { states } = action.payload;  
  try {
  const response=  yield firebase
      .fetchStateWiseUser(states).then((res)=>{
        return res
      })
      yield put(actions.areaUserSuccess(response));
      
   
  } catch (e) {
    yield put(actions.areaUserError(e.message));
  }
}



export function* fetchStateDoctorRequest(action) {
  const { uid,state } = action.payload;  
  try {
   let response= yield firebase.fetchDoctor(state).get().then(function(res){
      for(let val of res.docs){
        if(val.data().shippingAddress.states===state){
          console.log(val);
          
          return val.data();
        }
      }
    });
    console.log(response,'jjjjjjjjjjjjj');
    
      yield put(actions.fetchStateDoctorSuccess(response));
  
  } catch (e) {
    yield put(actions.fetchStateDoctorError(e));
  }
}