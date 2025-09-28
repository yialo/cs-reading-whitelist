import * as React from 'react';

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect';

export const usePrevious = <T>(value: T) => {
  const prevRef = React.useRef<T>(undefined);

  useIsomorphicLayoutEffect(() => {
    prevRef.current = value;
  });

  return prevRef.current;
};
