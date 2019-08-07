import { Actor } from '../../../../types/actor';
import {
  FETCH_ACTORS_FAILURE,
  FETCH_ACTORS_REQUEST,
  FETCH_ACTORS_SUCCESS,
} from '../constants/stuntDoubleConstants';
import { onFetchActorActions } from './stuntDoubleActions';

describe('Fetch Actor actions', () => {
  it('onFetchActorActions Request', () => {
    expect(onFetchActorActions.request()).toEqual({
      meta: undefined,
      type: FETCH_ACTORS_REQUEST,
      payload: undefined,
    });
  });

  it('onFetchActorActions Success', () => {
    const exampleActors: Actor[] = [
      {
        id: 1,
        firstName: 'Joe',
        lastName: 'Bloggs',
        image: '',
      },
    ];

    expect(onFetchActorActions.success(exampleActors)).toEqual({
      meta: undefined,
      type: FETCH_ACTORS_SUCCESS,
      payload: exampleActors,
    });
  });

  it('onFetchActorActions Failure', () => {
    const exampleError = new Error('my error');
    expect(onFetchActorActions.failure(exampleError)).toEqual({
      meta: undefined,
      type: FETCH_ACTORS_FAILURE,
      payload: exampleError,
    });
  });
});
