interface INamingPageItem {
  title: string;
  names: string[];
}

interface INamingPageContensItem {
  title: string;
  id: string;
  items: INamingPageItem[];
}

export const CONTENTS: INamingPageContensItem[] = [
  {
    title: 'Базовые',
    id: 'basic',
    items: [
      {
        title: 'Обобщённый блок',
        names: ['block'],
      },
      {
        title: 'Страница',
        names: ['page'],
      },
      {
        title: 'Тело блока (например, текст с изображением)',
        names: ['content', 'body', 'main'],
      },
      {
        title: 'Верхняя часть блока (например, заголовок)',
        names: ['header', 'head'],
      },
      {
        title: 'Нижняя часть блока (например, дата добавления, категории и т.д.)',
        names: ['footer'],
      },
      {
        title: 'Основной раздел',
        names: ['primary'],
      },
      {
        title: 'Вторичный раздел',
        names: ['secondary'],
      },
      {
        title: 'Боковая колонка страницы, содержащая вспомогательный контент (виджеты, рекламные блоки и т.п.)',
        names: ['sidebar', 'aside'],
      },
      {
        title: 'Один из разделов контента',
        names: ['section'],
      },
      {
        title: 'Один из подразделов контента',
        names: ['subsection'],
      },
      {
        title: 'Блок навигации',
        names: ['navigation', 'nav'],
      },
      {
        title: 'Меню',
        names: ['menu'],
      },
      {
        title: 'Ссылка',
        names: ['link'],
      },
    ],
  },
  {
    title: 'Списки',
    id: 'lists',
    items: [
      {
        title: 'Список',
        names: ['list', 'items'],
      },
      {
        title: 'Пункт списка, один из повторяющихся элементов',
        names: ['item', 'element', 'part'],
      },
      {
        title: 'Номер повторяющегося элемента (часто используется в качестве БЭМ-модификатора)',
        names: ['number'],
      },
    ],
  },
  {
    title: 'Обёртки',
    id: 'wrappers',
    items: [
      {
        title: 'Обёртка (обычно внешняя)',
        names: ['wrapper', 'wrap'],
      },
      {
        title: 'Внешняя обёртка',
        names: ['outer'],
      },
      {
        title: 'Внутренняя обёртка',
        names: ['inner'],
      },
      {
        title: 'Контейнер',
        names: ['container', 'box', 'holder'],
      },
    ],
  },
  {
    title: 'Раскладка',
    id: 'layout',
    items: [
      {
        title: 'Служебный блок-контейнер для раскладки',
        names: ['layout'],
      },
      {
        title: 'Раскладка блока в виде сетки (обычно содержит в себе строки и столбцы)',
        names: ['grid'],
      },
      {
        title: 'Контейнер в виде строки',
        names: ['row'],
      },
      {
        title: 'Контейнер в виде столбца',
        names: ['column', 'col'],
      },
    ],
  },
  {
    title: 'Позиционирование',
    id: 'position',
    items: [
      {
        title: 'Контент сверху',
        names: ['top'],
      },
      {
        title: 'Контент слева',
        names: ['left'],
      },
      {
        title: 'Контент справа',
        names: ['right'],
      },
      {
        title: 'Контент снизу',
        names: ['bottom'],
      },
      {
        title: 'Контент по центру',
        names: ['center', 'middle'],
      },
      {
        title: 'Фиксированный контент',
        names: ['fixed'],
      },
      {
        title: '«Липкий» контент',
        names: ['sticky'],
      },
    ],
  },
  {
    title: 'Навигационные переходы',
    id: 'navigation',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Размеры',
    id: 'sizes',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Состояния, статусы и их указатели',
    id: 'state',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Элементы управления',
    id: 'controls',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Текст',
    id: 'text',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Публикации',
    id: 'blog',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Изображения',
    id: 'graphics',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Формы',
    id: 'forms',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Персона',
    id: 'person',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Таблицы',
    id: 'tables',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Видео',
    id: 'video',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Интернет-магазин',
    id: 'e-commerce',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
  {
    title: 'Разное',
    id: 'miscellaneous',
    items: [
      {
        title: '',
        names: [],
      },
    ],
  },
];
