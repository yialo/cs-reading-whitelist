import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROCESS } from '@/shared/config';
import { MainLayout, Preloader } from '@/shared/ui';
import { ControlBar } from '../components/c_control-bar';
import { Subjects } from '../components/c_subjects';
import { LIST_PAGE_SIZE } from '../config';
import {
  fetchSubjects,
  searchInList,
  showNextListPage,
  toggleFilter,
  toggleSorting,
} from '../ducks/actions';
import {
  selectError,
  selectFilter,
  selectIsLastPage,
  selectPage,
  selectProcess,
  selectSearchString,
  selectSortedAmount,
  selectSorting,
  selectVisibleList,
} from '../ducks/selectors';
import type { TFilter, TSorting } from '../enums';
import style from './style.scss';

export const LinkList: React.FC = () => {
  const process = useSelector(selectProcess);
  const error = useSelector(selectError);

  const filter = useSelector(selectFilter);
  const searchString = useSelector(selectSearchString);

  const page = useSelector(selectPage);
  const sortedAmount = useSelector(selectSortedAmount);
  const sorting = useSelector(selectSorting);
  const subjectList = useSelector(selectVisibleList);
  const isLastPage = useSelector(selectIsLastPage);

  const dispatch = useDispatch();

  const visibleAmount = isLastPage ? sortedAmount : LIST_PAGE_SIZE * page;

  const handleSearch = (value: string) => {
    dispatch(searchInList(value));
  };

  const handleShowMoreClick = () => {
    dispatch(showNextListPage());
  };

  const handleFilterToggle = (nextFilterName: TFilter) => {
    dispatch(toggleFilter(nextFilterName));
  };

  const handleSortingToggle = (nextSortingName: TSorting) => {
    dispatch(toggleSorting(nextSortingName));
  };

  React.useEffect(() => {
    if (process === PROCESS.IDLE) {
      dispatch(fetchSubjects());
    }
  }, [process, dispatch]);

  const renderContent = () => {
    switch (process) {
      case PROCESS.IDLE:
      case PROCESS.LOADING:
        return <Preloader className={style.preloader} />;

      default:
        return (
          <>
            <div className={style.header}>
              <h1 className={style.headline}>
                Полезные материалы по Computer Science
              </h1>
            </div>

            <ControlBar
              className={style.controlBar}
              filterTarget={filter}
              searchString={searchString}
              sortingTarget={sorting}
              totalAmount={sortedAmount}
              visibleAmount={visibleAmount}
              onFilterToggle={handleFilterToggle}
              onSearch={handleSearch}
              onSortingToggle={handleSortingToggle}
            />

            <Subjects
              className={style.subjects}
              list={subjectList}
              hasFetchError={!!error}
              isLastPage={isLastPage}
              onShowMoreClick={handleShowMoreClick}
            />
          </>
        );
    }
  };

  return (
    <MainLayout>
      <div className={style.root}>{renderContent()}</div>
    </MainLayout>
  );
};
