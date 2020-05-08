import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ControlBar from '../ControlBar/index.jsx';
import FallbackMessage from '../FallbackMessage/index.jsx';
import Preloader from '../Preloader/index.jsx';
import SubjectList from '../SubjectList/index.jsx';
import ThemeToggle from '../ThemeToggle/index.jsx';

import * as Action from '../../actions.js';
import useActions from '../../useActions.js';

import { fetchSelector, listSelector, themeSelector } from '../../reducers/index.js';
import selectFilteredSubjects from '../../selectFilteredSubjects.js';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  $overlay.classList.add('js_hidden');
};

export default function App() {
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
    <div className={hasDarkTheme ? 'page__wrapper theme_dark' : 'page__wrapper'}>
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
