declare namespace SelfScssNamespace {
  export interface ISelfScss {
    details: string;
    heading: string;
  }
}

declare const SelfScssModule: SelfScssNamespace.ISelfScss;

export = SelfScssModule;
