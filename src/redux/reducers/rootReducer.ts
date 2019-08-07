import { combineReducers } from 'redux';
import { StateType } from 'typesafe-actions';
import { DeepReadonly } from '../../utils';

import { stuntDoubleReducer } from '../../features/stuntDoubleReview';

const rootReducer = combineReducers({
  stuntDouble: stuntDoubleReducer,
});

export type RootState = DeepReadonly<StateType<typeof rootReducer>>;

export default rootReducer;
