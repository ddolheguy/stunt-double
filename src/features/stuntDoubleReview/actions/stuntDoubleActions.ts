import { ActionType, createAsyncAction } from 'typesafe-actions';

import { Actor } from '../../../../types/actor';
import {
  FETCH_ACTORS_FAILURE,
  FETCH_ACTORS_REQUEST,
  FETCH_ACTORS_SUCCESS,
} from '../constants/stuntDoubleConstants';

export const onFetchActorActions = createAsyncAction(
  FETCH_ACTORS_REQUEST,
  FETCH_ACTORS_SUCCESS,
  FETCH_ACTORS_FAILURE
)<void, Actor[], Error>();

export type FetchActorActions = ActionType<typeof onFetchActorActions>;
