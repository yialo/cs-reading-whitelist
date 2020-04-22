import { connect } from 'react-redux';

import App from './index.jsx';
import {
  filterList,
  toggleFilter,
  showSubjectsList,
  showFetchError,
} from '../../store/actions.js';

const mapStateToProps = (state, ownProps) => ({ ...ownProps, ...state });

const mapDispatchToProps = {
  onFilterToggle: toggleFilter,
  onFetchComplete: showSubjectsList,
  onFetchError: showFetchError,
  onSearch: filterList,
};

const withBoundProps = connect(mapStateToProps, mapDispatchToProps);
const Connected = withBoundProps(App);
Connected.displayName = 'connected(App)';
export default Connected;
