!function(e){function t(t){for(var n,i,s=t[0],c=t[1],o=t[2],u=0,d=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&d.push(l[i][0]),l[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(m&&m(t);d.length;)d.shift()();return r.push.apply(r,o||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==l[c]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},l={0:0},r=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/cs-reading-whitelist/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var o=0;o<s.length;o++)t(s[o]);var m=c;r.push([204,1,2]),a()}({204:function(e,t,a){a(205),e.exports=a(419)},419:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"searchInList",(function(){return $})),a.d(n,"toggleFilter",(function(){return ee})),a.d(n,"toggleSorting",(function(){return te})),a.d(n,"showNextListPage",(function(){return ae})),a.d(n,"toggleTheme",(function(){return ne})),a.d(n,"fetchSubjects",(function(){return le}));a(208);var l,r,i=a(0),s=a.n(i),c=a(94),o=a.n(c),m=a(8),u=a(73),d=a(24),p=(a(216),a(192)),f=a(4),g=a.n(f),v=a(7),h=a(28),E=a.n(h),b=a(20),N=a.n(b),y=a(75),_=a.n(y),j=a(193),O="Enter",w="Escape",k=" ",S="caption",C="hashtag",x="new",D="old",T=(l={HOME:"",NAMING:"naming"},a.n(j)()(r=_()(l)).call(r,(function(e,t){var a,n=N()(t,2),l=n[0],r=n[1];return e[l]=E()(a="".concat("/cs-reading-whitelist/")).call(a,r),e}),{})),B=(a(68),a(3)),L=a.n(B),G=[{title:"Базовые",id:"basic",items:[{title:"Обобщённый блок",names:["block"]},{title:"Страница",names:["page"]},{title:"Тело блока (например, текст с изображением)",names:["content","body","main"]},{title:"Верхняя часть блока (например, заголовок)",names:["header","head"]},{title:"Нижняя часть блока (например, дата добавления, категории и т.д.)",names:["footer"]},{title:"Основной раздел",names:["primary"]},{title:"Вторичный раздел",names:["secondary"]},{title:"Боковая колонка страницы, содержащая вспомогательный контент (виджеты, рекламные блоки и т.п.)",names:["sidebar","aside"]},{title:"Один из разделов контента",names:["section","area"]},{title:"Один из подразделов контента",names:["subsection"]},{title:"Блок навигации",names:["navigation","nav"]},{title:"Меню",names:["menu"]},{title:"Ссылка",names:["link"]}]},{title:"Списки",id:"lists",items:[{title:"Список",names:["list","items"]},{title:"Пункт списка, один из повторяющихся элементов",names:["item","element","part"]},{title:"Номер повторяющегося элемента (часто используется в качестве БЭМ-модификатора)",names:["number"]}]},{title:"Обёртки",id:"wrappers",items:[{title:"Обёртка (обычно внешняя)",names:["wrapper","wrap"]},{title:"Внешняя обёртка",names:["outer"]},{title:"Внутренняя обёртка",names:["inner"]},{title:"Контейнер",names:["container","box","holder"]}]},{title:"Раскладка",id:"layout",items:[{title:"Служебный блок-контейнер для раскладки",names:["layout"]},{title:"Раскладка блока в виде сетки (обычно содержит в себе строки и столбцы)",names:["grid"]},{title:"Контейнер в виде строки",names:["row"]},{title:"Контейнер в виде столбца",names:["column","col"]}]},{title:"Позиционирование",id:"position",items:[{title:"Контент сверху",names:["top"]},{title:"Контент слева",names:["left"]},{title:"Контент справа",names:["right"]},{title:"Контент снизу",names:["bottom"]},{title:"Контент по центру",names:["center","middle"]},{title:"Фиксированный контент",names:["fixed"]},{title:"«Липкий» контент",names:["sticky"]}]},{title:"Навигационные переходы",id:"navigation",items:[{title:"Хлебные крошки (навигационная цепочка)",names:["breadcrumbs","crumbs"]},{title:"Пагинация (постраничная навигация)",names:["pagination"]},{title:"Предыдущий",names:["previous","prev"]},{title:"Следующий",names:["next"]},{title:"Первый",names:["first"]},{title:"Последний",names:["last"]},{title:"Назад",names:["back","behind"]},{title:"Вперёд",names:["forward","ahead"]},{title:"Вверх",names:["up"]},{title:"Вниз",names:["down"]}]},{title:"Размеры",id:"sizes",items:[{title:"Очень маленький",names:["extra-small","xs"]},{title:"Маленький",names:["small","s"]},{title:"Средний",names:["medium","md"]},{title:"Большой",names:["large","lg"]},{title:"Очень большой",names:["extra-large","xl"]},{title:"Крошечный",names:["tiny"]},{title:"Огромный",names:["huge"]},{title:"Узкий",names:["narrow","tight"]},{title:"Широкий",names:["wide"]}]},{title:"Состояния, статусы и их указатели",id:"state",items:[{title:"Активный элемент",names:["active"]},{title:"Выбранный элемент",names:["selected","focused"]},{title:"Текущее состояние (например, пункт навигационного меню, соотвествующий текущей странице сайта)",names:["current"]},{title:"Основной",names:["primary"]},{title:"По умолчанию",names:["default"]},{title:"Успешное действие",names:["success"]},{title:"Информация общего/вспомогательного характера",names:["info"]},{title:"Совет, пояснение к действию",names:["help"]},{title:"Предупреждение",names:["warning","warn"]},{title:"Ошибка",names:["error"]},{title:"Потенциально опасное действие, требующее особого внимания",names:["danger"]},{title:"Состояние ожидания",names:["pending"]},{title:"Состояние загрузки",names:["loading"]},{title:"Видимый элемент",names:["visible","shown"]},{title:"Скрытый элемент",names:["hidden"]},{title:"Неактивный",names:["disabled","inactive"]},{title:"Корретный",names:["valid"]},{title:"Некорректный, содержащий ошибку",names:["invalid"]}]},{title:"Элементы управления",id:"controls",items:[{title:"Обобщённая кнопка",names:["button"]},{title:"Обобщённый элемент управления (обычно в галерее, слайдере)",names:["control"]},{title:"Стрелка",names:["arrow"]},{title:"Указатель на активный элемент",names:["caret","mark","marker"]},{title:"Кнопка выбора слайда",names:["dot","bullet"]},{title:"Тумблер (переключатель с двумя состояниями)",names:["toggle"]},{title:"Выпадающий список",names:["dropdown","drop"]},{title:"Показать",names:["show"]},{title:"Скрыть",names:["hide"]},{title:"Больше, подробнее (развернуть)",names:["more","details"]},{title:"Меньше (свернуть)",names:["less"]},{title:"Показать всё",names:["all"]},{title:"Нажать",names:["press","push"]},{title:"Сделать клик",names:["click"]},{title:"Коснуться",names:["touch"]},{title:"Открыть",names:["open"]},{title:"Закрыть",names:["close"]},{title:"Добавить",names:["add"]},{title:"Создать",names:["create","new"]},{title:"Редактировать",names:["edit"]},{title:"Изменить",names:["change","update"]},{title:"Выбрать",names:["select"]},{title:"Удалить",names:["remove","delete"]},{title:"Скачать",names:["download"]},{title:"Закачать",names:["upload"]},{title:"Отменить",names:["cancel"]},{title:"Очистить",names:["clear"]},{title:"Войти",names:["login","signin"]},{title:"Выйти",names:["logout","signout"]},{title:"Зарегистрироваться",names:["signup"]}]},{title:"Текст",id:"text",items:[{title:"Обобщённый текстовый блок",names:["text"]},{title:"Заголовок",names:["title","heading","headline","caption","subject"]},{title:"Подзаголовок",names:["subtitle"]},{title:"Параграф",names:["paragraph"]},{title:"Описание",names:["description","details"]},{title:"Введение",names:["intro"]},{title:"Слоган",names:["tagline","slogan"]},{title:"Лид-абзац (вводный абзац информационного материала)",names:["lead","lede"]},{title:"Подпись",names:["legend"]},{title:"Заметка",names:["note"]}]},{title:"Публикации",id:"publication",items:[{title:"Статья",names:["article"]},{title:"Пост, публикация в блоге",names:["entry"]},{title:"Комментарий",names:["comment"]},{title:"Блок с дополнительной информацией (теги, даты в постах)",names:["meta"]},{title:"Блок тегов",names:["tags"]},{title:"Тег, метка",names:["tag"]},{title:"Дата и время публикации",names:["datetime"]},{title:"Блок управления публикацией (отправка, редактирование т.п.)",names:["actions"]},{title:"Отправить (сообщение)",names:["send"]},{title:"Опубликовать",names:["post"]},{title:"Ответить, отреагировать",names:["reply"]},{title:"Копировать",names:["copy"]},{title:"Вырезать",names:["cut"]},{title:"Вставить",names:["insert"]},{title:"Отрывок текста, используемый перед ссылкой «Читать дальше...»",names:["excerpt"]},{title:"Анонс новости или поста (может содержать заголовок, описание, изображение, предполагает ссылку на полную версию)",names:["preview"]}]},{title:"Изображения",id:"graphics",items:[{title:"Обобщённое изображение",names:["image","picture"]},{title:"Баннер (блок с большим фоновым изображением, обычно в верхней части страницы)",names:["banner","hero"]},{title:"Аватар, маленькая картинка пользователя",names:["userpic","avatar"]},{title:"Логотип",names:["logo"]},{title:"Иконка",names:["icon"]},{title:"Фотография",names:["photo"]},{title:"Фоновое изображение",names:["background"]},{title:"Миниатюра, уменьшенное изображение",names:["thumbnail","thumb"]},{title:"Галерея изображений",names:["gallery"]}]},{title:"Формы",id:"forms",items:[{title:"Форма",names:["form"]},{title:"Форма поиска",names:["search","search-form"]},{title:"Форма обратной связи",names:["feedback"]},{title:"Поле ввода",names:["input","field"]},{title:"Группа элементов формы",names:["field-group"]},{title:"Подпись элемента формы",names:["label","name"]},{title:"Отправить (форму)",names:["submit"]},{title:"Очистить поля ввода",names:["reset"]},{title:"Поле ввода Email",names:["email"]},{title:"Поле ввода номера телефона",names:["tel","phone"]},{title:"Поле ввода текста сообщения (наример, в форме обратной связи)",names:["message"]}]},{title:"Персона",id:"person",items:[{title:"Профиль",names:["profile"]},{title:"Человек",names:["person"]},{title:"Пользователь",names:["user"]},{title:"Автор",names:["author"]},{title:"Полное имя, ФИО",names:["fullname"]},{title:"Имя",names:["firstname"]},{title:"Фамилия",names:["lastname"]},{title:"Отчество",names:["patronymic","middlename"]},{title:"Адрес",names:["address"]},{title:"Ник",names:["nickname"]},{title:"Дата рождения",names:["birthdate"]},{title:"Пол",names:["sex"]},{title:"Возраст",names:["age"]}]},{title:"Таблицы",id:"tables",items:[{title:"Таблица",names:["table"]},{title:"Ячейка таблицы",names:["cell"]}]},{title:"Медиаконтент",id:"media",items:[{title:"Видео",names:["video"]},{title:"Аудио",names:["audio"]},{title:"Обобщённый медиаконтент",names:["media"]},{title:"Воспроизвести",names:["play"]},{title:"Остановить",names:["stop"]},{title:"Пауза",names:["pause"]}]},{title:"Интернет-магазин",id:"e-commerce",items:[{title:"Каталог",names:["catalog"]},{title:"Категория",names:["category"]},{title:"Подкатегория",names:["subcategory"]},{title:"Товар",names:["product"]},{title:"Корзина",names:["cart","basket"]},{title:"Избранное",names:["favorites"]},{title:"Список желаний",names:["wishlist"]},{title:"Блок сравнения",names:["compare"]}]},{title:"Разное",id:"miscellaneous",items:[{title:"Рекламный блок (часто вырезается AdBlock'ом, использовать с осторожностью)",names:["promo","commercial","advertisement","adv"]},{title:"Блок новостей",names:["news"]},{title:"Обобщённый дополнительный, необязательнй блок",names:["additional","optional","extra"]},{title:"Подсказка (обычно всплывающая при наведении)",names:["tooltip","tip","hint"]},{title:"Блок иконок социальных сетей",names:["socials"]},{title:"Вкладка",names:["tab"]},{title:"Панель вкладок",names:["tab-panel"]},{title:"Узкая и длинная область на странице",names:["bar"]},{title:"Интерактивная карта",names:["map","map-canvas"]},{title:"Виджет",names:["widget"]},{title:"Копирайт",names:["copyright"]},{title:"Контакты",names:["contacts"]},{title:"Блок преимуществ, особенностей товара или услуги",names:["features","benefits"]},{title:"Слайдер, карусель",names:["slider","carousel"]},{title:"Обобщённое всплывающее окно",names:["popup"]},{title:"Всплывающее диалоговое окно (блокирует интерфейс в ожидании действия со стороны пользователя)",names:["modal","dialog"]},{title:"Короткое всплывающее сообщение",names:["alert","toaster"]}]}],R="_1IZhy_RSryxhvx_yJ-0VG_ _2LGhsWi6Jbudt_8DFO4JTl",M="_3qGL0YuvXLKHRNWE7Mvgzj _33N9y-_8E5qQWx-KHnZpy9",P="_3vVm_i2aDb07tqy-iRbBSO _235HRLN3jLDEDn-poHEkGD",I=L()(G).call(G,(function(e){return{title:e.title,id:e.id}})),F=function(){return s.a.createElement("section",null,s.a.createElement("h2",null,"Содержание"),s.a.createElement("ul",null,L()(I).call(I,(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement("a",{className:P,href:"#".concat(e.id)},e.title))}))))};F.defaultProps={className:""},F.displayName="NamingPageContents";var H=function(){return s.a.createElement(s.a.Fragment,null,L()(G).call(G,(function(e,t){var a;return s.a.createElement(i.Fragment,{key:t},s.a.createElement("section",{id:e.id},s.a.createElement("h2",null,e.title),L()(a=e.items).call(a,(function(e,t){var a;return s.a.createElement(i.Fragment,{key:t},s.a.createElement("h3",null,e.title),s.a.createElement("pre",null,L()(a=e.names).call(a,(function(t,a){return s.a.createElement(i.Fragment,{key:a},s.a.createElement("code",null,t),a!==e.names.length-1&&", ")}))))}))),t!==G.length-1&&s.a.createElement("hr",null))})))};H.displayName="NamingPageList";var J=[["Слова, часто используемые в CSS-классах","https://github.com/yoksel/common-words"],["Слова и сокращения в CSS-классах","https://github.com/nicothin/idiomatic-pre-CSS/blob/gh-pages/words_and_abbreviations.md"],["Типовые названия классов для html","https://github.com/tsergeytovarov/htmlacademy-basic-additional-material/blob/master/articles/%D1%82%D0%B8%D0%BF%D0%BE%D0%B2%D1%8B%D0%B5-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D0%BE%D0%B2/article.md"]],A=function(){return s.a.createElement("div",null,s.a.createElement("p",null,"Создано на основе личного опыта и следующих подборок:"),s.a.createElement("ul",null,L()(J).call(J,(function(e,t){var a=N()(e,2),n=a[0],l=a[1];return s.a.createElement("li",{key:t},s.a.createElement("a",{className:P,href:l},n))}))),s.a.createElement("p",null,"Автор выражает благодарность создателям указанных страниц."))};A.displayName="NamingPageReferenceLinks";var W=function(){return s.a.createElement("main",{className:R},s.a.createElement("h1",{className:M},"Типовые названия UI-компонентов"),s.a.createElement("hr",null),s.a.createElement(A,null),s.a.createElement("hr",null),s.a.createElement(F,null),s.a.createElement("hr",null),s.a.createElement(H,null))},z=(a(169),a(299),a(120)),K=a.n(z),Y=a(194),Z=a.n(Y),Q=(a(178),a(195)),q=a.n(Q),V={COMPLETE:"fetch:complete",ERROR:"fetch:error"},X={SEARCH:"list:search",FILTER_TOGGLE:"list:filter-toggle",SORTING_TOGGLE:"list:sorting-toggle",NEXT_PAGE:"list:next-page"},U={TOGGLE:"theme:toggle"},$=function(e){return{type:X.SEARCH,payload:e}},ee=function(e){return{type:X.FILTER_TOGGLE,payload:e}},te=function(e){return{type:X.SORTING_TOGGLE,payload:e}},ae=function(){return{type:X.NEXT_PAGE}},ne=function(){return{type:U.TOGGLE}},le=function(){return function(){var e=q()(K.a.mark((function e(t){var a,n,l,r,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E()(a="".concat("/cs-reading-whitelist/","response/subjects.json?")).call(a,Z()()),e.prev=1,e.next=4,window.fetch(n);case 4:return l=e.sent,e.next=7,l.json();case 7:r=e.sent,i=r.data,t({type:V.COMPLETE,payload:i}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:V.ERROR,payload:e.t0});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},re=a(196),ie=a.n(re),se=function(e){var t=Object(m.b)();return Object(i.useMemo)((function(){return ie()(e)?L()(e).call(e,(function(e){return Object(d.bindActionCreators)(e,t)})):Object(d.bindActionCreators)(e,t)}),[e,t])},ce=a(197),oe=a.n(ce),me=a(198),ue=a.n(me),de=a(199),pe=a.n(de),fe=a(76),ge=a.n(fe),ve=a(46),he=a.n(ve),Ee=a(27),be=a.n(Ee),Ne=a(57),ye={error:function(e){return e.fetch.error},fullList:function(e){return e.fetch.list},isComplete:function(e){return e.fetch.isComplete}},_e={filterName:function(e){return e.list.filterName},page:function(e){return e.list.page},searchString:function(e){return e.list.searchString},sortingName:function(e){return e.list.sortingName}},je=function(e){return e.theme.isDark},Oe=Object(Ne.a)([ye.fullList,_e.searchString,_e.filterName],(function(e,t,a){var n=t.toLowerCase();return""===n?e:be()(e).call(e,(function(e){switch(a){case S:var t,l;return he()(t=e.caption.toLowerCase()).call(t,n)||(null===(l=e.series)||void 0===l?void 0:ge()(l).call(l,(function(e){var t;return he()(t=e.caption.toLowerCase()).call(t,n)})));case C:var r,i;return ge()(r=e.tags).call(r,(function(e){var t;return he()(t=e.toLowerCase()).call(t,n)}))||(null===(i=e.series)||void 0===i?void 0:ge()(i).call(i,(function(e){var t;return null===(t=e.tags)||void 0===t?void 0:ge()(t).call(t,(function(e){var t;return he()(t=e.toLowerCase()).call(t,n)}))})));default:return!0}}))})),we=Object(Ne.a)([Oe,_e.sortingName,_e.page],(function(e,t){var a;return t===x?pe()(a=ue()(e)).call(a):e})),ke=Object(Ne.a)([we],(function(e){return e.length})),Se=Object(Ne.a)([we,_e.page],(function(e,t){var a=10*t;return oe()(e).call(e,0,a)})),Ce=Object(Ne.a)([ke,_e.page],(function(e,t){return t===Math.ceil(e/10)})),xe=a(41),De=a.n(xe),Te=a(14),Be=a.n(Te),Le=a(96),Ge=a.n(Le),Re="XjiqrLwReWVMF9nxRDedw",Me="_1kJKADS8i-HJgNlrjWWrFa",Pe=function(e){var t=e.children,a=e.className,n=e.type,l=Ge()(e,["children","className","type"]);return s.a.createElement("button",De()({className:g()(Re,a),type:n},l),t)};Pe.defaultProps={className:"",type:"button"};var Ie=function(e){var t=e.className,a=Ge()(e,["className"]);return s.a.createElement(Pe,De()({className:g()(Me,t)},a))};Ie.displayName="main(Button)";var Fe={root:"_3ObFjhoQdaVkvIUCzwzupR",label:"T8I9MHybtPuACj9w-CGJf",field:"wdx-juUVkCs2W0s_jwO5n",field_adjacent:"_3ac4kg3NcTRjWpZeuS-mEy wdx-juUVkCs2W0s_jwO5n",tipChar:"_3fj_CYAEY4jmLNzJslQ8es"},He=function(e){var t=e.forwardedRef,a=e.className,n=e.inputMode,l=e.legend,r=e.tipChar,i=e.value,c=e.onChange,o=!!r;return s.a.createElement("div",{className:g()(Fe.root,a)},o&&s.a.createElement("span",{className:Fe.tipChar,"aria-hidden":"true"},r),s.a.createElement("label",{className:Fe.label,"aria-label":l},s.a.createElement("input",{ref:t,className:Fe[o?"field_adjacent":"field"],inputMode:n,type:"text",value:i,onChange:c})))};He.defaultProps={className:"",tipChar:void 0};var Je=Object(i.forwardRef)((function(e,t){return s.a.createElement(He,De()({},e,{forwardedRef:t}))}));Je.displayName="TextInput";var Ae,We,ze={root:"_3L9b7CbHf0_Zl7ktGB9iIo",adaptiveRow:"_2Ppvzct0ofv0LuCIW267Bj",amountMeter:"_3imFAsOnYXM5q48TMaix4R",filter:"_1POgWvhiT4aNyqQgL2SECp _2Ppvzct0ofv0LuCIW267Bj",filterControl:"_3ucs2qZ8N_HKho-XIheIaj",filterControl_first:"PdRQWl7F9_WcgqCD5rfef _3ucs2qZ8N_HKho-XIheIaj",filterControl_last:"_3zSTV9qt3yc0yNj9q0KG7F _3ucs2qZ8N_HKho-XIheIaj",filterControlGroup:"_37Z8vtRMH87GE9irx-432w",searchbar:"_1u-jTH27gP7te0DngqNHTT",sorting:"_Q4PERmNR9Gfv5J53OeyO _2Ppvzct0ofv0LuCIW267Bj",sortingControls:"_2ufm32W3UehwIrDL49vmCN",sortingButton:"_1OHxHQPi1jmX4tjqQK65v-",hasDarkTheme:"hasDarkTheme",tip:"_3ZmjWNDABEl2o_rYKJ3nub"},Ke=function(e){var t,a,n,l=e.totalAmount,r=e.visibleAmount,i=e.isFiltered,c=r===l;return s.a.createElement("p",{className:ze.amountMeter},c?E()(t="Всего ".concat(l,", показаны все")).call(t,i?" совпадения":""):E()(a=E()(n="Показано: ".concat(r," из ")).call(n,l)).call(a,i?" совпадений":""))},Ye=(Ae={},Be()(Ae,S,"заголовок"),Be()(Ae,C,"хэштег"),Ae),Ze=(We={},Be()(We,x,"новые"),Be()(We,D,"старые"),We),Qe="filter-group-label",qe="sorting-group-label",Ve=function(e){var t,a,n=e.className,l=e.filterTarget,r=e.searchString,c=e.sortingTarget,o=e.totalAmount,m=e.visibleAmount,u=e.onFilterToggle,d=e.onSearch,p=e.onSortingToggle,f=Object(i.useRef)();return Object(i.useEffect)((function(){var e;null===(e=f.current)||void 0===e||e.focus()}),[]),s.a.createElement("div",{className:g()(ze.root,n)},s.a.createElement("div",{className:be()(ze)},s.a.createElement("span",{className:ze.tip,id:Qe},"Цель поиска:"),s.a.createElement("div",{className:ze.filterControlGroup,"aria-labelledby":Qe,role:"radiogroup"},L()(t=_()(Ye)).call(t,(function(e,t,a){var n,r=N()(e,2),i=r[0],c=r[1],o=l===i;return n=0===t?ze.filterControl_first:t===a.length-1?ze.filterControl_last:ze.filterControl,s.a.createElement(Ie,{key:i,className:n,disabled:o,"aria-checked":o,role:"radio",onClick:function(){u(i)}},c)})))),s.a.createElement(Je,{ref:f,className:ze.searchbar,inputMode:"search",legend:"Введите текст для поиска",tipChar:l===C?"#":void 0,value:r,onChange:d}),s.a.createElement("div",{className:ze.sorting},s.a.createElement("span",{className:ze.tip,id:qe},"Сортировка:"),s.a.createElement("div",{className:ze.sortingControls,"aria-labelledby":qe,role:"radiogroup"},L()(a=_()(Ze)).call(a,(function(e){var t=N()(e,2),a=t[0],n=t[1],l=a===c;return s.a.createElement(Pe,{key:a,className:ze.sortingButton,disabled:l,"aria-checked":l,role:"radio",onClick:function(){p(a)}},"Сначала ".concat(n))})))),s.a.createElement(Ke,De()({isFiltered:""!==r},{totalAmount:o,visibleAmount:m})))};Ve.defaultProps={className:""};var Xe="_3vdQrFrAridmzq3B60dS6v",Ue=function(){return s.a.createElement("div",{className:Xe,role:"status"},s.a.createElement("span",{className:"Spinner","aria-label":"Пожалуйста, подождите..."}))},$e={root_series:"l_Tymn2Zz_SWLIRumBcym",langBadge:"_2zvyo--Y9eQeZJTZVxz5dM",langBadge_en:"_1IXnnPp8iGChiivp9n1g-s _2zvyo--Y9eQeZJTZVxz5dM",langBadge_ru:"nTuI3YJy3Ry88d-JZnJFg _2zvyo--Y9eQeZJTZVxz5dM",legend:"_27rP1Z6j20e_ttiOn8J2JR",link:"XNzKCvqfFtoZS7FzTG8Dv _235HRLN3jLDEDn-poHEkGD",seriesButton:"_2ijRa3sa6ykkC9pXmI0H5M",isExpanded:"_3EVPnJw8j1YIhuDN7jaOES",seriesList:"_2wafQwB3vRWMDEUw0zJBpA yYb7YSpYBNGcJBKMktNKx",tag:"_3_fA96LFtOtNvBmlw5JBEe",tags:"_2ni6tVu5mWvuENZYJGL_8R yYb7YSpYBNGcJBKMktNKx"},et=function(e){var t,a=e.lang,n=e.legend,l=e.tags;return s.a.createElement(s.a.Fragment,null,Boolean(a)&&s.a.createElement(s.a.Fragment,null," ",s.a.createElement("span",{className:g()($e["langBadge_".concat(a)])},a)),l.length>0&&s.a.createElement("ul",{className:$e.tags},L()(t=l).call(t,(function(e,t){return e?s.a.createElement("li",{className:$e.tag,key:t}," #".concat(e)):null}))),Boolean(n)&&s.a.createElement("span",{className:$e.legend}," ‒ ".concat(n)))};et.defaultProps={lang:"",legend:"",tags:[]};var tt=function(e){var t=e.caption,a=e.lang,n=e.url;return s.a.createElement("a",{className:$e.link,href:n,lang:a},t)},at=[O,k],nt=function(e){var t=e.subject,a=t.caption,n=t.lang,l=t.legend,r=t.series,c=t.tags,o=!!Object(m.c)(_e.searchString),u=Object(i.useState)({isExpanded:!1}),d=N()(u,2),p=d[0],f=d[1],v=Object(i.useRef)(!0),h=v.current?o:p.isExpanded,E=function(){v.current?f({isExpanded:!o}):f((function(e){return{isExpanded:!e.isExpanded}})),v.current&&(v.current=!1)};return s.a.createElement("li",{className:g()($e.root_series,Be()({},$e.isExpanded,h))},s.a.createElement("div",{className:$e.series},s.a.createElement("span",{className:$e.seriesButton,role:"button","aria-expanded":h,onClick:E,onKeyDown:function(e){he()(at).call(at,e.key)&&E()},tabIndex:0},a),s.a.createElement(et,{lang:n,legend:l,tags:c})),h&&s.a.createElement("ul",{className:$e.seriesList},L()(r).call(r,(function(e){var t=e.caption,a=e.tags,l=e.legend,r=e.url;return s.a.createElement("li",{key:r},s.a.createElement(tt,{caption:t,lang:n,url:r}),s.a.createElement(et,{legend:l,tags:a}))}))))};nt.displayName="SubjectsSeriesItem";var lt=function(e){var t=e.subject,a=t.caption,n=t.lang,l=t.legend,r=t.tags,i=t.url;return s.a.createElement("li",null,s.a.createElement(tt,{caption:a,lang:n,url:i}),s.a.createElement(et,{lang:n,legend:l,tags:r}))};lt.displayName="SubjectsSingleItem";var rt=function(e){var t=e.caption;return function(e){return Boolean(e.series)}(e)?s.a.createElement(nt,{key:t,subject:e}):s.a.createElement(lt,{key:t,subject:e})},it="_1DcrNJesSkglJntgPCXiQN",st="_2wD3krEptWDVEV-Kd78WZa",ct="JGjM_HSRO2w9Wp8clRQmT",ot="_1IhXyLaKGamPNzIp4WhpqS yYb7YSpYBNGcJBKMktNKx",mt=function(e){var t=e.message;return s.a.createElement("p",{className:ct},t)},ut=function(e){var t=e.className,a=e.list,n=e.hasFetchError,l=e.isLastPage,r=e.onShowMoreClick;return n?s.a.createElement(mt,{message:"Ошибка загрузки"}):a.length?s.a.createElement("div",{className:g()(it,t)},s.a.createElement("ul",{className:ot},L()(a).call(a,(function(e){return rt(e)}))),!l&&s.a.createElement(Ie,{className:st,onClick:r},"Показать ещё")):s.a.createElement(mt,{message:"Ничего не найдено"})};ut.defaultProps={className:""};var dt="_1L1MPijuMT0A_q5g0olaJk _2LGhsWi6Jbudt_8DFO4JTl",pt="_2gPN3TgnkzdBFoNSRXb2mS",ft="_2-VoBp7-Djx1jW9_M3gydp",gt="_1i95t5vnYt_4KuxQm-mA-T _33N9y-_8E5qQWx-KHnZpy9",vt="_3hwj23QG1FyDjOID9kH9dd",ht=function(){var e=Object(m.c)(ye.error),t=Object(m.c)(_e.filterName),a=Object(m.c)(_e.page),l=Object(m.c)(_e.searchString),r=Object(m.c)(ke),c=Object(m.c)(_e.sortingName),o=Object(m.c)(Se),u=Object(m.c)(ye.isComplete),d=Object(m.c)(Ce),p=se(n),f=p.fetchSubjects,g=p.searchInList,v=p.showNextListPage,h=p.toggleFilter,E=p.toggleSorting,b=d?r:10*a;return Object(i.useEffect)((function(){f()}),[f]),s.a.createElement("main",{className:dt},s.a.createElement("div",{className:pt},s.a.createElement("h1",{className:gt},"Полезные материалы по Computer Science")),u?s.a.createElement(s.a.Fragment,null,s.a.createElement(Ve,{className:ft,filterTarget:t,searchString:l,sortingTarget:c,totalAmount:r,visibleAmount:b,onFilterToggle:h,onSearch:function(e){g(e.target.value)},onSortingToggle:E}),s.a.createElement(ut,{className:vt,list:o,hasFetchError:!!e,isLastPage:d,onShowMoreClick:v})):s.a.createElement(Ue,null))},Et=function(){return s.a.createElement(v.d,null,s.a.createElement(v.b,{exact:!0,path:T.HOME,component:ht}),s.a.createElement(v.b,{path:T.NAMING,component:W}),s.a.createElement(v.b,null,s.a.createElement(v.a,{to:T.HOME})))},bt="ZT5eOrW43bltQrTj8B6Qh",Nt="_1y82f389r63h33k2eDBSeL _235HRLN3jLDEDn-poHEkGD",yt="_3caJGD8A1uHE56jEcv1zRw yYb7YSpYBNGcJBKMktNKx",_t=[{legend:"GitHub",url:"https://github.com/yialo/cs-reading-whitelist"},{legend:"Twitter",url:"https://twitter.com/xarroalex"},{legend:"CodeSandbox",url:"https://codesandbox.io/u/yialo/sandboxes"},{legend:"CodePen",url:"https://codepen.io/yialo/pens/public?grid_type=list"}],jt=function(){return s.a.createElement("footer",{className:bt},s.a.createElement("ul",{className:yt},L()(_t).call(_t,(function(e,t){var a=e.legend,n=e.url;return s.a.createElement("li",{key:t},s.a.createElement("a",{className:Nt,href:n},a))}))))},Ot="GKE4gXdwkk-tAd_zQj8G9",wt="_1gYASY4j52qDC7vNDgWzgm",kt="_36xoIfQjGpkc37beLRQ8ZW",St="_1g1wpGzxjJ52qxH3tjWLO3 yYb7YSpYBNGcJBKMktNKx",Ct="_39F4FkFruj5-IznrajrZbQ",xt="_25tj2S0BTmjHZAV8qTDK67",Dt=s.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),Tt=s.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),Bt=function(e){var t=e.isExpanded;return s.a.createElement("svg",{"aria-hidden":"true",className:kt,viewBox:"0 0 24 24",width:"100%",height:"100%"},s.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),t?Dt:Tt)},Lt=[[T.HOME,"Reading"],[T.NAMING,"Naming"]],Gt="AppNavMenu-list",Rt=function(e){var t=e.className,a=Object(i.useState)(!1),n=N()(a,2),l=n[0],r=n[1];return Object(i.useEffect)((function(){var e=function(e){e.key===w&&r((function(e){return e&&!e}))};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[]),s.a.createElement("nav",{className:g()(Ot,t,{isCollapsedScreenSm:!l})},s.a.createElement("button",{"aria-controls":Gt,"aria-expanded":l,"aria-label":"Меню",className:wt,type:"button",onClick:function(){r((function(e){return!e}))}},s.a.createElement(Bt,{isExpanded:l})),s.a.createElement("ul",{className:St,id:Gt},L()(Lt).call(Lt,(function(e){var t=N()(e,2),a=t[0],n=t[1];return s.a.createElement("li",{key:n},s.a.createElement(u.b,{activeClassName:xt,className:Ct,to:a,exact:!0},n))}))))};Rt.defaultProps={className:""};var Mt="CxEvpsv0JLS3XvaKsnuqF",Pt=function(e){var t=e.className,a=e.isDark,n=e.onToggle;return s.a.createElement(Ie,{className:g()(Mt,t),"aria-label":"Перейти к ".concat(a?"светлой":"тёмной"," теме"),onClick:n},"Go ".concat(a?"light":"dark"))};Pt.defaultProps={className:""};var It="_3B6VDikvxwefW_olt_SfHW",Ft="FceVENp3Yx1eukKSbNVRb",Ht=function(e){var t=e.className,a=Object(m.c)(je),l=se(n).toggleTheme;return s.a.createElement("header",{className:g()(It,t)},s.a.createElement(Rt,null),s.a.createElement(Pt,{className:Ft,isDark:a,onToggle:l}))};Ht.defaultProps={className:""};var Jt="_2rf_Q2K26T0u7ZOLvCQwCO",At="_3UmJpinBfJTx9D3eih_q8P",Wt=function(){var e=Object(m.c)(je);return Object(i.useEffect)((function(){var e;null==(e=document.getElementById("overlay"))||e.classList.add("isHidden")}),[]),s.a.createElement("div",{className:g()(Jt,{hasDarkTheme:e})},s.a.createElement(Ht,{className:At}),s.a.createElement(Et,null),s.a.createElement(jt,null))},zt=(a(378),a(379),a(77)),Kt=a.n(zt),Yt=a(200),Zt=a.n(Yt),Qt=a(201),qt=a.n(Qt),Vt=a(118),Xt=a.n(Vt),Ut=a(202),$t=a.n(Ut),ea=a(203),ta=a.n(ea),aa=a(123),na=a.n(aa),la="_3cd1deOZMIg_0jORC4NmcZ";function ra(e){var t=function(){if("undefined"==typeof Reflect||!Kt.a)return!1;if(Kt.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Kt()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=na()(e);if(t){var l=na()(this).constructor;a=Kt()(n,arguments,l)}else a=n.apply(this,arguments);return ta()(this,a)}}var ia=function(e){$t()(a,e);var t=ra(a);function a(){var e,n;Zt()(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return n=t.call.apply(t,E()(e=[this]).call(e,r)),Be()(Xt()(n),"state",{error:null}),n}return qt()(a,[{key:"render",value:function(){return this.state.error?s.a.createElement("p",{className:la},"Something went wrong in React app:("):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),a}(s.a.Component),sa=a(54),ca=a.n(sa),oa=a(55),ma=a.n(oa),ua=a(34),da=a.n(ua),pa=a(35),fa=a.n(pa),ga=a(36),va=a.n(ga),ha=a(37),Ea=a.n(ha),ba=a(56),Na=a.n(ba);function ya(e,t){var a=Na()(e);if(Ea.a){var n=Ea()(e);t&&(n=be()(n).call(n,(function(t){return va()(e,t).enumerable}))),a.push.apply(a,n)}return a}function _a(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)fa()(a=ya(Object(n),!0)).call(a,(function(t){Be()(e,t,n[t])}));else if(da.a)ma()(e,da()(n));else{var l;fa()(l=ya(Object(n))).call(l,(function(t){ca()(e,t,va()(n,t))}))}}return e}var ja={error:null,list:[],isComplete:!1};function Oa(e,t){var a=Na()(e);if(Ea.a){var n=Ea()(e);t&&(n=be()(n).call(n,(function(t){return va()(e,t).enumerable}))),a.push.apply(a,n)}return a}function wa(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)fa()(a=Oa(Object(n),!0)).call(a,(function(t){Be()(e,t,n[t])}));else if(da.a)ma()(e,da()(n));else{var l;fa()(l=Oa(Object(n))).call(l,(function(t){ca()(e,t,va()(n,t))}))}}return e}var ka={searchString:"",page:1,filterName:S,sortingName:x};function Sa(e,t){var a=Na()(e);if(Ea.a){var n=Ea()(e);t&&(n=be()(n).call(n,(function(t){return va()(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ca(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)fa()(a=Sa(Object(n),!0)).call(a,(function(t){Be()(e,t,n[t])}));else if(da.a)ma()(e,da()(n));else{var l;fa()(l=Sa(Object(n))).call(l,(function(t){ca()(e,t,va()(n,t))}))}}return e}var xa,Da={isDark:!1},Ta=Object(d.combineReducers)({fetch:function(e,t){var a=null!=e?e:ja;switch(t.type){case V.COMPLETE:return _a(_a({},a),{},{list:t.payload,isComplete:!0});case V.ERROR:return _a(_a({},a),{},{error:t.payload,isComplete:!0});default:return a}},list:function(e,t){var a=null!=e?e:ka;switch(t.type){case X.SEARCH:return wa(wa({},a),{},{page:1,searchString:t.payload});case X.FILTER_TOGGLE:return wa(wa({},a),{},{filterName:t.payload,page:1});case X.SORTING_TOGGLE:return wa(wa({},a),{},{sortingName:t.payload});case X.NEXT_PAGE:return wa(wa({},a),{},{page:a.page+1});default:return a}},theme:function(e,t){var a=null!=e?e:Da;return t.type===U.TOGGLE?Ca(Ca({},a),{},{isDark:!a.isDark}):a}}),Ba=Object(d.applyMiddleware)(p.a),La=Object(d.createStore)(Ta,Ba),Ga=function(){return s.a.createElement(s.a.StrictMode,null,s.a.createElement(ia,null,s.a.createElement(u.a,null,s.a.createElement(m.a,{store:La},s.a.createElement(Wt,null)))))};xa=document.getElementById("app-root"),o.a.render(s.a.createElement(Ga,null),xa)}});