import Type from '../actions/types.js';

const INITIAL_STATE = {
  isDark: false,
};

export default (prevState, action) => {
  const state = prevState ?? INITIAL_STATE;
  if (action.type === Type.THEME_TOGGLE) {
    return {
      ...state,
      isDark: !state.isDark,
    };
  }
  return state;
};

export const Selector = {
  isDark: (state) => state.theme.isDark,
};
