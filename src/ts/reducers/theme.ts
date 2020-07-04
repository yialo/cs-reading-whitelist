import { ActionTypeEnum as Type } from '../constants';

interface IAction {
  type: string;
}

interface IState {
  isDark: boolean;
}

const INITIAL_STATE: IState = {
  isDark: false,
};

export default (prevState: IState, action: IAction): IState => {
  const state = prevState ?? INITIAL_STATE;
  if (action.type === Type.THEME_TOGGLE) {
    return {
      ...state,
      isDark: !state.isDark,
    };
  }
  return state;
};

export const selector = {
  isDark: <S extends { theme: { isDark: boolean } }>(state: S): boolean => state.theme.isDark,
};
