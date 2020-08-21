import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import ControlBar from 'ts/components/ControlBar';
import FallbackMessage from 'ts/components/FallbackMessage';
import Preloader from 'ts/components/Preloader';
import SubjectList from 'ts/components/SubjectList';
import ThemeToggle from 'ts/components/ThemeToggle';

import * as actionCreators from 'ts/actionCreators';
import { useActions } from 'ts/hooks';

import { fetchSelector, listSelector, themeSelector } from 'ts/reducers/index';
import selectFilteredSubjects from 'ts/selectFilteredSubjects';

import style from './App.scss';

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
    <div className={classNames('Page-wrapper', { 'theme_dark': hasDarkTheme })}>
      <main className="Page-content" aria-labelledby="page-title">
        <div className="Page-header">
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
            <>
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
            </>
          );
        })()}
      </main>
    </div>
  );
};
