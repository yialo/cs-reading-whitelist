import React from 'react';

export default class Subject extends React.Component {
  render() {
    return (
      <li className="chapter__item">
        <a href={this.props.url}>{this.props.caption}</a>
        {this.props.legend ? ` - ${this.props.legend}` : ''}
      </li>
    );
  }
}
