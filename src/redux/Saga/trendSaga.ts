import { put, takeEvery, call } from 'redux-saga/effects';
import { trendCostants } from '../../types/trend';
import { fetchTrendApi } from '../../Api/trendApi';
import { loadingStatus } from '../../types/trend';
import { setTrends, trendLoadingStatus } from '../Actions/trend';

function* fetchTrendSaga(): any {
  try {
    const result = yield call(fetchTrendApi);
    yield put(setTrends(result));
  } catch (error) {
    yield put(trendLoadingStatus(trendCostants.ERROR_TREND));
  }
}

export function* trendWatchers() {
  yield takeEvery(trendCostants.FETCH_TREND, fetchTrendSaga);
}
