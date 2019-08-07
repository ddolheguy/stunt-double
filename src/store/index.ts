import { Action, applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';

import rootEpic from '../redux/epics';
import createReducer from '../redux/reducers/rootReducer';

export const configureStore = () => {
  const epicMiddleware: EpicMiddleware<
    Action<any>,
    Action<any>,
    void,
    any
  > = createEpicMiddleware();
  const middleware: any[] = [epicMiddleware];

  if (__DEV__) {
    middleware.push(createLogger({}));
  }

  const store = createStore(
    createReducer,
    undefined,
    applyMiddleware(...middleware)
  );

  epicMiddleware.run(rootEpic);
  return store as any;
};
