import PropTypes from 'prop-types';
import React, { useState } from 'react';
import deepClone from 'lodash.clonedeep';

import ControlBar from './ControlBar.jsx';
import Subjects from './Subjects.jsx';
import SubjectsItem from './SubjectsItem.jsx';

function App(props) {
  const subjectList = deepClone(props.list);

  const [filteredList, setFilteredList] = useState(subjectList);
  const [searchString, setSearchString] = useState('');

  function handleSearch(evt) {
    const line = evt.target.value;
    setSearchString(line);

    const filtered = subjectList.filter((item) => {
      const matcher = new RegExp(searchString, 'gi');
      return item.caption.match(matcher);
    });
    setFilteredList(filtered);
  }

  return (
    <React.Fragment>
      <h1 className="page__heading">Computer Science Reading Whitelist</h1>
      <main className="page-content page__content">
        <ControlBar
          list={props.list}
          onSearch={handleSearch}
          searchString={searchString}
        />
        <Subjects>
          {filteredList.map((it, i) => (
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
