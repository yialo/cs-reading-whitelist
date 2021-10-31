import React from 'react';

import { CONTENTS } from '../data';

import commonStyle from '@/scss/scaffold.scss';

const CONTENT_HEADERS = CONTENTS.map(({ title, id }) => ({ title, id }));

export const NamingPageContents: React.FC = () => {
  return (
    <section>
      <h2>Содержание</h2>

      <ul>
        {CONTENT_HEADERS.map((header, i) => (
          <li key={i}>
            <a className={commonStyle.link} href={`#${header.id}`}>{header.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

NamingPageContents.displayName = 'Naming-Contents';
