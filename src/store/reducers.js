import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import mvpReducer from './mvp.reducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    mvp: mvpReducer,
    router: routerReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key))
    return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
}

export default makeRootReducer;

