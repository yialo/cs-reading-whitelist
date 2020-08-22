import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import * as actionCreators from 'ts/actionCreators';
import { ControlBar } from 'ts/components/ControlBar';
import { Preloader } from 'ts/components/Preloader';
import { Subjects } from 'ts/components/Subjects';
import { ThemeToggle } from 'ts/components/ThemeToggle';
import { useActions } from 'ts/hooks';
import { fetchSelector, listSelector, themeSelector } from 'ts/reducers';
import selectFilteredSubjects from 'ts/selectFilteredSubjects';

import style from './style.scss';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  if ($overlay) {
    $overlay.classList.add('js_hidden');
  }
};

export const App: React.FC = () => {
  const fetchError = useSelector(fetchSelector.error);
  const filterName = useSelector(listSelector.filterName);
  const filteredList = useSelector(selectFilteredSubjects);
  const searchString = useSelector(listSelector.searchString);
  const hasDarkTheme = useSelector(themeSelector.isDark);
  const isFetchComplete = useSelector(fetchSelector.isComplete);

  const {
    fetchSubjects,
    searchInList,
    toggleFilter,
    toggleTheme,
  } = useActions(actionCreators);

  const handleSearch = (evt) => {
    searchInList(evt.target.value);
  };

  useEffect(() => {
    disableOverlay();
    fetchSubjects();
  }, [fetchSubjects]);

  return (
    <div className={classNames(style.root, { 'theme_dark': hasDarkTheme })}>
      <main className={style.content} aria-labelledby="page-title">
        <div className={style.header}>
          <h1
            className={style.headline}
            id="page-title"
            lang="en"
          >
            Computer Science Reading Whitelist
          </h1>
          <ThemeToggle
            className={style.themeToggle}
            isDark={hasDarkTheme}
            onToggle={toggleTheme}
          />
        </div>
        {(() => {
          if (!isFetchComplete) {
            return <Preloader />;
          }
          return (
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
          );
        })()}
      </main>
    </div>
  );
};
