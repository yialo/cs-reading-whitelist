import React, { useState } from 'react';
import classNames from 'classnames';

import type { ISeriesSubject } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';
import { SubjectsItemLink as Link } from './Link';

import style from './style.scss';

interface ISeriesSubjectsItemProps {
  subject: ISeriesSubject;
}

const BUTTON_KEYS = ['Enter', ' '];

export const SeriesSubjectsItem: React.FC<ISeriesSubjectsItemProps> = ({ subject }) => {
  const {
    caption,
    lang,
    legend,
    series,
    tags,
  } = subject;

  const [isExpanded, setIsExpanded] = useState(true);

  const revertState = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <li className={classNames(style.root_series, { [style.isExpanded]: isExpanded })}>
      <div className={style.series}>
        <span
          className={style.seriesButton}
          role="button"
          aria-expanded={isExpanded}
          onClick={revertState}
          onKeyDown={(event) => {
            if (BUTTON_KEYS.includes(event.key)) {
              revertState();
            }
          }}
          tabIndex={0}
        >
          {caption}
        </span>
        <Appendix {...{ lang, legend, tags }} />
      </div>
      {isExpanded && (
        <ul className={style.seriesList}>
          {
            series.map(({
              caption: itemCaption,
              tags: itemTags,
              legend: itemLegend,
              url,
            }) => (
              <li key={url}>
                <Link {...{ caption: itemCaption, lang, url }} />
                <Appendix {...{ legend: itemLegend, tags: itemTags }} />
              </li>
            ))
          }
        </ul>
      )}
    </li>
  );
};

SeriesSubjectsItem.displayName = 'series(SubjectsItem)';
