declare namespace SelfLegacyScssNamespace {
  export interface ISelfLegacyScss {
    list: string;
    option: string;
    optionButton: string;
    optionButton_selected: string;
    popover: string;
    root: string;
    tip: string;
    toggleButton: string;
    toggleButton_hasPopup: string;
  }
}

declare const SelfLegacyScssModule: SelfLegacyScssNamespace.ISelfLegacyScss;

export = SelfLegacyScssModule;
