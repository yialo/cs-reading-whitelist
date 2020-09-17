import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

// TODO: move specific components to page dir

import * as actionCreators from 'ts/actionCreators';
import { ControlBar } from 'ts/components/ControlBar';
import { Preloader } from 'ts/components/Preloader';
import { Subjects } from 'ts/components/Subjects';
import { LIST_PAGE_SIZE } from 'ts/constants';
import { useActions } from 'ts/hooks';
import type { ActionCreatorType } from 'ts/reducers';
import {
  fetchSelector,
  getIsLastPage,
  getSortedAmount,
  getVisibleList,
  listSelector,
} from 'ts/selectors';

import style from './style.scss';

interface IProps {
  className?: string;
}

export const LinkListPage: React.FC<IProps> = ({ className }) => {
  const fetchError = useSelector(fetchSelector.error);
  const filterName = useSelector(listSelector.filterName);
  const page = useSelector(listSelector.page);
  const searchString = useSelector(listSelector.searchString);
  const sortedAmount = useSelector(getSortedAmount);
  const sortingName = useSelector(listSelector.sortingName);
  const subjectList = useSelector(getVisibleList);
  const isFetchComplete = useSelector(fetchSelector.isComplete);
  const isLastPage = useSelector(getIsLastPage);

  const {
    fetchSubjects,
    searchInList,
    showNextListPage,
    toggleFilter,
    toggleSorting,
  } = useActions(actionCreators) as {
    [key: string]: ActionCreatorType;
  };

  const visibleAmount = isLastPage ? sortedAmount : (LIST_PAGE_SIZE * page);

  const handleSearch: React.ChangeEventHandler = (evt) => {
    searchInList((evt.target as HTMLInputElement).value);
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
            className={style.controlBar}
            filterTarget={filterName}
            searchString={searchString}
            sortingTarget={sortingName}
            totalAmount={sortedAmount}
            visibleAmount={visibleAmount}
            onFilterToggle={toggleFilter}
            onSearch={handleSearch}
            onSortingToggle={toggleSorting}
          />
          <Subjects
            className={style.subjects}
            list={subjectList}
            hasFetchError={!!fetchError}
            isLastPage={isLastPage}
            onShowMoreClick={showNextListPage}
          />
        </>
      )}
    </main>
  );
};

LinkListPage.defaultProps = {
  className: '',
};
