declare module '*.scss' {
  const content: {
    [className: string]: string;
  };
  export default content;
}

declare const __GLOBAL_ENV_VARIABLE__MODE__: string;
declare const __GLOBAL_ENV_VARIABLE__PUBLIC_PATH__: string;
