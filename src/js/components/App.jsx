import PropTypes from 'prop-types';
import React from 'react';

import FilterForm from './FilterForm.jsx';
import Subjects from './Subjects.jsx';
import SubjectsItem from './SubjectsItem.jsx';

const DEFAULT_LIST_LENGTH_INCREMENT = 10;

const FILTER_LIST = [
  ['none', '[отключена]'],
  ['caption', 'по названию'],
  ['url', 'по ссылке'],
  ['lang', 'по языку'],
  ['tag', 'по тегам'],
  ['legend', 'по описанию'],
];

class App extends React.PureComponent {
  constructor(props) {
    super(props);

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
          <FilterForm list={FILTER_LIST} />
          <Subjects onButtonClick={this._onLoadMore}>
            {this._getCurrentList().map((it, i) => (
              <SubjectsItem key={`${it.lang}-${i + 1}`} {...it} />
            ))}
          </Subjects>
        </main>
      </React.Fragment>
    );
  }

  _getCurrentList() {
    return this._fullList.slice(0, this.state.listLength);
  }

  _onLoadMore = () => {
    this.setState((state) => {
      const listRestLength = this._fullList.length - state.listLength;

      const increment = listRestLength < DEFAULT_LIST_LENGTH_INCREMENT
        ? listRestLength
        : DEFAULT_LIST_LENGTH_INCREMENT;

      return {
        listLength: state.listLength + increment,
      };
    });
  };
}

App.propTypes = {
  list: PropTypes.arrayOf(
      PropTypes.objectOf(
          PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.string,
          ])
      )
  )
    .isRequired,
};

export default App;
