export const generateRtkSliceId = (() => {
  let count = 1;

  return (sliceName: string) => {
    const trimmed = sliceName.trim();
    const base = trimmed ? `${trimmed}_` : '';
    const suffix = `(s${count})`;

    count += 1;

    return `${base}${suffix}`;
  };
})();
