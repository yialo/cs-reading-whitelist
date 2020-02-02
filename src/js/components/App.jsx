import PropTypes from 'prop-types';
import React, { useState } from 'react';
import deepClone from 'lodash.clonedeep';

import ControlBar from './ControlBar.jsx';
import Subjects from './Subjects.jsx';
import SubjectsItem from './SubjectsItem.jsx';

function App(props) {
  const subjectList = deepClone(props.list);

  const [filter, setFilter] = useState({
    searchString: '',
    list: subjectList,
  });

  function handleSearch(evt) {
    const line = evt.target.value;

    let filteredList;
    if (line === '') {
      filteredList = subjectList;
    } else {
      filteredList = subjectList.filter((item) => {
        const matcher = new RegExp(line, 'gi');
        return item.caption.match(matcher);
      });
    }

    setFilter({
      searchString: line,
      list: filteredList,
    });
  }

  return (
    <React.Fragment>
      <h1 className="page__heading">Computer Science Reading Whitelist</h1>
      <main className="page-content page__content">
        <ControlBar
          list={props.list}
          onSearch={handleSearch}
          searchString={filter.searchString}
        />
        <Subjects>
          {filter.list.map((it, i) => (
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
