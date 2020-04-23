import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';

import ControlBar from '../ControlBar/index.jsx';
import FallbackMessage from '../FallbackMessage/index.jsx';
import Preloader from '../Preloader/index.jsx';
import SubjectList from '../SubjectList/index.jsx';

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
    isFetchComplete,
    onFetchStart,
    onFilterToggle,
    onSearch,
  } = props;

  const handleSearch = useCallback((evt) => {
    onSearch(evt.target.value);
  }, []);

  useEffect(() => {
    disableOverlay();
    onFetchStart();
  }, []);

  return (
    <main className="page__content">
      <h1 className="page__heading" lang="en">Computer Science Reading Whitelist</h1>
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
  isFetchComplete: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  onFetchStart: PropTypes.func.isRequired,
  onFilterToggle: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default App;
