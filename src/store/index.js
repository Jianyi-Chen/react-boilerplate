/**
 * @description 初始化redux
 */
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import immutableData from './reducers/immutableData';
import test from './reducers/test';

const rootState = combineReducers({
  test,
  immutableData,
});

const middlewares = [thunk];

// redux_devtools扩展
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootState,
  composeEnhancers(applyMiddleware(...middlewares))
);

store.subscribe(() => console.log(store.getState()));

export default store;
