// utils/reducerInjectors.js
import invariant from 'invariant';
import { isEmpty, isFunction, isString } from 'lodash';
import createReducer from '../reducers';

export function injectReducerFactory(store, isValid) {
  return function injectReducer(key, reducer) {
    if (!isValid) {
      invariant(
        isString(key) && !isEmpty(key) && isFunction(reducer),
        'injectReducer: Expected `reducer` to be a reducer function'
      );
    }

    if (store.injectedReducers[key] && store.injectedReducers[key] === reducer) {
      return;
    }

    store.injectedReducers[key] = reducer;
    store.replaceReducer(createReducer(store.injectedReducers));
  };
}

export default function getInjectors(store) {
  invariant(store, 'getInjectors: Expected a valid redux store');

  return {
    injectReducer: injectReducerFactory(store, true),
  };
}