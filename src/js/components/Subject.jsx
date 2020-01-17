import React from 'react';

export default class Subject extends React.Component {
  render() {
    return (
      <li className="subjects__item">
        <a href={this.props.url}>{this.props.caption}</a>
        {this.props.legend ? ` - ${this.props.legend}` : ''}
        <ul className="s_list subjects__tags">
          {this.props.tags.map((tag, i) => (
            <li className="subjects__tag" key={i}> #{tag}</li>
          ))}
        </ul>
      </li>
    );
  }
}
