import { Actor } from '../../../../types/actor';
import { onFetchActorActions } from '../actions/stuntDoubleActions';
import reducer, { defaultState } from './stuntDoubleReducer';

describe('Stunt Double reducer', () => {
  it('Fetching', () => {
    expect(reducer(defaultState, onFetchActorActions.request())).toEqual({
      state: 'FETCHING',
      fetching: true,
    });
  });

  it('Successfully loaded', () => {
    const exampleActors: Actor[] = [
      {
        id: 1,
        firstName: 'Joe',
        lastName: 'Bloggs',
        image: '',
      },
    ];

    expect(
      reducer(defaultState, onFetchActorActions.success(exampleActors))
    ).toEqual({
      state: 'SUCCESS',
      fetching: false,
      data: exampleActors,
    });
  });

  it('Failure', () => {
    const exampleError = new Error('my error');
    expect(
      reducer(defaultState, onFetchActorActions.failure(exampleError))
    ).toEqual({
      state: 'FAILURE',
      fetching: false,
      error: exampleError,
    });
  });
});
