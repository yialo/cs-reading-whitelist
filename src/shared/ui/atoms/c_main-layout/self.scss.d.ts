declare namespace SelfScssNamespace {
  export interface ISelfScss {
    hasDarkTheme: string;
    root: string;
  }
}

declare const SelfScssModule: SelfScssNamespace.ISelfScss;

export = SelfScssModule;
