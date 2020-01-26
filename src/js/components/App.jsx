import React from 'react';

import Filter from './Filter.jsx';
import Subjects from './Subjects.jsx';

const DEFAULT_LIST_LENGTH_INCREMENT = 10;

const FILTER_LIST = [
  ['none', '[отключена]'],
  ['caption', 'по названию'],
  ['url', 'по ссылке'],
  ['lang', 'по языку'],
  ['tag', 'по тегам'],
  ['legend', 'по описанию'],
];

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onLoadMore = this._onLoadMore.bind(this);

    this._fullList = props.list;

    this.state = {
      filter: FILTER_LIST[0][0],
      listLength: (
        this._fullList.length < DEFAULT_LIST_LENGTH_INCREMENT
          ? this._fullList.length
          : DEFAULT_LIST_LENGTH_INCREMENT
      ),
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="page__heading">Computer Science Reading Whitelist</h1>
        <main className="page-content page__content">
          <Filter list={FILTER_LIST} />
          <Subjects
            list={this._currentList}
            onButtonClick={this._onLoadMore}
          />
        </main>
      </React.Fragment>
    );
  }

  get _currentList() {
    return this._fullList.slice(0, this.state.listLength);
  }

  _onLoadMore() {
    this.setState((state) => {
      const listRestLength = this._fullList.length - state.listLength;

      const increment = listRestLength < DEFAULT_LIST_LENGTH_INCREMENT
        ? listRestLength
        : DEFAULT_LIST_LENGTH_INCREMENT;

      return {
        listLength: state.listLength + increment,
      };
    });
  }
}
