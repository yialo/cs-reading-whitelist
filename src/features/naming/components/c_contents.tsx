import * as React from 'react';
import { useSelector } from 'react-redux';

import commonStyle from '@/scss/scaffold.scss';

import { selectContentHeaders } from '../ducks/selectors';

export const NamingContents: React.FC = () => {
  const headers = useSelector(selectContentHeaders);

  return (
    <section>
      <h2>Содержание</h2>

      <ul>
        {headers.map((header, i) => (
          <li key={i}>
            <a className={commonStyle.link} href={`#${header.id}`}>{header.title}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

NamingContents.displayName = 'Naming-Contents';
