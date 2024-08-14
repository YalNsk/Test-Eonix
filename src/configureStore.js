import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import createReducer from './reducers';
import getInjectors from './utils/reducerInjectors';
import homeContainerReducer from './containers/HomeContainer/reducer';

export default function configureStore(initialState = {}, history) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    createReducer(), // Initial empty reducer
    initialState,
    composeEnhancers(...enhancers)
  );

  // Initialize dynamic reducers and sagas
  store.injectedReducers = {}; // Reducer registry
  store.injectReducer = (key, reducer) => {
    if (!store.injectedReducers[key]) {
      store.injectedReducers[key] = reducer;
      store.replaceReducer(createReducer(store.injectedReducers));
    }
  };

  const { injectReducer } = getInjectors(store);

  // Inject initial reducers if available
  if (injectReducer) {
    injectReducer('homeContainer', homeContainerReducer);
  } else {
    console.error('injectReducer is not a function');
  }

  return store;
}
