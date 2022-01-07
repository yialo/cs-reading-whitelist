import type { Action } from 'redux';

export type TAction<T, P = undefined> = P extends undefined
  ? Action<T>
  : Action<T> & { payload: P };
