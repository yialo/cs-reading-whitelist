import { createSelector } from 'reselect';

const getFullList = (state) => state.fetch.list;
const getFilterName = (state) => state.list.filterName;
const getSearchString = (state) => state.list.searchString;

export default createSelector(
    [getFullList, getSearchString, getFilterName],
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
