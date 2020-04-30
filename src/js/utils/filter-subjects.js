export default (fullList, textToSearch, filterName) => {
  if (textToSearch === '') {
    return fullList;
  }
  return fullList.filter((item) => {
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
};
