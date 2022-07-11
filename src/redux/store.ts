import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import { rootReducers } from './Reducers';
import { rootSaga } from './Saga';

const saga = createSagaMiddleware();

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(saga)));

export type RootState = ReturnType<typeof store.getState>;

saga.run(rootSaga);
