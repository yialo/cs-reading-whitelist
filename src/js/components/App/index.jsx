import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import AppContext from '../../contexts/AppContext.js';
import ControlBar from '../ControlBar/index.jsx';
import Subjects from '../Subjects/index.jsx';
import Subject from '../Subject/index.jsx';
import ActionCreator from '../../reducers/filter-action-creator.js';

function App({ filteredList }) {
  const { state, dispatch } = useContext(AppContext);

  function handleFilterToggle(filterName) {
    dispatch(ActionCreator.toggleFilter(filterName));
  }

  function handleSearch(evt) {
    const textline = evt.target.value;
    dispatch(ActionCreator.filterList(textline));
  }

  return (
    <React.Fragment>
      <h1 className="page__heading">Computer Science Reading Whitelist</h1>
      <main className="page-content page__content">
        <ControlBar
          filterTarget={state.target}
          onFilterToggle={handleFilterToggle}
          onSearch={handleSearch}
          searchString={state.searchString}
        />
        <Subjects>
          {
            filteredList.length > 0 ? (
              <ul className="s_list subjects__list">
                {
                  filteredList.map((it, i) => (
                    <Subject
                      key={`${it.lang}-${i + 1}`}
                      caption={it.caption}
                      lang={it.lang}
                      legend={it.legend}
                      tags={it.tags}
                      url={it.url}
                    />
                  ))
                }
              </ul>
            ) : <p className="subjects__fallback-message">Ничего не найдено</p>
          }
        </Subjects>
      </main>
    </React.Fragment>
  );
}

App.propTypes = {
  filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
