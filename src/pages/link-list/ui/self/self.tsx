import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROCESS } from '@/shared/config';
import { MainLayout, Preloader } from '@/shared/ui';
import { LIST_PAGE_SIZE } from '../../config';
import type { TFilter, TSorting } from '../../config';
import { linkListSlice } from '../../model/slice';
import { ControlBar } from '../control-bar';
import { Subjects } from '../subjects';
import style from './style.scss';

export const LinkList: React.FC = () => {
  const process = useSelector(linkListSlice.selectors.process);
  const error = useSelector(linkListSlice.selectors.error);

  const filter = useSelector(linkListSlice.selectors.filter);
  const searchString = useSelector(linkListSlice.selectors.searchString);

  const page = useSelector(linkListSlice.selectors.page);
  const sortedAmount = useSelector(linkListSlice.selectors.sortedAmount);
  const sorting = useSelector(linkListSlice.selectors.sorting);
  const subjectList = useSelector(linkListSlice.selectors.visibleList);
  const isLastPage = useSelector(linkListSlice.selectors.isLastPage);

  const dispatch = useDispatch();

  const visibleAmount = isLastPage ? sortedAmount : LIST_PAGE_SIZE * page;

  const handleSearch = (value: string) => {
    dispatch(linkListSlice.actions.search(value));
  };

  const handleShowMoreClick = () => {
    dispatch(linkListSlice.actions.getNextPage());
  };

  const handleFilterToggle = (nextFilterName: TFilter) => {
    dispatch(linkListSlice.actions.toggleFilter(nextFilterName));
  };

  const handleSortingToggle = (nextSortingName: TSorting) => {
    dispatch(linkListSlice.actions.toggleSorting(nextSortingName));
  };

  React.useEffect(() => {
    if (process === PROCESS.IDLE) {
      dispatch(linkListSlice.actions.fetchStart());
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
