declare namespace SelfScssNamespace {
  export interface ISelfScss {
    hasDarkTheme: string;
    header: string;
    root: string;
  }
}

declare const SelfScssModule: SelfScssNamespace.ISelfScss;

export = SelfScssModule;
