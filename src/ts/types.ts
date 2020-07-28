export interface IAction {
  type: string;
  payload?: unknown;
}

type SyncActionCreator = (...args: any[]) => IAction;
type AsyncActionCreator = (...args: any[]) => Promise<any>;

export type ActionCreatorType = SyncActionCreator | AsyncActionCreator;

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
