import { ActionsObservable, StateObservable } from 'redux-observable';
import { toArray } from 'rxjs/operators';

import { RootState } from '../../../redux/reducers/rootReducer';
import { onFetchActorActions } from '../actions/stuntDoubleActions';
import { FETCH_ACTORS_SUCCESS } from '../constants/stuntDoubleConstants';
import { fetchActors } from './stuntDoubleEpic';

describe('stuntDoubleEpics', () => {
  it('should fetch actors list', done => {
    const action$ = ActionsObservable.of(onFetchActorActions.request());

    const state$ = {} as StateObservable<RootState>;
    fetchActors(action$, state$, undefined)
      .pipe(toArray())
      .subscribe(outputActions => {
        expect(outputActions).toHaveLength(1);
        const outputAction = outputActions[0];

        expect(outputAction.type).toBe(FETCH_ACTORS_SUCCESS);

        done();
      });
  });
});
