import { Types } from '../actions';
import axios from 'axios'
import { takeEvery, call, put, fork, delay } from 'redux-saga/effects';


  function* watchGetUsersRequest() {



  
  }

  const watchSaga = [fork(watchGetUsersRequest)];

export default watchSaga;   