import { trendCostants } from '../../types/trend';

export const setTrends = (payload: any[]) => {
  return {
    type: trendCostants.SET_TREND,
    payload,
  };
};

export const fetchTrend = () => {
  return { type: trendCostants.FETCH_TREND };
};

export const trendLoadingStatus = (currentState: trendCostants) => {
  return { type: currentState };
};
