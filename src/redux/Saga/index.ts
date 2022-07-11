import { all } from 'redux-saga/effects';
import { trendWatchers } from './trendSaga';

export function* rootSaga() {
  yield all([trendWatchers()]);
}
