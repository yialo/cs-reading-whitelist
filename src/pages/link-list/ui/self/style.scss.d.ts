declare namespace StyleScssNamespace {
  export interface IStyleScss {
    controlBar: string;
    header: string;
    headline: string;
    preloader: string;
    root: string;
    subjects: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss;

export = StyleScssModule;
