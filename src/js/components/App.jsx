import React from 'react';

import Subject from './Subject.jsx';

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="s_text-block page__heading">Computer Science Reading Whitelist</h1>
        <main className="chapter">
          <ul className="s_list chapter__list">
            {this.props.list.map((item, i) => (
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
