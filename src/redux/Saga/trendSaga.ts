import { put, takeEvery, call } from 'redux-saga/effects';
import { trendCostants, trendItemT } from '../../types/trend';
import { fetchTrendApi } from '../../Api/trendApi';
import { setTrends, trendLoadingStatus } from '../Actions/trend';
import { AxiosResponse } from 'axios';

function* fetchTrendSaga() {
  try {
    const result: trendItemT[] = yield call(fetchTrendApi);
    yield put(setTrends(result));
  } catch (error) {
    yield put(trendLoadingStatus(trendCostants.ERROR_TREND));
  }
}

export function* trendWatchers() {
  yield takeEvery(trendCostants.FETCH_TREND, fetchTrendSaga);
}
