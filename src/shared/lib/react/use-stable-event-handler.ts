import * as React from 'react';

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export const useStableEventHandler = <Args extends unknown[], R>(
  handler: (...args: Args) => R,
) => {
  const handlerRef = React.useRef(handler);

  useIsomorphicLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return React.useCallback((...args: Args) => {
    const fn = handlerRef.current;
    return fn(...args);
  }, []);
};
