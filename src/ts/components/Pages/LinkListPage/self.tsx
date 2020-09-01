import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import * as actionCreators from 'ts/actionCreators';
import { ControlBar } from 'ts/components/ControlBar';
import { Preloader } from 'ts/components/Preloader';
import { Subjects } from 'ts/components/Subjects';
import { useActions } from 'ts/hooks';
import {
  fetchSelector,
  listSelector,
  selectFilteredSubjects,
} from 'ts/selectors';

import style from './style.scss';

interface IProps {
  className?: string;
}

export const LinkListPage: React.FC<IProps> = ({ className }) => {
  const fetchError = useSelector(fetchSelector.error);
  const filterName = useSelector(listSelector.filterName);
  const filteredList = useSelector(selectFilteredSubjects);
  const searchString = useSelector(listSelector.searchString);
  const isFetchComplete = useSelector(fetchSelector.isComplete);

  const {
    fetchSubjects,
    searchInList,
    toggleFilter,
  } = useActions(actionCreators);

  const handleSearch: React.ChangeEventHandler = (evt) => {
    searchInList(evt.target.value);
  };

  useEffect(() => {
    fetchSubjects();
  }, [fetchSubjects]);

  return (
    <main className={classNames(style.root, className)}>
      <div className={style.header}>
        <h1 className={style.headline} lang="en">
          Computer Science Reading Whitelist
        </h1>
      </div>
      {!isFetchComplete && (
        <Preloader />
      )}
      {isFetchComplete && (
        <>
          <ControlBar
            className={style.filter}
            filterTarget={filterName}
            searchString={searchString}
            onFilterToggle={toggleFilter}
            onSearch={handleSearch}
          />
          <Subjects
            className={style.subjects}
            list={filteredList}
            hasFetchError={fetchError}
          />
        </>
      )}
    </main>
  );
};

LinkListPage.defaultProps = {
  className: '',
};