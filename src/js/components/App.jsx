import PropTypes from 'prop-types';
import React from 'react';

import FilterForm from './FilterForm.jsx';
import Subjects from './Subjects.jsx';
import SubjectsItem from './SubjectsItem.jsx';

const FILTER_LIST = [
  ['none', '[отключена]'],
  ['caption', 'по названию'],
  ['url', 'по ссылке'],
  ['lang', 'по языку'],
  ['tag', 'по тегам'],
  ['legend', 'по описанию'],
];

function App(props) {
  return (
    <React.Fragment>
      <h1 className="page__heading">Computer Science Reading Whitelist</h1>
      <main className="page-content page__content">
        <FilterForm list={FILTER_LIST} />
        <Subjects>
          {props.list.map((it, i) => (
            <SubjectsItem
              key={`${it.lang}-${i + 1}`}
              caption={it.caption}
              legend={it.legend}
              tags={it.tags}
              url={it.url}
            />
          ))}
        </Subjects>
      </main>
    </React.Fragment>
  );
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
