import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import type { ActionCreatorType } from 'ts/reducers';

type ActionCreatorCollection = ActionCreatorType[] | { [creatorName: string]: ActionCreatorType };

export const useActions = (
  actionCreators: ActionCreatorCollection,
  deps: React.DependencyList | undefined = [],
): ReturnType<typeof useMemo> => {
  const dispatch = useDispatch();

  return useMemo(
    () => {
      if (Array.isArray(actionCreators)) {
        return actionCreators.map((creator) => bindActionCreators(creator, dispatch));
      }
      return bindActionCreators(actionCreators, dispatch);
    },
    [actionCreators, dispatch, ...(deps as unknown[])],
  );
};
