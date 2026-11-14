declare namespace IndexScssNamespace {
  export interface IIndexScss {
    form: string;
    formField: string;
    formField__input: string;
    formField__label: string;
    form__separator: string;
    header: string;
    headline: string;
    root: string;
  }
}

declare const IndexScssModule: IndexScssNamespace.IIndexScss;

export = IndexScssModule;
