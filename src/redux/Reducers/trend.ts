import produce, { Draft } from 'immer';
import { trendCostants, trendState, trendReducerType } from '../../types/trend';

const initialState: trendState = {
  trendArticles: [],
  loading: false,
};

export const trendReducer = produce((draft: Draft<trendState>, action: trendReducerType) => {
  const { type, payload } = action;
  switch (type) {
    case trendCostants.GET_TREND:
      draft.trendArticles = payload;
  }
}, initialState);
