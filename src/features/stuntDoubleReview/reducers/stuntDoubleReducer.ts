import { createReducer } from 'typesafe-actions';
import { Actor } from '../../../../types/actor';
import {
  FetchActorActions,
  onFetchActorActions,
} from '../actions/stuntDoubleActions';
import { StateEntity } from './type';

export const defaultState: Readonly<StateEntity<Actor[]>> = {
  state: 'INITIAL',
  fetching: false,
};

// NOTE: Deliberately not using ...state to merge existing state with new on .handleAction responses, since I want to override state.
const reducer = createReducer<StateEntity<Actor[]>, FetchActorActions>(
  defaultState
)
  .handleAction(onFetchActorActions.request, (state, action) => ({
    state: 'FETCHING',
    fetching: true,
  }))
  .handleAction(onFetchActorActions.success, (state, action) => ({
    state: 'SUCCESS',
    fetching: false,
    data: action.payload,
  }))
  .handleAction(onFetchActorActions.failure, (state, action) => ({
    state: 'FAILURE',
    fetching: false,
    error: action.payload,
  }));

export default reducer;
