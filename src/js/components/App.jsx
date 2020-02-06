import PropTypes from 'prop-types';
import React, { useReducer } from 'react';

import ControlBar from './ControlBar.jsx';
import Subjects from './Subjects.jsx';
import SubjectsItem from './SubjectsItem.jsx';

import filterReducer from '../filter-reducer.js';

function App(props) {
  const subjectList = props.list;

  const [state, dispatch] = useReducer(filterReducer, {
    target: 'caption',
    searchString: '',
  });

  function getFilteredList(str) {
    let filteredList;
    if (str === '') {
      filteredList = subjectList;
    } else {
      filteredList = subjectList.filter((item) => {
        const matcher = new RegExp(str, 'gi');

        switch (state.target) {
          case 'caption':
            return item.caption.match(matcher);
          case 'hashtag':
            return item.tags.some((tag) => tag.match(matcher));
          default:
            return [...subjectList];
        }
      });
    }

    return filteredList;
  }

  function handleFilterToggle(filterName) {
    dispatch({
      type: 'TOGGLE',
      payload: filterName,
    });
  }

  function handleSearch(evt) {
    const line = evt.target.value;

    dispatch({
      type: 'FILTER',
      payload: line,
    });
  }

  const filteredList = getFilteredList(state.searchString);

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
  list: PropTypes.arrayOf(
      PropTypes.objectOf(
          PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.string,
          ])
      )
  )
    .isRequired,
};

export default App;
