export interface IAction {
  type: string;
  payload?: unknown;
}

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
