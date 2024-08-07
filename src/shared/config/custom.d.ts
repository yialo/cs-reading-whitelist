declare const __GLOBAL_ENV_VARIABLE__MODE__: string;
declare const __GLOBAL_ENV_VARIABLE__PUBLIC_PATH__: string;

interface ObjectConstructor {
  keys<T>(
    o: T,
  ): T extends object
    ? (keyof T)[]
    : T extends number
      ? []
      : T extends any[] | string
        ? string[]
        : never;
}

declare module '@type-utils' {
  export type Values<O extends object> = O[keyof O];
}
