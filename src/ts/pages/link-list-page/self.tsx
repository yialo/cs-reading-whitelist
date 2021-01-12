import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actionCreators from 'ts/action-creators';
import { LIST_PAGE_SIZE } from 'ts/constants';
import {
  fetchSelector,
  getIsLastPage,
  getSortedAmount,
  getVisibleList,
  listSelector,
} from 'ts/selectors';
import type { FilterName, SortingName } from 'ts/types';

import { ControlBar } from './c_control-bar';
import { Preloader } from './c_preloader';
import { Subjects } from './c_subjects';

import style from './style.scss';

export const LinkListPage: React.FC = () => {
  const fetchError = useSelector(fetchSelector.error);
  const filterName = useSelector(listSelector.filterName);
  const page = useSelector(listSelector.page);
  const searchString = useSelector(listSelector.searchString);
  const sortedAmount = useSelector(getSortedAmount);
  const sortingName = useSelector(listSelector.sortingName);
  const subjectList = useSelector(getVisibleList);
  const isFetchComplete = useSelector(fetchSelector.isComplete);
  const isLastPage = useSelector(getIsLastPage);

  const dispatch = useDispatch();

  const visibleAmount = isLastPage ? sortedAmount : (LIST_PAGE_SIZE * page);

  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    dispatch(actionCreators.searchInList(evt.target.value));
  };

  const handleShowMoreClick = () => {
    dispatch(actionCreators.showNextListPage());
  };

  const handleFilterToggle = (nextFilterName: FilterName) => {
    dispatch(actionCreators.toggleFilter(nextFilterName));
  };

  const handleSortingToggle = (nextSortingName: SortingName) => {
    dispatch(actionCreators.toggleSorting(nextSortingName));
  };

  useEffect(() => {
    dispatch(actionCreators.fetchSubjects());
  }, [dispatch]);

  return (
    <main className={style.root}>
      <div className={style.header}>
        <h1 className={style.headline}>Полезные материалы по Computer Science</h1>
      </div>

      {
        isFetchComplete ? (
          <>
            <ControlBar
              className={style.controlBar}
              filterTarget={filterName}
              searchString={searchString}
              sortingTarget={sortingName}
              totalAmount={sortedAmount}
              visibleAmount={visibleAmount}
              onFilterToggle={handleFilterToggle}
              onSearch={handleSearch}
              onSortingToggle={handleSortingToggle}
            />
            <Subjects
              className={style.subjects}
              list={subjectList}
              hasFetchError={!!fetchError}
              isLastPage={isLastPage}
              onShowMoreClick={handleShowMoreClick}
            />
          </>
        ) : <Preloader />
      }
    </main>
  );
};
