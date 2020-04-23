import { connect } from 'react-redux';

import App from './index.jsx';
import {
  filterList,
  toggleFilter,
  fetchSubjects,
} from '../../store/actions.js';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, ...state });

const mapDispatchToProps = {
  onFilterToggle: toggleFilter,
  onFetchStart: fetchSubjects,
  onSearch: filterList,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
