export type StateEntity<T> =
  | { state: 'INITIAL'; fetching: false }
  | { state: 'FETCHING'; fetching: true }
  | { state: 'SUCCESS'; fetching: false; data: T }
  | { state: 'FAILURE'; fetching: false; error: Error };
