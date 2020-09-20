import React, { useState } from 'react';
import classNames from 'classnames';

import type { ISeriesSubject } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';

import style from './style.scss';

interface ISubjectsItemOfSeriesProps {
  subject: ISeriesSubject;
}

export const SubjectsItemOfSeries: React.FC<ISubjectsItemOfSeriesProps> = ({ subject }) => {
  const {
    caption,
    lang,
    legend,
    series,
    tags,
  } = subject;

  const [isExpanded, setIsExpanded] = useState(false);

  const revertState = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <li className={classNames(style.root_series, { 'isExpanded': isExpanded })}>
      <div className={style.series}>
        <span
          className={style.seriesButton}
          role="button"
          aria-expanded={isExpanded}
          onClick={revertState}
          onKeyDown={(event) => {
            if (['Enter', ' '].includes(event.key)) {
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
          {series.map(({ caption: seriesItemCaption, url }) => (
            <li key={url}>
              <a className={style.link} href={url} lang={lang}>{seriesItemCaption}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

SubjectsItemOfSeries.displayName = 'SubjectsItem_series';
