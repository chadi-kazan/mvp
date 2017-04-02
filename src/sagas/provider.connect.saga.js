import { put, takeEvery } from 'redux-saga/effects';
import { changeProvider, connectToProvider, REQUEST_PROVIDER_CHANGE } from '../actions/mvp.actions';

function* connect(action) {
 try {
  
   //trigger change provider 
  yield put(changeProvider(action.payload));
  //trigger connect
  
  yield put(connectToProvider(action.payload));
  } catch (e) {
  console.log('failed to switch provider');
  }
}

export function* switchProviderSaga() {
  yield takeEvery(REQUEST_PROVIDER_CHANGE, connect);
}
