declare namespace StyleScssNamespace {
  export interface IStyleScss {
    isExpanded: string;
    langBadge: string;
    langBadge_en: string;
    langBadge_ru: string;
    legend: string;
    link: string;
    root_series: string;
    seriesButton: string;
    seriesItem: string;
    seriesList: string;
    tag: string;
    tags: string;
  }
}

declare const StyleScssModule: StyleScssNamespace.IStyleScss;

export = StyleScssModule;
