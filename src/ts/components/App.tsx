import classNames from 'classnames';
import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ControlBar from './ControlBar.tsx';
import FallbackMessage from './FallbackMessage.tsx';
import Preloader from './Preloader.tsx';
import SubjectList from './SubjectList.tsx';
import ThemeToggle from './ThemeToggle.tsx';

import * as Action from '../actions.ts';
import useActions from '../useActions.ts';

import { fetchSelector, listSelector, themeSelector } from '../reducers/index.ts';
import selectFilteredSubjects from '../selectFilteredSubjects.ts';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  if ($overlay) {
    $overlay.classList.add('js_hidden');
  }
};

export default function App(): React.ReactNode {
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
  } = useActions(Action);

  const handleSearch = useCallback((evt) => {
    searchInList(evt.target.value);
  }, []);

  useEffect(() => {
    disableOverlay();
    fetchSubjects();
  }, []);

  return (
    <div className={classNames('page__wrapper', { 'theme_dark': hasDarkTheme })}>
      <main className="page__content" aria-labelledby="page-title">
        <div className="page__header">
          <h1
            className="page__headline"
            id="page-title"
            lang="en"
          >
            Computer Science Reading Whitelist
          </h1>
          <ThemeToggle
            isDark={hasDarkTheme}
            onToggle={toggleTheme}
          />
        </div>
        {(() => {
          if (!isFetchComplete) {
            return <Preloader />;
          }
          return (
            <React.Fragment>
              <ControlBar
                filterTarget={filterName}
                searchString={searchString}
                onFilterToggle={toggleFilter}
                onSearch={handleSearch}
              />
              <div className="subjects page__subjects">
                {
                  fetchError
                    ? <FallbackMessage message="Ошибка загрузки" />
                    : <SubjectList list={filteredList} />
                }
              </div>
            </React.Fragment>
          );
        })()}
      </main>
    </div>
  );
}
