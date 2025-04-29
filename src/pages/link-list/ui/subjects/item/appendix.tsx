import { cn } from '@/shared/lib/cn';

import style from './style.scss';

export const SubjectsItemAppendix: React.FC<{
  lang: 'en' | 'ru' | undefined;
  legend: string | undefined;
  tags: string[] | undefined;
}> = ({ lang, legend = '', tags = [] }) => {
  return (
    <>
      {!!lang && (
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
