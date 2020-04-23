import { connect } from 'react-redux';

import App from './index.jsx';
import {
  fetchSubjects,
  filterList,
  toggleFilter,
} from '../../store/actions.js';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, ...state });

const mapDispatchToProps = {
  onFetchStart: fetchSubjects,
  onFilterToggle: toggleFilter,
  onSearch: filterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
