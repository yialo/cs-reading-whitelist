export function includes<T extends U, U>(
  collection: ReadonlyArray<T>,
  el: U,
): el is T {
  return collection.includes(el as T);
}
