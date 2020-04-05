import { connect } from 'react-redux';

import App from './index.jsx';
import ActionCreator from '../../store/action-creator.js';
import { initialState } from '../../store/reducer.js';

const mapStateToProps = (state, ownProps) => {
  const totalProps = {
    ...ownProps,
  };
  Object.keys(initialState).forEach((fieldName) => {
    totalProps[fieldName] = state[fieldName];
  });
  return totalProps;
};

const mapDispatchToProps = (dispatch) => ({
  onFilterToggle: (...args) => {
    dispatch(ActionCreator.toggleFilter(...args));
  },
  onFetchComplete: (data) => {
    dispatch(ActionCreator.showSubjectsList(data));
  },
  onFetchError: (err) => {
    dispatch(ActionCreator.showFetchError(err));
  },
  onSearch: (...args) => {
    dispatch(ActionCreator.filterList(...args));
  },
});

const withAdditionalProps = connect(mapStateToProps, mapDispatchToProps);
const Connected = withAdditionalProps(App);
Connected.displayName = 'connected(App)';
export default Connected;
