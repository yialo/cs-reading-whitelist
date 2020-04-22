import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';

import ControlBar from '../ControlBar/index.jsx';
import FallbackMessage from '../FallbackMessage/index.jsx';
import Preloader from '../Preloader/index.jsx';
import Subject from '../Subject/index.jsx';

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
    subjectList,
    isFetchComplete,
    onFetchComplete,
    onFetchError,
    onFilterToggle,
    onSearch,
  } = props;

  // TODO: move this logics to async action creator with Redux Thunk
  const fetchSubjectList = useCallback(() => {
    const apiUrl = `${process.env.PUBLIC_PATH}response/subjects.json?${Date.now()}`;
    window.fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        onFetchComplete(responseData.data);
      })
      .catch((err) => {
        onFetchError(err);
      });
  }, []);

  const handleSearch = useCallback((evt) => {
    const textline = evt.target.value;
    onSearch(textline, subjectList, filterName);
  }, [subjectList, filterName]);

  useEffect(() => {
    disableOverlay();
    fetchSubjectList();
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
              onFilterToggle={(newFilterName) => {
                onFilterToggle(searchString, subjectList, newFilterName);
              }}
              onSearch={handleSearch}
              searchString={searchString}
            />
            <div className="subjects page__subjects">
              {(() => {
                if (fetchError) {
                  return <FallbackMessage message="Ошибка загрузки" />;
                }
                if (filteredList.length > 0) {
                  return (
                    <ul className="s_list subjects__list">
                      {filteredList.map((subject) => (
                        <Subject
                          key={subject.url}
                          caption={subject.caption}
                          lang={subject.lang}
                          legend={subject.legend}
                          tags={subject.tags}
                          url={subject.url}
                        />
                      ))}
                    </ul>
                  );
                }
                return <FallbackMessage message="Ничего не найдено" />;
              })()}
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
  subjectList: [],
};

App.propTypes = {
  fetchError: PropTypes.instanceOf(Error),
  filterName: PropTypes.oneOf(['caption', 'hashtag']).isRequired,
  filteredList: PropTypes.arrayOf(PropTypes.object),
  isFetchComplete: PropTypes.bool.isRequired,
  searchString: PropTypes.string.isRequired,
  subjectList: PropTypes.arrayOf(PropTypes.object),
  onFetchComplete: PropTypes.func.isRequired,
  onFetchError: PropTypes.func.isRequired,
  onFilterToggle: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default App;
