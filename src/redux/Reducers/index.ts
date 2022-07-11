import { combineReducers } from 'redux';
import { trendReducer } from './trend';

export const rootReducers = combineReducers({
  trends: trendReducer,
});
