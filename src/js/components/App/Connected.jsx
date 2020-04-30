import { connect } from 'react-redux';

import App from './index.jsx';
import {
  fetchSubjects,
  filterList,
  toggleFilter,
} from '../../store/actions.js';
import filterSubjects from '../../utils/filter-subjects.js';

const mapStateToProps = (state, ownProps) => {
  const {
    fetchError,
    filterName,
    searchString,
    subjectList,
    isFetchComplete,
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
