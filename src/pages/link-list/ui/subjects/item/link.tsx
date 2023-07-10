import style from './style.scss';

interface Props {
  caption: string;
  lang: string;
  url: string;
}

export const SubjectsItemLink: React.FC<Props> = ({ caption, lang, url }) => {
  return (
    <a className={style.link} href={url} hrefLang={lang} lang={lang}>
      {caption}
    </a>
  );
};

SubjectsItemLink.displayName = 'SubjectsItem-Link';