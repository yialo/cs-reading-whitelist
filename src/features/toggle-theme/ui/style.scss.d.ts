declare namespace StyleScssNamespace {
  export interface IStyleScss {
    hasDarkTheme: string;
    root: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss;

export = StyleScssModule;
