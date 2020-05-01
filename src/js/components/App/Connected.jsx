import { connect } from 'react-redux';

import App from './index.jsx';
import {
  fetchSubjects,
  filterList,
  toggleFilter,
  toggleTheme,
} from '../../actions/actions.js';
import getFilteredSubjects from '../../selectors/get-filtered-subjects.js';

// TODO: replace with useDispatch and useSelector hooks

const mapStateToProps = (state, ownProps) => {
  const {
    fetch: {
      error: fetchError,
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
    filteredList: getFilteredSubjects(state),
  };
};

const mapDispatchToProps = {
  onFetchStart: fetchSubjects,
  onFilterToggle: toggleFilter,
  onSearch: filterList,
  onThemeToggle: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
