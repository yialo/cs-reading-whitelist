import React from 'react';

import Subject from './Subject.jsx';

const INITIAL_ITEM_AMOUNT = 10;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this._fullList = props.list;
  }

  render() {
    const initialListSize = this._fullList.length > INITIAL_ITEM_AMOUNT
      ? INITIAL_ITEM_AMOUNT
      : this._fullList.length;
    const currentList = this._fullList.slice(0, initialListSize);

    return (
      <React.Fragment>
        <h1 className="s_text-block page__heading">Computer Science Reading Whitelist</h1>
        <main className="chapter">
          <ul className="s_list chapter__list">
            {currentList.map((item, i) => (
              <Subject
                key={i}
                {...item}
              />
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}
