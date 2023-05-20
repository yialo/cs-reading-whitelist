import * as React from 'react';
import cn from 'clsx';

import style from './style.scss';

type TProps = {
  lang: string | undefined;
  legend: string | undefined;
  tags: string[] | undefined;
};

export const SubjectsItemAppendix: React.FC<TProps> = ({
  lang = '',
  legend = '',
  tags = [],
}) => {
  return (
    <>
      {Boolean(lang) && (
        <>
          {' '}
          <span className={cn(style[`langBadge_${lang}`])}>{lang}</span>
        </>
      )}
      {tags.length > 0 && (
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
      )}
      {Boolean(legend) && (
        <span className={style.legend}>{` ‒ ${legend}`}</span>
      )}
    </>
  );
};

SubjectsItemAppendix.displayName = 'SubjectsItem-Appendix';
