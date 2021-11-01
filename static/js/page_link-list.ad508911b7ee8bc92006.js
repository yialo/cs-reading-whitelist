"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[639],{6566:(e,a,t)=>{t.r(a),t.d(a,{default:()=>Ee});var s=t(8669),l=t(5586),n=t(6489),r=t(9707),c=t(4438),i=t(1890),o=t(4264);t(9886);t(6519);var m=t(5048);t(3410);const u={error:e=>e.links.error,fullList:e=>e.links.list,isComplete:e=>{const{process:a}=e.links;return"SUCCESS"===a||"FAILURE"===a}},d={filterName:e=>e.links.filterName,page:e=>e.links.page,searchString:e=>e.links.searchString,sortingName:e=>e.links.sortingName},g=(0,m.P1)([u.fullList,d.searchString,d.filterName],((e,a,t)=>{const s=a.toLowerCase();return""===s?e:e.filter((e=>{switch(t){case i.g.CAPTION:var a;return e.caption.toLowerCase().includes(s)||(null===(a=e.series)||void 0===a?void 0:a.some((e=>e.caption.toLowerCase().includes(s))));case i.g.HASHTAG:var l;return e.tags.some((e=>e.toLowerCase().includes(s)))||(null===(l=e.series)||void 0===l?void 0:l.some((e=>{var a;return null===(a=e.tags)||void 0===a?void 0:a.some((e=>e.toLowerCase().includes(s)))})));case i.g.URL:var n,r;return(null===(n=e.url)||void 0===n?void 0:n.toLowerCase().includes(s))||(null===(r=e.series)||void 0===r?void 0:r.some((e=>e.url.toLowerCase().includes(s))));default:return!0}}))})),E=(0,m.P1)([g,d.sortingName,d.page],((e,a)=>a===i.F.NEW?[...e].reverse():e)),p=(0,m.P1)([E],(e=>e.length)),N=(0,m.P1)([E,d.page],((e,a)=>{const t=a*r.v;return e.slice(0,t)})),v=(0,m.P1)([p,d.page],((e,a)=>a===Math.ceil(e/r.v)));var C=t(7353),h=t(468),k=t(5312);const b="cnPD1fdWBv8gudQvc4V0",f="h9FpGR2xoImRCH6j79zq",y="cKj4os62WuKgbFZndaD2",R="XprvhBXhXJW04FqyGVol GCrvEBOo9vjGxmdeYo6h",S="mT_XoJWTV71DCDC7Z9Zd",T="q6TlqQRw9uzWQQNtrtIt eLMys6WuT5CYHEs4A5ez",A="ciZWwponyTs8IR7WFNfg",L="UACt3VoHvYFl3kiZmgHQ GCrvEBOo9vjGxmdeYo6h",P="cBXWkNfiCDnby0RaMbKA",I="filter-toggle-button",w=({className:e,dict:a,tip:t,tipIdPrefix:l,value:n,onChange:r})=>{const[c,i]=s.useState(!1),o="select-tip"+(l?`-${l}`:""),m=s.useRef(null);return s.useEffect((()=>{const e=()=>{i((e=>e&&!e))},a=a=>{a.key===k.Y.ESCAPE&&e()},t=a=>{a.target!==m.current&&e()};return document.addEventListener("keydown",a),document.addEventListener("click",t),()=>{document.removeEventListener("keydown",a),document.removeEventListener("click",t)}}),[]),s.createElement("div",{className:(0,C.Z)(b,e)},s.createElement("span",{className:f,id:o},t),s.createElement("div",{className:y},s.createElement(h.z,{ref:m,className:(0,C.Z)(R,{[S]:c}),id:I,"aria-haspopup":"listbox","aria-labelledby":`${o} ${I}`,onClick:()=>{i((e=>!e))}},a[n]),c&&s.createElement("ul",{className:T,role:"listbox"},Object.entries(a).map((([e,a])=>{const t=e===n;return s.createElement("li",{key:e,className:A,role:"option","aria-selected":t},s.createElement(h.z,{className:(0,C.Z)(L,{[P]:t}),onClick:()=>{i(!1),r(e)}},a))})))))};var _=t(6780);const F={root:"HfokXPFm2x4mO85QKYvt",label:"ZRFdCTtshaZ7wqNzH0l7",field:"PWpyWNE7L5v19g5CkdIQ",field_adjacent:"t3P6nFV1RKi0irxJNu7i PWpyWNE7L5v19g5CkdIQ",tipChar:"KjP6ErKgMEPfYOu2_NzZ"},x=({className:e,forwardedRef:a,inputMode:t,legend:l,tipChar:n,value:r,onChange:c})=>{const i=!!n;return s.createElement("div",{className:(0,C.Z)(F.root,e)},i&&s.createElement("span",{className:F.tipChar,"aria-hidden":"true"},n),s.createElement("label",{className:F.label,"aria-label":l},s.createElement("input",{ref:a,className:F[i?"field_adjacent":"field"],inputMode:t,type:"text",value:r,onChange:c})))},G=s.forwardRef(((e,a)=>s.createElement(x,(0,_.Z)({},e,{forwardedRef:a}))));G.displayName="TextInput";const Z="pueP150hQAhUBnwv9qVw",j="wmlFuueEugqioaIPaqwW",W="IGrRtggQfpFPN6EWs0GJ ghUThR7qTl_gBRG1WFk6",z="xbnWDmgtuXNoIEilpMPI",B="oYNDXIRpJnhS_pqLAlRI ghUThR7qTl_gBRG1WFk6",V="RIpyShOUnRS70lI_mfRk",q="vDI_d8kJDJL3RTgQf9kz",H="m7av5JbFR4keIkZ7eV9q",K=({totalAmount:e,visibleAmount:a,isFiltered:t})=>{const l=a===e;return s.createElement("p",{className:j},l?`Всего ${e}, показаны все${t?" совпадения":""}`:`Показано: ${a} из ${e}${t?" совпадений":""}`)};K.displayName="ControlBar-AmountMeter";const Y={[i.g.CAPTION]:"заголовку",[i.g.HASHTAG]:"хэштегу",[i.g.URL]:"URL-адресу"},M={[i.F.NEW]:"новые",[i.F.OLD]:"старые"},Q="sorting-group-label",J=e=>{switch(e){case i.g.HASHTAG:return"#";case i.g.URL:return"://";default:return}},O=({className:e,filterTarget:a,searchString:t,sortingTarget:l,totalAmount:n,visibleAmount:r,onFilterToggle:c,onSearch:i,onSortingToggle:o})=>{const m=s.useRef(null);return s.useEffect((()=>{var e;null===(e=m.current)||void 0===e||e.focus()}),[]),s.createElement("div",{className:(0,C.Z)(Z,e)},s.createElement("div",{className:W},s.createElement(w,{className:e,tip:"Искать по:",dict:Y,value:a,onChange:c})),s.createElement(G,{ref:m,className:z,inputMode:"search",legend:"Введите текст для поиска",tipChar:J(a),value:t,onChange:i}),s.createElement("div",{className:B},s.createElement("span",{className:V,id:Q},"Сортировка:"),s.createElement("div",{className:q,"aria-labelledby":Q,role:"radiogroup"},Object.entries(M).map((([e,a])=>{const t=e===l;return s.createElement(h.z,{key:e,className:H,disabled:t,"aria-checked":t,role:"radio",onClick:()=>{o(e)}},`Сначала ${a}`)})))),s.createElement(K,{isFiltered:""!==t,totalAmount:n,visibleAmount:r}))};var X=t(6606);const U={root_series:"IzF7_U1WtVk9xqt03SJ_",langBadge:"rznsmK_PJVGcqlGVpBNx",langBadge_en:"PLf8jJLaPCrg8ezempsw rznsmK_PJVGcqlGVpBNx",langBadge_ru:"sq9Q8pUTQmAHk7V_Y__Z rznsmK_PJVGcqlGVpBNx",legend:"XCA02rjmhT3pXPoLLJHf",link:"RDVYvwmnJc4GTnvKfXNP TTwZQh8ZRgEekxufKSIX",seriesButton:"RXTK2GaukGEKcAIs_Zvr",isExpanded:"i4Kh2NWGMPe7GntXnxNB",seriesList:"qycNrZOVOw48iceCH5JB eLMys6WuT5CYHEs4A5ez",seriesItem:"tPqg_5xPm6Cw2SFcPoO8",tag:"XTLYNwdlyj0uwPADfAJ8",tags:"zuH0atFUrQ1DzP3kmrzz eLMys6WuT5CYHEs4A5ez"},D=({lang:e="",legend:a="",tags:t=[]})=>s.createElement(s.Fragment,null,Boolean(e)&&s.createElement(s.Fragment,null," ",s.createElement("span",{className:(0,C.Z)(U[`langBadge_${e}`])},e)),t.length>0&&s.createElement("ul",{className:U.tags},t.map(((e,a)=>e?s.createElement("li",{className:U.tag,key:a},` #${e}`):null))),Boolean(a)&&s.createElement("span",{className:U.legend},` ‒ ${a}`));D.displayName="SubjectsItem-Appendix";const $=({caption:e,lang:a,url:t})=>s.createElement("a",{className:U.link,href:t,hrefLang:a,lang:a},e);$.displayName="SubjectsItem-Link";const ee=[k.Y.ENTER,k.Y.SPACE],ae=({className:e,subject:a})=>{const{caption:t,lang:n,legend:r,series:c,tags:i}=a,o=!!(0,l.v9)(d.searchString),[m,u]=s.useState({isExpanded:!1}),g=s.useRef(!0),E=g.current?o:m.isExpanded,p=()=>{g.current?u({isExpanded:!o}):u((e=>({isExpanded:!e.isExpanded}))),g.current&&(g.current=!1)};return s.createElement("li",{className:(0,C.Z)(U.root_series,e,{[U.isExpanded]:E})},s.createElement("div",{className:U.series},s.createElement("span",{className:U.seriesButton,role:"button","aria-expanded":E,onClick:p,onKeyDown:e=>{var a,t;a=ee,t=e.key,a.includes(t)&&p()},tabIndex:0},t),s.createElement(D,{lang:n,legend:r,tags:i})),E&&s.createElement("ul",{className:U.seriesList},c.map((({caption:e,lang:a,tags:t,legend:l,url:r})=>s.createElement("li",{key:r,className:U.seriesItem},s.createElement($,{caption:e,lang:n,url:r}),s.createElement(D,{lang:a,legend:l,tags:t}))))))};ae.displayName="SubjectsItem_series";const te=({className:e,subject:a})=>{const{caption:t,lang:l,legend:n,tags:r,url:c}=a;return s.createElement("li",{className:e},s.createElement($,{caption:t,lang:l,url:c}),s.createElement(D,{lang:l,legend:n,tags:r}))};te.displayName="SubjectsItem_single";const se=e=>{const a=e.subject.caption;return t=e.subject,Boolean(t.series)?s.createElement(ae,{key:a,className:e.className,subject:e.subject}):s.createElement(te,{key:a,className:e.className,subject:e.subject});var t},le={root:"on5QR9JxPTGnuBIpM03Q",button:"tnAivk0hy_VRMxp4x0h6",fallbackMessage:"xOrYtIPQWBrIieVw6EAt",list:"VPLnq7eXDZ6sg7VupRLk eLMys6WuT5CYHEs4A5ez",item:"TS6ASezy0Cd1aV9qbw6I",item_last:"IRdjzQQV6HVli3zxAH7_ TS6ASezy0Cd1aV9qbw6I"},ne=({message:e})=>s.createElement("p",{className:le.fallbackMessage},e);ne.displayName="Subjects-FallbackMessage";const re=({className:e,list:a,hasFetchError:t,isLastPage:l,onShowMoreClick:n})=>t?s.createElement(ne,{message:"Ошибка загрузки"}):a.length?s.createElement("div",{className:(0,C.Z)(le.root,e)},s.createElement("ul",{className:le.list},a.map(((e,a,t)=>se({className:le[a===t.length-1?"item_last":"item"],subject:e})))),!l&&s.createElement(X.c,{className:le.button,onClick:n},"Показать ещё")):s.createElement(ne,{message:"Ничего не найдено"}),ce="rfbv0AZzsp029oPNRdwG",ie="Wwo0PSCls2s00tb3Ugqv",oe="YjFG0XYUMu4v5ukpnWpb",me="kZRwCpvC2Su59K_tU2wG rcOJb63YSobC5ObLKBCL",ue="I6SNCEv1mGOC9V3YE62R",de="qN12Ty28Gv2_dRAuk_ZQ",ge=()=>{const e=(0,l.v9)(u.error),a=(0,l.v9)(d.filterName),t=(0,l.v9)(d.page),i=(0,l.v9)(d.searchString),m=(0,l.v9)(p),g=(0,l.v9)(d.sortingName),E=(0,l.v9)(N),C=(0,l.v9)(u.isComplete),h=(0,l.v9)(v),k=(0,l.I0)(),b=h?m:r.v*t;return s.useEffect((()=>{k({type:o.K.FETCH_START})}),[k]),s.createElement(c.Z,null,s.createElement("div",{className:ce},C?s.createElement(s.Fragment,null,s.createElement("div",{className:ie},s.createElement("h1",{className:me},"Полезные материалы по Computer Science")),s.createElement(O,{className:oe,filterTarget:a,searchString:i,sortingTarget:g,totalAmount:m,visibleAmount:b,onFilterToggle:e=>{k((e=>({type:o.K.FILTER,payload:e}))(e))},onSearch:e=>{var a;k((a=e.target.value,{type:o.K.SEARCH,payload:a}))},onSortingToggle:e=>{k((e=>({type:o.K.SORTING,payload:e}))(e))}}),s.createElement(re,{className:ue,list:E,hasFetchError:!!e,isLastPage:h,onShowMoreClick:()=>{k({type:o.K.NEXT_PAGE})}})):s.createElement(n.p,{className:de})))},Ee=()=>s.createElement(ge,null)},4438:(e,a,t)=>{t.d(a,{Z:()=>n});var s=t(8669);const l="qbmebYa0uI8G2zFDy8y2",n=({children:e})=>s.createElement("main",{className:l},e)}}]);