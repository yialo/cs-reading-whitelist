import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Preloader } from '@/shared/ui';
import { PROCESS } from '@/enums';
import { MainLayout } from '@/layouts/c_main-layout';
import type { TState } from '@/store/state';

import { NamingContents } from '../components/c_contents';
import { NamingList } from '../components/c_list';
import { ReferenceLinks } from '../components/c_reference-links';
import { ACTION_TYPE } from '../ducks/action-types';

import style from './self.scss';

const selectNamingProcess = (state: TState) => state.naming.process;
const selectNamingError = (state: TState) => state.naming.error;

export const Naming: React.FC = () => {
  const dispatch = useDispatch();

  const process = useSelector(selectNamingProcess);
  const error = useSelector(selectNamingError);

  React.useEffect(() => {
    if (process === PROCESS.IDLE) {
      dispatch({ type: ACTION_TYPE.FETCH_START });
    }
  }, [process, dispatch]);

  const renderContent = () => {
    switch (process) {
      case PROCESS.IDLE:
      case PROCESS.LOADING:
        return <Preloader className={style.preloader} />;

      case PROCESS.FAILURE:
        return error ? <div>{error.toString()}</div> : null;

      default:
        return (
          <div>
            <h1 className={style.headline}>Типовые названия UI-компонентов</h1>
            <hr />

            <ReferenceLinks />
            <hr />

            <NamingContents />
            <hr />
            <NamingList />
          </div>
        );
    }
  };

  return (
    <MainLayout>
      <div className={style.root}>
        {renderContent()}
      </div>
    </MainLayout>
  );
};
