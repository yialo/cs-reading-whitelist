import React from 'react';

interface IProps {
  children: React.ReactNode;
}

interface IState {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<IProps, IState> {
  static getDerivedStateFromError(err: Error): IState {
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
