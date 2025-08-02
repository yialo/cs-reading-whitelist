declare namespace StyleScssNamespace {
  export interface IStyleScss {
    _adjacent: string;
    clear: string;
    field: string;
    field_adjacent_left: string;
    field_adjacent_right: string;
    label: string;
    root: string;
    tipChar: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss;

export = StyleScssModule;
