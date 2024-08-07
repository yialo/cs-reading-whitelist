declare namespace StyleScssNamespace {
  export interface IStyleScss {
    _button: string;
    body: string;
    list: string;
    option: string;
    optionButton: string;
    optionButton_selected: string;
    root: string;
    tip: string;
    toggleButton: string;
    toggleButton_hasPopup: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss;

export = StyleScssModule;
