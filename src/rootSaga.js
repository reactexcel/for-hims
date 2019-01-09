import {takeLatest} from 'redux-saga/effects';
import * as constants from './constants';
import { loginRequest } from './actions/login';
function* watchActions(){
    yield takeLatest(constants.LOGIN_REQUEST,loginRequest)
}
export default function* rootSaga () {
    yield [
      watchActions()
    ];
  }