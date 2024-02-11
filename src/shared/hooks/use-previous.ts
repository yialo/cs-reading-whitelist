import * as React from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
  const prevRef = React.useRef<T>();

  React.useEffect(() => {
    prevRef.current = value;
  }, [value]);

  return prevRef.current;
};
