import { Reducer } from 'redux';

import { TProcess } from '@/enums';
import { TAction } from '@/types/redux';

import { TNamingSection } from '../types';
import { ACTION_TYPE } from './action-types';

export type TNamingState = {
  process: TProcess;
  error: Error | null;
  content: TNamingSection[];
};

type TFetchStartAction = TAction<typeof ACTION_TYPE.FETCH_START>;
type TFetchSuccessAction = TAction<typeof ACTION_TYPE.FETCH_SUCCESS, TNamingSection[]>;
type TFetchFailureAction = TAction<typeof ACTION_TYPE.FETCH_FAILURE, Error>;

type TNamingAction = TFetchStartAction | TFetchSuccessAction | TFetchFailureAction;

export type TNamingReducer = Reducer<TNamingState, TNamingAction>;
