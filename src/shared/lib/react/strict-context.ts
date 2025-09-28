import * as React from 'react';

export const createStrictContext = <C>(displayName: string) => {
  const Context = React.createContext<C | undefined>(undefined);
  Context.displayName = displayName;
  return Context;
};

export const useStrictContext = <V>(
  Context: React.Context<V>,
  contextName?: string,
) => {
  const value = React.use(Context);

  if (value === undefined) {
    throw new Error(
      `Hook must be used within a ${
        Context.displayName || contextName || 'Context'
      }.Provider`,
    );
  }

  return value;
};
