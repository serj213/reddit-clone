import { put, takeEvery } from 'redux-saga/effects';
import { trendCostants } from '../../types/trend';

function* fetchTrendSaga() {
  yield alert('dfdfdf');
}

export function* trendWatchers() {
  yield takeEvery(trendCostants.FETCH_TREND, fetchTrendSaga);
}
