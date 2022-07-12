import { baseInstance } from './index';

export const fetchTrendApi = () => {
  return baseInstance.get('/trends').then(({ data }) => data);
};
