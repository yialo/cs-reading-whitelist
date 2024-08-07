declare namespace SelfScssNamespace {
  export interface ISelfScss {
    link: string;
    list: string;
    root: string;
  }
}

declare const SelfScssModule: SelfScssNamespace.ISelfScss;

export = SelfScssModule;
