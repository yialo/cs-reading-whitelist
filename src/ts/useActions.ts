import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreatorType } from 'ts/types';

type ActionCreatorCollection = ActionCreatorType[] | { [creatorName: string]: ActionCreatorType };

export default (
  actionCreators: ActionCreatorCollection,
  deps?: any[],
): ReturnType<typeof useMemo> => {
  const dispatch = useDispatch();
  return useMemo(
    () => {
      if (Array.isArray(actionCreators)) {
        return actionCreators.map((creator) => bindActionCreators(creator, dispatch));
      }
      return bindActionCreators(actionCreators, dispatch);
    },
    deps ? [dispatch, ...deps] : [dispatch],
  );
};
