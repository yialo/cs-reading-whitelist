export default (textToSearch, fullList, filterName) => {
  let filteredList;
  if (textToSearch === '') {
    filteredList = fullList;
  } else {
    filteredList = fullList.filter((item) => {
      const matcher = new RegExp(textToSearch, 'gi');
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
  return filteredList;
};
