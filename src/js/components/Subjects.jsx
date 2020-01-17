import React from 'react';

import Button from './Button.jsx';
import Subject from './Subject.jsx';

export default class Subjects extends React.Component {
  constructor(props) {
    super(props);

    this._onButtonClick = this._onButtonClick.bind(this);
  }

  render() {
    return (
      <div className="subjects page-content__subjects">
        <ul className="s_list subjects__list">
          {this.props.list.map((item, i) => (
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
          onClick={this._onButtonClick}
        />
      </div>
    );
  }

  _onButtonClick() {
    this.props.onButtonClick();
  }
}
