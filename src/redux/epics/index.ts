import { combineEpics } from 'redux-observable';
import { stuntDoubleEpics } from '../../features/stuntDoubleReview';

const epicRegistry = [...stuntDoubleEpics];

export default combineEpics(...epicRegistry);
