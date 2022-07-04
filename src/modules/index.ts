import { combineReducers } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import contentsFilter from './contentsFilter';

const rootReducer = combineReducers({
  contentsFilter,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

type StateSelector<T> = (state: RootState) => T;
type EqualityFn<T> = (left: T, right: T) => boolean;

export function useRootState<T>(
  selector: StateSelector<T>,
  equalityFn?: EqualityFn<T>,
) {
  return useSelector(selector, equalityFn);
}
