import type { Reducer } from 'redux';

import type { TProcess } from '@/enums';
import type { TAction } from '@/types/redux';

import type { TNamingSection } from '../types';
import type { ACTION_TYPE } from './action-types';

export type TNamingState = {
  process: TProcess;
  error: Error | null;
  content: TNamingSection[];
};

type TFetchStartAction = TAction<typeof ACTION_TYPE.FETCH_START>;
type TFetchSuccessAction = TAction<typeof ACTION_TYPE.FETCH_SUCCESS, TNamingSection[]>;
type TFetchFailureAction = TAction<typeof ACTION_TYPE.FETCH_FAILURE, Error>;

export type TNamingAction = TFetchStartAction | TFetchSuccessAction | TFetchFailureAction;

export type TNamingReducer = Reducer<TNamingState, TNamingAction>;
