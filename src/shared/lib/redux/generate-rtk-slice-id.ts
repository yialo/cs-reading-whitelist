export const generateRtkSliceId = (() => {
  let count = 1;

  return (sliceName = '') => {
    const suffix = sliceName ? `[${sliceName}]` : '';
    const id = `s${count}${suffix}`;
    count += 1;
    return id;
  };
})();
