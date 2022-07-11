import { trendCostants } from '../../types/trend';

export const getTrends = (payload: any[]) => {
  return {
    type: trendCostants.GET_TREND,
    payload,
  };
};

export const fetchTrend = () => {
  return { type: trendCostants.FETCH_TREND };
};
