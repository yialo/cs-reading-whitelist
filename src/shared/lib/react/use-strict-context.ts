import * as React from 'react';

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
