import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import { listSelector } from 'ts/selectors';
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

  const isSearchBegins = !!useSelector(listSelector.searchString);
  const [state, setState] = useState({ isExpanded: false });

  const hasNoStateChangesYetRef = useRef(true);
  const isExpanded = hasNoStateChangesYetRef.current ? isSearchBegins : state.isExpanded;

  const handleExpansion = () => {
    if (hasNoStateChangesYetRef.current) {
      setState({ isExpanded: !isSearchBegins });
    } else {
      setState((prev) => ({ isExpanded: !prev.isExpanded }));
    }

    if (hasNoStateChangesYetRef.current) {
      hasNoStateChangesYetRef.current = false;
    }
  };

  return (
    <li className={classNames(style.root_series, { [style.isExpanded]: isExpanded })}>
      <div className={style.series}>
        <span
          className={style.seriesButton}
          role="button"
          aria-expanded={isExpanded}
          onClick={handleExpansion}
          onKeyDown={(event) => {
            if (BUTTON_KEYS.includes(event.key)) {
              handleExpansion();
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

SeriesSubjectsItem.displayName = 'SubjectsSeriesItem';
