export default function (state, action) {
  switch (action.type) {
    case 'FILTER':
      return {
        ...state,
        searchString: action.payload,
      };
    case 'TOGGLE':
      return {
        ...state,
        target: action.payload,
      };
    default:
      return state;
  }
}
