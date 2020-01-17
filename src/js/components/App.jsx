import React from 'react';

import Button from './Button.jsx';
import Filter from './Filter.jsx';
import Subject from './Subject.jsx';

const INITIAL_ITEM_AMOUNT = 10;

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterMode: 'none',
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
          <Filter />
          <div className="subjects page-content__subjects">
            <ul className="s_list subjects__list">
              {currentList.map((item, i) => (
                <Subject
                  key={`${item.lang}-${i + 1}`}
                  {...item}
                />
              ))}
            </ul>
            <Button
              classNames={['subjects__button']}
              type="submit"
              legend="Загрузить ещё"
            />
          </div>
        </main>
      </React.Fragment>
    );
  }
}
