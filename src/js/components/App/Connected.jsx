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

const withBoundProps = connect(mapStateToProps, mapDispatchToProps);
const Connected = withBoundProps(App);
Connected.displayName = 'connected(App)';
export default Connected;
