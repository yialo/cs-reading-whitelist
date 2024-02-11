import style from './style.scss';

export const SubjectsItemLink: React.FC<{
  caption: string;
  lang: string;
  url: string;
}> = ({ caption, lang, url }) => {
  return (
    <a className={style.link} href={url} hrefLang={lang} lang={lang}>
      {caption}
    </a>
  );
};

SubjectsItemLink.displayName = 'SubjectsItem-Link';
