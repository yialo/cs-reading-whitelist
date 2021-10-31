import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Preloader } from '@/components/c_preloader';
import { LIST_PAGE_SIZE } from '@/constants';
import {
  fetchSubjects,
  searchInList,
  showNextListPage,
  toggleFilter,
  toggleSorting,
} from '@/ducks/action-creators';
import {
  fetchSelector,
  getIsLastPage,
  getSortedAmount,
  getVisibleList,
  listSelector,
} from '@/ducks/selectors';
import { TFilterName, TSortingName } from '@/types';

import { ControlBar } from '../components/c_control-bar';
import { Subjects } from '../components/c_subjects';

import style from './style.scss';

export const LinkList: React.FC = () => {
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
    dispatch(searchInList(evt.target.value));
  };

  const handleShowMoreClick = () => {
    dispatch(showNextListPage());
  };

  const handleFilterToggle = (nextFilterName: TFilterName) => {
    dispatch(toggleFilter(nextFilterName));
  };

  const handleSortingToggle = (nextSortingName: TSortingName) => {
    dispatch(toggleSorting(nextSortingName));
  };

  useEffect(() => {
    dispatch(fetchSubjects());
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
        ) : <Preloader className={style.preloader} />
      }
    </main>
  );
};
