import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext.js';
import ControlBar from './ControlBar.jsx';
import Subjects from './Subjects.jsx';
import SubjectsItem from './SubjectsItem.jsx';
import actionTypeEnum from '../action-types.js';

function App({ filteredList }) {
  const { state, dispatch } = useContext(AppContext);

  function handleFilterToggle(filterName) {
    dispatch({
      type: actionTypeEnum.TOGGLE,
      payload: filterName,
    });
  }

  function handleSearch(evt) {
    const line = evt.target.value;

    dispatch({
      type: actionTypeEnum.FILTER,
      payload: line,
    });
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
          {filteredList.map((it, i) => (
            <SubjectsItem
              key={`${it.lang}-${i + 1}`}
              caption={it.caption}
              legend={it.legend}
              tags={it.tags}
              url={it.url}
            />
          ))}
        </Subjects>
      </main>
    </React.Fragment>
  );
}

App.propTypes = {
  filteredList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
