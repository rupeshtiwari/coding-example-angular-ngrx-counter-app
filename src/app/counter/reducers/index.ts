import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { decrement, increment, reset } from '../actions';

export const countersFeatureKey = 'counters';

export const initialState: CounterState = { count: 0 };

export interface CounterState {
  count: number;
}

export interface State extends fromRoot.State {
  [countersFeatureKey]: CounterState;
}

const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log(`Received: ${increment.type} Action`);
    logReducerChange(state);
    const newState = { ...state, count: state.count + 1 };
    logReducerChange(newState, false);

    return newState;
  }),
  on(decrement, (state) => {
    console.log(`Received: ${decrement.type} Action`);
    logReducerChange(state);
    const newState = { ...state, count: state.count - 1 };
    logReducerChange(newState, false);

    return newState;
  }),
  on(reset, (state) => {
    console.log(`Received: ${reset.type} Action`);
    logReducerChange(state);
    logReducerChange(initialState, false);

    return initialState;
  })
);

function logReducerChange(state: any, isBefore = true) {
  console.log(isBefore ? '---BEFORE---\n' : '---AFTER---\n', state);
}

export function reducers(state: CounterState, action: Action) {
  return counterReducer(state, action);
}

export const selectCounterState =
  createFeatureSelector<CounterState>(countersFeatureKey);

export const getCount = createSelector(
  selectCounterState,
  (state) => state.count
);
