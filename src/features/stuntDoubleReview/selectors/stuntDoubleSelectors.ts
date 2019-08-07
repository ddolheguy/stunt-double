import { createSelector } from 'reselect';
import { RootState } from '../../../redux/reducers/rootReducer';

export const stuntDoubleState = (state: RootState) => state.stuntDouble;

// NOTE: Probably a little too simple for selector but wanted to show my thought process
export const stuntDoubleSelector = createSelector(
  stuntDoubleState,
  state => state
);
