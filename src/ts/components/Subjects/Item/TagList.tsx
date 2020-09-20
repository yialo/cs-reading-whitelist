import React from 'react';

import type { SubjectTag } from 'ts/types';

import style from './style.scss';

interface ISubjectsItemTagListProps {
  tags: SubjectTag[];
}

export const SubjectsItemTagList: React.FC<ISubjectsItemTagListProps> = ({ tags }) => {
  return (
    <ul className={style.tags}>
      {tags.map((tag, i) => {
        if (!tag) {
          return null;
        }

        return (
          <li className={style.tag} key={i}>
            {` #${tag}`}
          </li>
        );
      })}
    </ul>
  );
};
