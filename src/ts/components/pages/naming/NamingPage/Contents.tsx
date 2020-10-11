import React from 'react';

import { CONTENTS } from './data';

import style from './style.scss';

const CONTENT_HEADERS = CONTENTS.map(({ title, id }) => ({ title, id }));

export const Contents: React.FC = () => {
  return (
    <section>
      <h2>Содержание</h2>
      <ul>
        {CONTENT_HEADERS.map((header, i) => (
          <li key={i}>
            <a className={style.link} href={`#${header.id}`}>{header.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

Contents.defaultProps = {
  className: '',
};

Contents.displayName = 'NamingPageContents';
