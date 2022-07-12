import produce, { Draft } from 'immer';
import { trendCostants, trendState, trendReducerType, loadingStatus } from '../../types/trend';

const initialState: trendState = {
  trendArticles: [],
  loading: loadingStatus.LOADING,
};

export const trendReducer = produce((draft: Draft<trendState>, action: trendReducerType) => {
  console.log(action.type);

  switch (action.type) {
    case trendCostants.SET_TREND:
      draft.trendArticles = action.payload;
      draft.loading = loadingStatus.SUCCESS;
      break;
    case trendCostants.ERROR_TREND:
      draft.loading = loadingStatus.ERROR;
      break;

    default:
      break;
  }
}, initialState);
