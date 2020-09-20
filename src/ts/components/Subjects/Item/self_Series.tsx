import React, { useState } from 'react';
import classNames from 'classnames';

import type { ISeriesSubject, SubjectTag } from 'ts/types';

import { SubjectsItemAppendix as Appendix } from './Appendix';
import { SubjectsItemLink as Link } from './Link';
import { SubjectsItemTagList as TagList } from './TagList';

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

  const [isExpanded, setIsExpanded] = useState(true);

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
          {series.map(({ caption: seriesItemCaption, tags: seriesItemTags, url }) => (
            <li key={url}>
              <Link {...{ caption: seriesItemCaption, lang, url }} />
              {Boolean(seriesItemTags) && (
                <TagList tags={seriesItemTags as SubjectTag[]} />
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

SubjectsItemOfSeries.displayName = 'SubjectsItem_series';
