"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[639],{4050:(e,s,a)=>{a.r(s),a.d(s,{default:()=>ke});var n=a(8669),l=a(5586),t=a(6489);var r=a(5312),c=a(4438),i=a(4264);a(6519);var o=a(5048),d=a(1890);const u=e=>e.links.process,g=e=>e.links.error,m=e=>e.links.filter,p=e=>e.links.searchString,v=e=>e.links.sorting,h=e=>e.links.page,N=(0,o.P1)([e=>e.links.list,p,m],((e,s,a)=>{const n=s.toLowerCase();return""===n?e:e.filter((e=>{switch(a){case d.g.CAPTION:var s;return e.caption.toLowerCase().includes(n)||(null===(s=e.series)||void 0===s?void 0:s.some((e=>e.caption.toLowerCase().includes(n))));case d.g.HASHTAG:var l,t;return!(null===(l=e.tags)||void 0===l||!l.some((e=>e.toLowerCase().includes(n))))||(null===(t=e.series)||void 0===t?void 0:t.some((e=>{var s;return null===(s=e.tags)||void 0===s?void 0:s.some((e=>e.toLowerCase().includes(n)))})));case d.g.URL:var r,c;return(null===(r=e.url)||void 0===r?void 0:r.toLowerCase().includes(n))||(null===(c=e.series)||void 0===c?void 0:c.some((e=>e.url.toLowerCase().includes(n))));default:return!0}}))})),x=(0,o.P1)([N,v,h],((e,s)=>s===d.F.NEW?[...e].reverse():e)),j=(0,o.P1)([x],(e=>e.length)),f=(0,o.P1)([x,h],((e,s)=>{const a=10*s;return e.slice(0,a)})),C=(0,o.P1)([j,h],((e,s)=>s===Math.ceil(e/10)));var b=a(7353),k=a(468);const A="cnPD1fdWBv8gudQvc4V0",E="h9FpGR2xoImRCH6j79zq",T="cKj4os62WuKgbFZndaD2",I="XprvhBXhXJW04FqyGVol GCrvEBOo9vjGxmdeYo6h",w="mT_XoJWTV71DCDC7Z9Zd",P="q6TlqQRw9uzWQQNtrtIt eLMys6WuT5CYHEs4A5ez",R="ciZWwponyTs8IR7WFNfg",S="UACt3VoHvYFl3kiZmgHQ GCrvEBOo9vjGxmdeYo6h",y="cBXWkNfiCDnby0RaMbKA";var L=a(2880);const G="filter-toggle-button",_=e=>{let{className:s,dict:a,tip:l,tipIdPrefix:t,value:c,onChange:i}=e;const[o,d]=n.useState(!1),u="select-tip".concat(t?"-".concat(t):""),g=n.useRef(null);n.useEffect((()=>{const e=e=>{g.current&&!g.current.contains(e.target)&&d(!1)};return document.addEventListener("click",e),()=>{document.removeEventListener("click",e)}}),[]);const m=n.useMemo((()=>Object.entries(a)),[a]);return(0,L.jsxs)("div",{className:(0,b.Z)(A,s),children:[(0,L.jsx)("span",{className:E,id:u,children:l}),(0,L.jsxs)("div",{className:T,children:[(0,L.jsx)(k.z,{ref:g,className:(0,b.Z)(I,{[w]:o}),id:G,"aria-expanded":o,"aria-haspopup":"listbox","aria-labelledby":"".concat(u," ").concat(G),onClick:()=>{d((e=>!e))},onKeyDown:e=>{var s;let{key:a}=e;if(!o&&a===r.Yf.DOWN)return void d(!0);if(a===r.Yf.ESCAPE)return void d(!1);let n=0;if(a===r.Yf.DOWN?n=1:a===r.Yf.UP&&(n=-1),!n)return;const l=m.findIndex((e=>e[0]===c)),t=null===(s=m[l+n])||void 0===s?void 0:s[0];t&&i(t)},children:a[c]}),o&&(0,L.jsx)("ul",{className:P,role:"listbox",children:m.map((e=>{let[s,a]=e;const n=s===c;return(0,L.jsx)("li",{className:R,role:"option","aria-selected":n,children:(0,L.jsx)(k.z,{className:(0,b.Z)(S,{[y]:n}),onClick:()=>{var e;d(!1),i(s),null===(e=g.current)||void 0===e||e.focus()},onKeyDown:e=>{e.key===r.Yf.ESCAPE&&d(!1)},children:a})},s)}))})]})]})},z="HfokXPFm2x4mO85QKYvt",F="ZRFdCTtshaZ7wqNzH0l7",q="PWpyWNE7L5v19g5CkdIQ",W="_1AEWzTctQPJGgqQyAohQ",B="EwaT8ElIQDzYJVobwsCa",Y="KjP6ErKgMEPfYOu2_NzZ p67v6nA1BizqSmi4NAqY",Z="OhGlkgdCobnSvpDwMIIw p67v6nA1BizqSmi4NAqY",M=e=>{let{className:s,forwardedRef:a,inputMode:n,legend:l,tipChar:t,value:r,onChange:c}=e;const i=!!t,o=""!==r;return(0,L.jsxs)("div",{className:(0,b.Z)(z,s),children:[i&&(0,L.jsx)("span",{className:Y,"aria-hidden":"true",children:t}),(0,L.jsx)("label",{className:F,"aria-label":l,children:(0,L.jsx)("input",{ref:a,className:(0,b.Z)(q,{[W]:i,[B]:o}),inputMode:n,type:"text",value:r,onChange:e=>{c(e.target.value)}})}),o&&(0,L.jsx)(k.z,{"aria-label":"Очистить поле ввода",className:Z,onClick:()=>{var e;(c(""),a&&"function"!=typeof a)&&(null===(e=a.current)||void 0===e||e.focus())}})]})},V=n.forwardRef(((e,s)=>(0,L.jsx)(M,{...e,forwardedRef:s})));V.displayName="TextInput";const D="pueP150hQAhUBnwv9qVw",K="wmlFuueEugqioaIPaqwW",Q="IGrRtggQfpFPN6EWs0GJ ghUThR7qTl_gBRG1WFk6",H="xbnWDmgtuXNoIEilpMPI",O="oYNDXIRpJnhS_pqLAlRI ghUThR7qTl_gBRG1WFk6",J="RIpyShOUnRS70lI_mfRk",X="vDI_d8kJDJL3RTgQf9kz",U="m7av5JbFR4keIkZ7eV9q",$=e=>{let{totalAmount:s,visibleAmount:a,isFiltered:n}=e;const l=a===s;return(0,L.jsx)("p",{className:K,children:l?"Всего ".concat(s,", показаны все").concat(n?" совпадения":""):"Показано: ".concat(a," из ").concat(s).concat(n?" совпадений":"")})};$.displayName="ControlBar-AmountMeter";const ee={[d.g.CAPTION]:"заголовку",[d.g.HASHTAG]:"хэштегу",[d.g.URL]:"URL-адресу"},se={[d.F.NEW]:"новые",[d.F.OLD]:"старые"},ae={[d.g.CAPTION]:"abc",[d.g.HASHTAG]:"#",[d.g.URL]:"://"},ne="sorting-group-label",le=e=>{let{className:s,filterTarget:a,searchString:l,sortingTarget:t,totalAmount:r,visibleAmount:c,onFilterToggle:i,onSearch:o,onSortingToggle:d}=e;const u=n.useRef(null);return n.useEffect((()=>{var e;null===(e=u.current)||void 0===e||e.focus()}),[]),(0,L.jsxs)("div",{className:(0,b.Z)(D,s),children:[(0,L.jsx)("div",{className:Q,children:(0,L.jsx)(_,{className:s,tip:"Искать по:",dict:ee,value:a,onChange:i})}),(0,L.jsx)(V,{ref:u,className:H,inputMode:"search",legend:"Введите текст для поиска",tipChar:ae[a],value:l,onChange:o}),(0,L.jsxs)("div",{className:O,children:[(0,L.jsx)("span",{className:J,id:ne,children:"Сортировка:"}),(0,L.jsx)("div",{className:X,"aria-labelledby":ne,role:"radiogroup",children:Object.entries(se).map((e=>{let[s,a]=e;const n=s===t;return(0,L.jsx)(k.z,{className:U,disabled:n,"aria-checked":n,role:"radio",onClick:()=>{d(s)},children:"Сначала ".concat(a)},s)}))})]}),(0,L.jsx)($,{isFiltered:""!==l,totalAmount:r,visibleAmount:c})]})};var te=a(6606);const re={root_series:"IzF7_U1WtVk9xqt03SJ_",langBadge:"rznsmK_PJVGcqlGVpBNx",langBadge_en:"PLf8jJLaPCrg8ezempsw rznsmK_PJVGcqlGVpBNx",langBadge_ru:"sq9Q8pUTQmAHk7V_Y__Z rznsmK_PJVGcqlGVpBNx",legend:"XCA02rjmhT3pXPoLLJHf",link:"RDVYvwmnJc4GTnvKfXNP TTwZQh8ZRgEekxufKSIX",seriesButton:"RXTK2GaukGEKcAIs_Zvr",isExpanded:"i4Kh2NWGMPe7GntXnxNB",seriesList:"qycNrZOVOw48iceCH5JB eLMys6WuT5CYHEs4A5ez",seriesItem:"tPqg_5xPm6Cw2SFcPoO8",tag:"XTLYNwdlyj0uwPADfAJ8",tags:"zuH0atFUrQ1DzP3kmrzz eLMys6WuT5CYHEs4A5ez"},ce=e=>{let{lang:s="",legend:a="",tags:n=[]}=e;return(0,L.jsxs)(L.Fragment,{children:[Boolean(s)&&(0,L.jsxs)(L.Fragment,{children:[" ",(0,L.jsx)("span",{className:(0,b.Z)(re["langBadge_".concat(s)]),children:s})]}),n.length>0&&(0,L.jsx)("ul",{className:re.tags,children:n.map(((e,s)=>e?(0,L.jsx)("li",{className:re.tag,children:" #".concat(e)},s):null))}),Boolean(a)&&(0,L.jsx)("span",{className:re.legend,children:" ‒ ".concat(a)})]})};ce.displayName="SubjectsItem-Appendix";const ie=e=>{let{caption:s,lang:a,url:n}=e;return(0,L.jsx)("a",{className:re.link,href:n,hrefLang:a,lang:a,children:s})};ie.displayName="SubjectsItem-Link";const oe=[r.Yf.ENTER,r.Yf.SPACE],de=e=>{let{className:s,subject:a}=e;const{caption:t,lang:r,legend:c,series:i,tags:o}=a,d=!!(0,l.v9)(p),[u,g]=n.useState({isExpanded:!1}),m=n.useRef(!0),v=m.current?d:u.isExpanded,h=()=>{m.current?g({isExpanded:!d}):g((e=>({isExpanded:!e.isExpanded}))),m.current&&(m.current=!1)};return(0,L.jsxs)("li",{className:(0,b.Z)(re.root_series,s,{[re.isExpanded]:v}),children:[(0,L.jsxs)("div",{className:re.series,children:[(0,L.jsx)("span",{className:re.seriesButton,role:"button","aria-expanded":v,onClick:h,onKeyDown:e=>{var s,a;s=oe,a=e.key,s.includes(a)&&h()},tabIndex:0,children:t}),(0,L.jsx)(ce,{lang:r,legend:c,tags:o})]}),v&&(0,L.jsx)("ul",{className:re.seriesList,children:i.map((e=>{let{caption:s,lang:a,tags:n,legend:l,url:t}=e;return(0,L.jsxs)("li",{className:re.seriesItem,children:[(0,L.jsx)(ie,{caption:s,lang:r,url:t}),(0,L.jsx)(ce,{lang:a,legend:l,tags:n})]},t)}))})]})};de.displayName="SubjectsItem_series";const ue=e=>{let{className:s,subject:a}=e;const{caption:n,lang:l,legend:t,tags:r,url:c}=a;return(0,L.jsxs)("li",{className:s,children:[(0,L.jsx)(ie,{caption:n,lang:l,url:c}),(0,L.jsx)(ce,{lang:l,legend:t,tags:r})]})};ue.displayName="SubjectsItem_single";const ge=e=>{const s=e.subject.caption;return a=e.subject,Boolean(a.series)?(0,L.jsx)(de,{className:e.className,subject:e.subject},s):(0,L.jsx)(ue,{className:e.className,subject:e.subject},s);var a},me={root:"on5QR9JxPTGnuBIpM03Q",button:"tnAivk0hy_VRMxp4x0h6",fallbackMessage:"xOrYtIPQWBrIieVw6EAt",list:"VPLnq7eXDZ6sg7VupRLk eLMys6WuT5CYHEs4A5ez",item:"TS6ASezy0Cd1aV9qbw6I",item_last:"IRdjzQQV6HVli3zxAH7_ TS6ASezy0Cd1aV9qbw6I"},pe=e=>{let{message:s}=e;return(0,L.jsx)("p",{className:me.fallbackMessage,children:s})};pe.displayName="Subjects-FallbackMessage";const ve=e=>{let{className:s,list:a,hasFetchError:n,isLastPage:l,onShowMoreClick:t}=e;return n?(0,L.jsx)(pe,{message:"Ошибка загрузки"}):a.length?(0,L.jsxs)("div",{className:(0,b.Z)(me.root,s),children:[(0,L.jsx)("ul",{className:me.list,children:a.map(((e,s,a)=>ge({className:me[s===a.length-1?"item_last":"item"],subject:e})))}),!l&&(0,L.jsx)(te.c,{className:me.button,onClick:t,children:"Показать ещё"})]}):(0,L.jsx)(pe,{message:"Ничего не найдено"})},he="rfbv0AZzsp029oPNRdwG",Ne="Wwo0PSCls2s00tb3Ugqv",xe="YjFG0XYUMu4v5ukpnWpb",je="kZRwCpvC2Su59K_tU2wG rcOJb63YSobC5ObLKBCL",fe="I6SNCEv1mGOC9V3YE62R",Ce="qN12Ty28Gv2_dRAuk_ZQ",be=()=>{const e=(0,l.v9)(u),s=(0,l.v9)(g),a=(0,l.v9)(m),o=(0,l.v9)(p),d=(0,l.v9)(h),N=(0,l.v9)(j),x=(0,l.v9)(v),b=(0,l.v9)(f),k=(0,l.v9)(C),A=(0,l.I0)(),E=k?N:10*d,T=e=>{var s;A((s=e,{type:i.K.SEARCH,payload:s}))},I=()=>{A({type:i.K.NEXT_PAGE})},w=e=>{A((e=>({type:i.K.FILTER,payload:e}))(e))},P=e=>{A((e=>({type:i.K.SORTING,payload:e}))(e))};n.useEffect((()=>{e===r.dM.IDLE&&A({type:i.K.FETCH_START})}),[e,A]);return(0,L.jsx)(c.Z,{children:(0,L.jsx)("div",{className:he,children:(()=>{switch(e){case r.dM.IDLE:case r.dM.LOADING:return(0,L.jsx)(t.p,{className:Ce});default:return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:Ne,children:(0,L.jsx)("h1",{className:je,children:"Полезные материалы по Computer Science"})}),(0,L.jsx)(le,{className:xe,filterTarget:a,searchString:o,sortingTarget:x,totalAmount:N,visibleAmount:E,onFilterToggle:w,onSearch:T,onSortingToggle:P}),(0,L.jsx)(ve,{className:fe,list:b,hasFetchError:!!s,isLastPage:k,onShowMoreClick:I})]})}})()})})},ke=()=>(0,L.jsx)(be,{})}}]);