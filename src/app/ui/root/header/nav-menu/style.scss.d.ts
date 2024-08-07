declare namespace StyleScssNamespace {
  export interface IStyleScss {
    button: string;
    hasDarkTheme: string;
    icon: string;
    isCollapsedScreenSm: string;
    link: string;
    link_active: string;
    list: string;
    root: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss;

export = StyleScssModule;
