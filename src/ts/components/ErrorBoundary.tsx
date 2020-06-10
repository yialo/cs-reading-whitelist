import React from 'react';

interface IProps {
  children: React.ReactNode;
}

export default class ErrorBoundary extends React.Component {
  props: IProps;

  static getDerivedStateFromError(err: Error) {
    return { error: err };
  }

  state = {
    error: null,
  };

  render(): React.ReactNode {
    if (this.state.error) {
      return <p>Something went wrong in React app:(</p>;
    }
    return this.props.children;
  }
}
