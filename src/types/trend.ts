export enum trendCostants {
  SET_TREND = 'SET_TREND',
  FETCH_TREND = 'FETCH_TREND',
  ERROR_TREND = 'ERROR_TREND',
}

export enum loadingStatus {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface trendState {
  trendArticles: any[];
  loading: loadingStatus;
}

export interface errorActionTrend {
  type: trendCostants.ERROR_TREND;
}

interface fetchActionTrend {
  type: trendCostants.SET_TREND;
  payload: any[];
}

export type trendReducerType = fetchActionTrend | errorActionTrend;
