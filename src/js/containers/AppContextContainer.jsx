import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

import App from '../components/App.jsx';
import AppContext from '../contexts/AppContext.js';
import filterReducer, { INITIAL_STATE } from '../reducers/filter-reducer.js';

function AppContextContainer({ list }) {
  const [state, dispatch] = useReducer(filterReducer, { ...INITIAL_STATE });

  const subjectList = list;

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
            return true;
        }
      });
    }

    return filteredList;
  }

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <App filteredList={getFilteredList(state.searchString)} />
    </AppContext.Provider>
  );
}

AppContextContainer.propTypes = {
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

export default AppContextContainer;
