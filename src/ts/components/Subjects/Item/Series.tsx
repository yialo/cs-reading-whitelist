import React, { useState } from 'react';
import classNames from 'classnames';

import type { SubjectCaption } from 'ts/types';

import style from './style.scss';

interface ISubjectsItemSeriesProps {
  caption: SubjectCaption;
}

export const SubjectsItemSeries: React.FC<ISubjectsItemSeriesProps> = ({
  caption,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <button
      className={style.series}
      type="button"
      aria-expanded={isExpanded}
    >
      {caption}
    </button>
  );
};
