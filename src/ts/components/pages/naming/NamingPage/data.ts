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
        names: ['section', 'area'],
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
        title: 'Хлебные крошки (навигационная цепочка)',
        names: ['breadcrumbs', 'crumbs'],
      },
      {
        title: 'Пагинация (постраничная навигация)',
        names: ['pagination'],
      },
      {
        title: 'Предыдущий',
        names: ['previous', 'prev'],
      },
      {
        title: 'Следующий',
        names: ['next'],
      },
      {
        title: 'Первый',
        names: ['first'],
      },
      {
        title: 'Последний',
        names: ['last'],
      },
      {
        title: 'Назад',
        names: ['back', 'behind'],
      },
      {
        title: 'Вперёд',
        names: ['forward', 'ahead'],
      },
      {
        title: 'Вверх',
        names: ['up'],
      },
      {
        title: 'Вниз',
        names: ['down'],
      },
    ],
  },
  {
    title: 'Размеры',
    id: 'sizes',
    items: [
      {
        title: 'Очень маленький',
        names: ['extra-small', 'xs'],
      },
      {
        title: 'Маленький',
        names: ['small', 's'],
      },
      {
        title: 'Средний',
        names: ['medium', 'md'],
      },
      {
        title: 'Большой',
        names: ['large', 'lg'],
      },
      {
        title: 'Очень большой',
        names: ['extra-large', 'xl'],
      },
      {
        title: 'Крошечный',
        names: ['tiny'],
      },
      {
        title: 'Огромный',
        names: ['huge'],
      },
      {
        title: 'Узкий',
        names: ['narrow', 'tight'],
      },
      {
        title: 'Широкий',
        names: ['wide'],
      },
    ],
  },
  {
    title: 'Состояния, статусы и их указатели',
    id: 'state',
    items: [
      {
        title: 'Активный элемент',
        names: ['active'],
      },
      {
        title: 'Выбранный элемент',
        names: ['selected', 'focused'],
      },
      {
        title: 'Текущее состояние (например, пункт навигационного меню, соотвествующий текущей странице сайта)',
        names: ['current'],
      },
      {
        title: 'Основной',
        names: ['primary'],
      },
      {
        title: 'По умолчанию',
        names: ['default'],
      },
      {
        title: 'Успешное действие',
        names: ['success'],
      },
      {
        title: 'Информация общего/вспомогательного характера',
        names: ['info'],
      },
      {
        title: 'Совет, пояснение к действию',
        names: ['help'],
      },
      {
        title: 'Предупреждение',
        names: ['warning', 'warn'],
      },
      {
        title: 'Ошибка',
        names: ['error'],
      },
      {
        title: 'Потенциально опасное действие, требующее особого внимания',
        names: ['danger', 'alert'],
      },
      {
        title: 'Состояние ожидания',
        names: ['pending'],
      },
      {
        title: 'Состояние загрузки',
        names: ['loading'],
      },
      {
        title: 'Видимый элемент',
        names: ['visible', 'shown'],
      },
      {
        title: 'Скрытый элемент',
        names: ['hidden'],
      },
      {
        title: 'Неактивный',
        names: ['disabled', 'inactive'],
      },
      {
        title: 'Корретный',
        names: ['valid'],
      },
      {
        title: 'Некорректный, содержащий ошибку',
        names: ['invalid'],
      },
    ],
  },
  {
    title: 'Элементы управления',
    id: 'controls',
    items: [
      {
        title: 'Обобщённая кнопка',
        names: ['button'],
      },
      {
        title: 'Обобщённый элемент управления (обычно в галерее, слайдере)',
        names: ['control'],
      },
      {
        title: 'Стрелка',
        names: ['arrow'],
      },
      {
        title: 'Указатель на активный элемент',
        names: ['caret', 'mark', 'marker'],
      },
      {
        title: 'Кнопка выбора слайда',
        names: ['dot', 'bullet'],
      },
      {
        title: 'Тумблер (переключатель с двумя состояниями)',
        names: ['toggle'],
      },
      {
        title: 'Выпадающий список',
        names: ['dropdown', 'drop'],
      },
      {
        title: 'Показать',
        names: ['show'],
      },
      {
        title: 'Скрыть',
        names: ['hide'],
      },
      {
        title: 'Больше, подробнее (развернуть)',
        names: ['more', 'details'],
      },
      {
        title: 'Меньше (свернуть)',
        names: ['less'],
      },
      {
        title: 'Показать всё',
        names: ['all'],
      },
      {
        title: 'Нажать',
        names: ['press', 'push'],
      },
      {
        title: 'Сделать клик',
        names: ['click'],
      },
      {
        title: 'Коснуться',
        names: ['touch'],
      },
      {
        title: 'Открыть',
        names: ['open'],
      },
      {
        title: 'Закрыть',
        names: ['close'],
      },
      {
        title: 'Добавить',
        names: ['add'],
      },
      {
        title: 'Создать',
        names: ['create', 'new'],
      },
      {
        title: 'Редактировать',
        names: ['edit'],
      },
      {
        title: 'Изменить',
        names: ['change', 'update'],
      },
      {
        title: 'Выбрать',
        names: ['select'],
      },
      {
        title: 'Удалить',
        names: ['remove', 'delete'],
      },
      {
        title: 'Скачать',
        names: ['download'],
      },
      {
        title: 'Закачать',
        names: ['upload'],
      },
      {
        title: 'Отменить',
        names: ['cancel'],
      },
      {
        title: 'Очистить',
        names: ['clear'],
      },
      {
        title: 'Войти',
        names: ['login', 'signin'],
      },
      {
        title: 'Выйти',
        names: ['logout', 'signout'],
      },
      {
        title: 'Зарегистрироваться',
        names: ['signup'],
      },
    ],
  },
  {
    title: 'Текст',
    id: 'text',
    items: [
      {
        title: 'Обобщённый текстовый блок',
        names: ['text'],
      },
      {
        title: 'Заголовок',
        names: ['title', 'heading', 'headline', 'caption', 'subject'],
      },
      {
        title: 'Подзаголовок',
        names: ['subtitle'],
      },
      {
        title: 'Параграф',
        names: ['paragraph'],
      },
      {
        title: 'Описание',
        names: ['description', 'details'],
      },
      {
        title: 'Введение',
        names: ['intro'],
      },
      {
        title: 'Слоган',
        names: ['tagline', 'slogan'],
      },
      {
        title: 'Лид-абзац (вводный абзац информационного материала)',
        names: ['lead', 'lede'],
      },
      {
        title: 'Подпись',
        names: ['legend'],
      },
      {
        title: 'Заметка',
        names: ['note'],
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
