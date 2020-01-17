import React from 'react';

import Filter from './Filter.jsx';
import Subjects from './Subjects.jsx';

const INITIAL_ITEM_AMOUNT = 10;

const FILTER_LIST = [
  ['none', '[отключена]'],
  ['caption', 'по названию'],
  ['url', 'по ссылке'],
  ['lang', 'по языку'],
  ['tag', 'по тегам'],
  ['legend', 'по описанию'],
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: FILTER_LIST[0][0],
    };

    this._fullList = props.list;
  }

  render() {
    const initialListSize = this._fullList.length > INITIAL_ITEM_AMOUNT
      ? INITIAL_ITEM_AMOUNT
      : this._fullList.length;
    const currentList = this._fullList.slice(0, initialListSize);

    return (
      <React.Fragment>
        <h1 className="page__heading">Computer Science Reading Whitelist</h1>
        <main className="page-content page__content">
          <Filter list={FILTER_LIST} />
          <Subjects list={currentList} />
        </main>
      </React.Fragment>
    );
  }
}
