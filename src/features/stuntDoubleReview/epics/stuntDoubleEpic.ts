import { ActionsObservable, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, mergeMap } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import {
  FetchActorActions,
  onFetchActorActions,
} from '../actions/stuntDoubleActions';
import { ActorList } from './actorList';

export const fetchActors: Epic = (
  action$: ActionsObservable<FetchActorActions>
) =>
  action$.pipe(
    filter(isActionOf(onFetchActorActions.request)),
    mergeMap(() => {
      try {
        return of(onFetchActorActions.success(ActorList));
      } catch (ex) {
        return of(onFetchActorActions.failure(ex));
      }
    })
  );

export default [fetchActors];
