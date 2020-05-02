import { createSelector } from 'reselect';

import { Selector as FetchSelector } from '../reducers/fetch.js';
import { Selector as ListSelector } from '../reducers/list.js';

export default createSelector(
    [
      FetchSelector.fullList,
      ListSelector.searchString,
      ListSelector.filterName,
    ],
    (fullList, searchString, filterName) => {
      if (searchString === '') {
        return fullList;
      }
      return fullList.filter((item) => {
        const matcher = new RegExp(searchString, 'gi');
        switch (filterName) {
          case 'caption':
            return item.caption.match(matcher);
          case 'hashtag':
            return item.tags.some((tag) => tag.match(matcher));
          default:
            return true;
        }
      });
    }
);
