import { all } from 'redux-saga/effects';
import watchSaga from './sagas';

export default function* rootSaga() {
  yield all([...watchSaga]);
}
