declare module '*.scss' {
  const content: {
    [className: string]: string;
  };
  export default content;
}

declare var __GLOBAL_ENV_VARIABLE__MODE__: string;
declare var __GLOBAL_ENV_VARIABLE__PUBLIC_PATH__: string;
