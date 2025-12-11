import * as React from 'react';

export const usePrevious = <V>(
  value: V,
  equalityFn: (prev: V | undefined, next: V) => boolean = (prev, next) =>
    prev === next,
) => {
  const [state, setState] = React.useState<{
    value: V;
    prev: V | undefined;
  }>({
    value,
    prev: undefined,
  });

  const current = state.value;

  if (!equalityFn(current, value)) {
    setState({
      value,
      prev: current,
    });
  }

  return state.prev;
};
