import { combineReducers, createStore } from 'redux';
import {Modal} from './reducers';
export const reducers = combineReducers({
  Modal,
});

// store.js
export function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState);
  return store;
};

export const store = configureStore();