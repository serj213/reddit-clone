export enum trendCostants {
  GET_TREND = 'GET_TREND',
  FETCH_TREND = 'FETCH_TREND',
}

export interface trendState {
  trendArticles: any[];
  loading: boolean;
}

interface fetchActionTrend {
  type: string;
  payload: any[];
}

export type trendReducerType = fetchActionTrend;
