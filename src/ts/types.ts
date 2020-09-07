import { ACTION_TYPES, FILTERS, SORTING } from './constants';

export type $Values<O> = O[keyof O];

export interface IAction {
  type: $Values<typeof ACTION_TYPES>;
  payload?: any;
}

export type FilterName = $Values<typeof FILTERS>;
export type SortingName = $Values<typeof SORTING>;

type Dispatch = (action: IAction) => void;
type StateGetter<RS> = () => RS;

type SyncActionCreator<RS> = (...args: any[]) => (
  | IAction
  | ((dispatch: Dispatch, getState: StateGetter<RS>) => void)
);
type AsyncActionCreator = (...args: any[]) => Promise<any>;

export type ActionCreatorGenericType<RS> = SyncActionCreator<RS> | AsyncActionCreator;

export interface ISubject {
  caption: string;
  lang: string;
  legend?: string;
  tags: string[];
  url: string;
}

export type InputModeType = (
  | 'decimal'
  | 'email'
  | 'none'
  | 'numeric'
  | 'search'
  | 'tel'
  | 'text'
  | 'url'
  | undefined
);
