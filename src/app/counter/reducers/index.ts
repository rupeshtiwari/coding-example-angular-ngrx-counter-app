import * as fromRoot from "../../reducers";

import { increment, decrement, reset } from "../actions";
import {
  createReducer,
  on,
  Action,
  createFeatureSelector,
  createSelector
} from "@ngrx/store";

export const countersFeatureKey = "counters";

export const initialState: CounterState = { count: 0 };

export interface CounterState {
  count: number;
}

export interface State extends fromRoot.State {
  [countersFeatureKey]: CounterState;
}

const _counterReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, count: state.count + 1 })),
  on(decrement, state => ({ ...state, count: state.count + 1 })),
  on(reset, state => initialState)
);

export function reducers(state: CounterState, action: Action) {
  return _counterReducer(state, action);
}

export const selectCounterState = createFeatureSelector<CounterState>(
  countersFeatureKey
);

export const getCount = createSelector(selectCounterState, state => state.count);
