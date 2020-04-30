import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';

import ControlBar from '../ControlBar/index.jsx';
import FallbackMessage from '../FallbackMessage/index.jsx';
import Preloader from '../Preloader/index.jsx';
import SubjectList from '../SubjectList/index.jsx';
import ThemeToggle from '../ThemeToggle/index.jsx';

const disableOverlay = () => {
  const $overlay = document.getElementById('overlay');
  $overlay.classList.add('js_hidden');
};

function App(props) {
  const {
    fetchError,
    filterName,
    filteredList,
    searchString,
    hasDarkTheme,
    isFetchComplete,
    onFetchStart,
    onFilterToggle,
    onSearch,
    onThemeToggle,
  } = props;

  const handleSearch = useCallback((evt) => {
    onSearch(evt.target.value);
  }, []);

  useEffect(() => {
    disableOverlay();
    onFetchStart();
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
            onToggle={onThemeToggle}
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
                onFilterToggle={onFilterToggle}
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

App.defaultProps = {
  fetchError: null,
  filteredList: [],
};

App.propTypes = {
  fetchError: PropTypes.instanceOf(Error),
  filterName: PropTypes.oneOf(['caption', 'hashtag']).isRequired,
  filteredList: PropTypes.arrayOf(PropTypes.object),
  hasDarkTheme: PropTypes.bool.isRequired,
  isFetchComplete: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  onFetchStart: PropTypes.func.isRequired,
  onFilterToggle: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onThemeToggle: PropTypes.func.isRequired,
};

export default App;
