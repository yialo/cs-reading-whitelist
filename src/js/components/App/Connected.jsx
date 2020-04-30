import { connect } from 'react-redux';

import App from './index.jsx';
import {
  fetchSubjects,
  filterList,
  toggleFilter,
  toggleTheme,
} from '../../actions/actions.js';
import filterSubjects from '../../utils/filter-subjects.js';

const mapStateToProps = (state, ownProps) => {
  const {
    fetch: {
      error: fetchError,
      list: subjectList,
      isComplete: isFetchComplete,
    },
    list: {
      filterName,
      searchString,
    },
    theme: {
      isDark: hasDarkTheme,
    },
  } = state;

  return {
    ...ownProps,
    fetchError,
    filterName,
    searchString,
    hasDarkTheme,
    isFetchComplete,
    filteredList: filterSubjects(subjectList, searchString, filterName),
  };
};

const mapDispatchToProps = {
  onFetchStart: fetchSubjects,
  onFilterToggle: toggleFilter,
  onSearch: filterList,
  onThemeToggle: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
