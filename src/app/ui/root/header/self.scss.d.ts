declare namespace SelfScssNamespace {
  export interface ISelfScss {
    goTopButton: string;
    goTopButton__inner: string;
    goTopButton__inner_theme_dark: string;
    goTopButton__inner_visible: string;
    root: string;
    root_translucent: string;
    themeToggle: string;
  }
}

declare const SelfScssModule: SelfScssNamespace.ISelfScss;

export = SelfScssModule;
