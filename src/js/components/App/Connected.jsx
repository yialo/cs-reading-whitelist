import { connect } from 'react-redux';

import App from './index.jsx';
import {
  fetchSubjects,
  filterList,
  toggleFilter,
  toggleTheme,
} from '../../actions/actions.js';
import { Selector as FetchSelector } from '../../reducers/fetch.js';
import { Selector as ListSelector } from '../../reducers/list.js';
import { Selector as ThemeSelector } from '../../reducers/theme.js';
import selectFilteredSubjects from '../../selectors/filtered-subjects.js';

// TODO: replace with useDispatch and useSelector hooks

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  fetchError: FetchSelector.error(state),
  filterName: ListSelector.filterName(state),
  searchString: ListSelector.searchString(state),
  hasDarkTheme: ThemeSelector.isDark(state),
  isFetchComplete: FetchSelector.isComplete(state),
  filteredList: selectFilteredSubjects(state),
});

const mapDispatchToProps = {
  onFetchStart: fetchSubjects,
  onFilterToggle: toggleFilter,
  onSearch: filterList,
  onThemeToggle: toggleTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
