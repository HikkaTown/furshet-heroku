import {useMemo} from "react";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import reducer from './reducers/rootReducer';
import {composeWithDevTools} from "redux-devtools-extension";

let store;

function initStore(preloadedState = {}) {
  return createStore(reducer, preloadedState, composeWithDevTools(applyMiddleware(thunk)));
  // return createStore(reducer, preloadedState, composeWithDevTools())
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })

    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])

  return store;
}