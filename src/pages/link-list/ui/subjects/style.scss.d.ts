declare namespace StyleScssNamespace {
  export interface IStyleScss {
    button: string;
    fallbackMessage: string;
    list: string;
    root: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss;

export = StyleScssModule;
