import React from 'react';
import classNames from 'classnames';

interface IProps {
  className?: string;
}

const REFERENCE_LINKS = [
  [
    'Слова, часто используемые в CSS-классах',
    'https://github.com/yoksel/common-words',
  ],
  [
    'Слова и сокращения в CSS-классах',
    'https://github.com/nicothin/idiomatic-pre-CSS/blob/gh-pages/words_and_abbreviations.md',
  ],
  [
    'Типовые названия классов для html',
    'https://github.com/tsergeytovarov/htmlacademy-basic-additional-material/blob/master/articles/%D1%82%D0%B8%D0%BF%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2/article.md',
  ],
];

export const CommonClassNamesPage: React.FC<IProps> = (props) => {
  return (
    <main>
      <h1>Типовые названия CSS-классов</h1>
      <hr />
      <section>
        <p>Создано на основе личного опыта и следующих подборок:</p>
        <ul>
          {REFERENCE_LINKS.map(([label, url], i) => (
            <li key={i}>
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>
        <p>Автор выражает благодарность создателям указанных страниц.</p>
      </section>
    </main>
  );
};

CommonClassNamesPage.defaultProps = {
  className: '',
};
