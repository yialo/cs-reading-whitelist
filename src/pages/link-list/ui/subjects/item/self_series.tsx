import * as React from 'react';
import cn from 'clsx';
import { useSelector } from 'react-redux';
import type { SeriesSubject } from '@/entities/subject';
import { KEYBOARD_KEY } from '@/shared/config';
import { includes } from '@/shared/lib/typing';
import type { WithClassName } from '@/shared/ui';
import { selectSearchString } from '../../../model/selectors';
import { SubjectsItemAppendix } from './appendix';
import { SubjectsItemLink } from './link';
import style from './style.scss';

interface Props extends WithClassName {
  subject: SeriesSubject;
}

const BUTTON_KEYS = [KEYBOARD_KEY.ENTER, KEYBOARD_KEY.SPACE] as const;

export const SeriesSubjectsItem: React.FC<Props> = ({ className, subject }) => {
  const { caption, lang, legend, series, tags } = subject;

  const isEmptySearch = !!useSelector(selectSearchString);
  const [state, setState] = React.useState({ isExpanded: false });

  const hasNoStateChangesYetRef = React.useRef(true);
  const isExpanded = hasNoStateChangesYetRef.current
    ? isEmptySearch
    : state.isExpanded;

  const handleExpansion = () => {
    if (hasNoStateChangesYetRef.current) {
      setState({ isExpanded: !isEmptySearch });
    } else {
      setState((prev) => ({ isExpanded: !prev.isExpanded }));
    }

    if (hasNoStateChangesYetRef.current) {
      hasNoStateChangesYetRef.current = false;
    }
  };

  return (
    <li
      className={cn(style.root_series, className, {
        [style.isExpanded!]: isExpanded,
      })}
    >
      <div className={style.series}>
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
      {isExpanded && (
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
      )}
    </li>
  );
};

SeriesSubjectsItem.displayName = 'SubjectsItem_series';
