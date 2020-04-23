import PropTypes from 'prop-types';
import React from 'react';

export default class ErrorBoundary extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static getDerivedStateFromError(err) {
    return { error: err };
  }

  state = {
    error: null,
  };

  render() {
    if (this.state.error) {
      return <p>Something went wrong in React app:(</p>;
    }
    return this.props.children;
  }
}
