import { connect } from 'react-redux';

import App from './index.jsx';
import {
  fetchSubjects,
  filterList,
  toggleFilter,
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
  } = state;

  return {
    ...ownProps,
    fetchError,
    filterName,
    searchString,
    isFetchComplete,
    filteredList: filterSubjects(searchString, subjectList, filterName),
  };
};

const mapDispatchToProps = {
  onFetchStart: fetchSubjects,
  onFilterToggle: toggleFilter,
  onSearch: filterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
