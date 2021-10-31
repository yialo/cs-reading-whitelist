import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MainLayout } from '@/layouts/c_main-layout';
import { TState } from '@/store/state';

import { NamingContents } from '../components/c_contents';
import { NamingList } from '../components/c_list';
import { ReferenceLinks } from '../components/c_reference-links';
import { ACTION_TYPE } from '../ducks/action-types';

import style from './self.scss';

const selectNamingProcess = (state: TState) => state.naming.process;

export const Naming: React.FC = () => {
  const dispatch = useDispatch();

  const process = useSelector(selectNamingProcess);

  React.useEffect(() => {
    if (process === 'IDLE') {
      dispatch({ type: ACTION_TYPE.FETCH_START });
    }
  }, [process, dispatch]);

  return (
    <MainLayout className={style.root}>
      <h1 className={style.headline}>Типовые названия UI-компонентов</h1>
      <hr />

      <ReferenceLinks />
      <hr />

      {(process === 'IDLE' || process === 'LOADING') && (
        <div>Loading...</div>
      )}

      {process === 'FAILURE' && (
        <div>Could not fetch data</div>
      )}

      {process === 'SUCCESS' && (
        <>
          <NamingContents />
          <hr />
          <NamingList />
        </>
      )}
    </MainLayout>
  );
};
