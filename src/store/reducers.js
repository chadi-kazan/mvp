import { combineReducers } from 'redux';
import mvpReducer from './mvp.reducer';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    mvp: mvpReducer,
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

