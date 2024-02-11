export class RtkReducerRegistry<R> {
  #reducers: Record<string, R> = {};
  #emitChange: ((reducers: Record<string, R>) => void) | null = null;

  getReducers() {
    return { ...this.#reducers };
  }

  register(sliceName: string, reducer: R) {
    this.#reducers = { ...this.#reducers, [sliceName]: reducer };
    this.#emitChange?.(this.getReducers());
  }

  setChangeListener(listener: (reducers: Record<string, R>) => void) {
    this.#emitChange = listener;
  }
}
