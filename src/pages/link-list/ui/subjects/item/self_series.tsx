import * as React from 'react';
import { useSelector } from 'react-redux';

import type { SeriesSubject } from '@/entities/subject';
import { KEYBOARD_KEY } from '@/shared/config';
import { cn } from '@/shared/lib/cn';
import { ReactActivity } from '@/shared/lib/react';
import { includes } from '@/shared/lib/typing';

import { linkListSlice } from '../../../model/slice';
import { SubjectsItemAppendix } from './appendix';
import { SubjectsItemLink } from './link';
import style from './style.scss';

const BUTTON_KEYS = [KEYBOARD_KEY.ENTER, KEYBOARD_KEY.SPACE] as const;

export const SeriesSubjectsItem: React.FC<{
  className?: string;
  subject: SeriesSubject;
}> = ({ className, subject }) => {
  const { caption, lang, legend, series, tags } = subject;

  const isFilledSearch = !!useSelector(linkListSlice.selectors.searchString);
  const [expansion, setExpansion] = React.useState({
    isExpanded: isFilledSearch,
    hasAlreadyChanged: false,
  });

  const handleExpansion = () => {
    setExpansion((prev) => {
      if (prev.hasAlreadyChanged) {
        return { ...prev, isExpanded: !prev.isExpanded };
      }
      return { isExpanded: !isFilledSearch, hasAlreadyChanged: true };
    });
  };

  const isExpanded = expansion.hasAlreadyChanged
    ? expansion.isExpanded
    : isFilledSearch;

  return (
    <li
      className={cn(style.root_series, className, {
        [style.isExpanded]: isExpanded,
      })}
    >
      <div>
        <span
          className={style.seriesButton}
          role="button"
          aria-expanded={isExpanded}
          onClick={handleExpansion}
          onKeyDown={(event) => {
            if (includes(BUTTON_KEYS, event.key)) {
              handleExpansion();
            }
          }}
          tabIndex={0}
        >
          {caption}
        </span>

        <SubjectsItemAppendix {...{ lang, legend, tags }} />
      </div>

      <ReactActivity visible={isExpanded}>
        <ul className={style.seriesList}>
          {series.map(
            ({
              caption: itemCaption,
              lang: itemLang,
              tags: itemTags,
              legend: itemLegend,
              url,
            }) => (
              <li key={url} className={style.seriesItem}>
                <SubjectsItemLink {...{ caption: itemCaption, lang, url }} />
                <SubjectsItemAppendix
                  lang={itemLang}
                  legend={itemLegend}
                  tags={itemTags}
                />
              </li>
            ),
          )}
        </ul>
      </ReactActivity>
    </li>
  );
};

SeriesSubjectsItem.displayName = 'SubjectsItem_series';
