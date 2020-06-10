import { createSelector } from 'reselect';

import { fetchSelector, listSelector } from './reducers/index.ts';

export default createSelector(
    [
      fetchSelector.fullList,
      listSelector.searchString,
      listSelector.filterName,
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
