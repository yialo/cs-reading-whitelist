'use strict';

const DICT_ITEM_SEPARATOR = /\s*:\s*/;

const getStructureType = (loopDataList) => {
  if (loopDataList.every((item) => item.search(DICT_ITEM_SEPARATOR) === -1)) {
    return 'list';
  }
  if (loopDataList.every((item) => item.search(DICT_ITEM_SEPARATOR) !== -1)) {
    return 'dict';
  }
  throw new Error(`Unexpected data structure: ${loopDataList}`);
};

module.exports = (loopDataList) => {
  const type = getStructureType(loopDataList);
  const entryList = (type === 'list') ? loopDataList : (
    loopDataList.map((item) => item.split(DICT_ITEM_SEPARATOR))
  );
  return { entryList, type };
};
