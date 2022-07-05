import { combineReducers } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import filter from './filter';
import { contentsListApi } from 'src/services/contentsList';

const rootReducer = combineReducers({
  filter,
  [contentsListApi.reducerPath]: contentsListApi.reducer,
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
