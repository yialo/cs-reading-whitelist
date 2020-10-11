import React from 'react';

import { Contents } from './Contents';
import { List } from './List';
import { ReferenceLinks } from './RerefenceLinks';

import style from './style.scss';

export const NamingPage: React.FC = () => {
  return (
    <main className={style.root}>
      <h1 className={style.headline}>Типовые названия UI-компонентов</h1>
      <hr />
      <ReferenceLinks />
      <hr />
      <Contents />
      <hr />
      <List />
    </main>
  );
};
