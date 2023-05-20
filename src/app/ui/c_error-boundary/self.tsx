import * as React from 'react';
import style from './style.scss';

type TProps = {
  children: React.ReactNode;
};

type TState = {
  error: Error | null;
};

export class ErrorBoundary extends React.Component<TProps, TState> {
  static getDerivedStateFromError(err: Error) {
    return { error: err };
  }

  state: TState = {
    error: null,
  };

  render() {
    if (this.state.error) {
      return <p className={style.root}>Something went wrong in React app:(</p>;
    }
    return this.props.children;
  }
}
