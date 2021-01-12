import { useEffect, useRef } from 'react';

export const usePrevious = <T>(value: T): T => {
  const prevRef = useRef<T>();

  useEffect(() => {
    prevRef.current = value;
  });

  return (prevRef.current as T);
};
