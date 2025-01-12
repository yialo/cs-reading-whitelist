import * as React from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
  const prevRef = React.useRef<T>(undefined);

  React.useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
};
