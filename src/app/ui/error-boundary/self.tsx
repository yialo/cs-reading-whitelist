import * as React from 'react';

import style from './style.scss';

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  static getDerivedStateFromError(err: Error) {
    return { error: err };
  }

  state: State = {
    error: null,
  };

  render() {
    if (this.state.error) {
      return <p className={style.root}>Something went wrong in React app:(</p>;
    }
    return this.props.children;
  }
}
