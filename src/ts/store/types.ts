import type { AnyAction } from 'redux';

import type { ActionNameType } from './actionTypes';

export interface IAction extends AnyAction {
  type: ActionNameType;
  payload?: any;
}

type Dispatch = (action: IAction) => void;
type StateGetter<RS> = () => RS;

export type SyncActionCreatorGenericType<RS> = (...args: any[]) => (
  | IAction
  | ((dispatch: Dispatch, getState: StateGetter<RS>) => void)
);

type AsyncAction = (dispatch: Dispatch) => Promise<void>;
export type AsyncActionCreatorType = (...args: any[]) => AsyncAction;
