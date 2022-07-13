import { combineReducers } from 'redux';
import { trendReducer } from './trend';
import { postReducer } from './posts';

export const rootReducers = combineReducers({
  trends: trendReducer,
  posts: postReducer,
});
