declare namespace SelfModernScssNamespace {
  export interface ISelfModernScss {
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

declare const SelfModernScssModule: SelfModernScssNamespace.ISelfModernScss;

export = SelfModernScssModule;
