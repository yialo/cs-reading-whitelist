declare module '*.scss' {
  const content: {
    [className: string]: string;
  };
  export default content;
}

declare var GLOBAL_ENV_VARIABLE_MODE: string;
declare var GLOBAL_ENV_VARIABLE_PUBLIC_PATH: string;
