(self.webpackChunk=self.webpackChunk||[]).push([[639],{8580:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ge});var n=a(8669),l=a(2120),r=a(1435),s=a(8040),c=a(5704),i=a(5487),o=a.n(i),m=a(3789),u=a.n(m),g=a(489),d=a.n(g),f=a(4447),v=a.n(f),N=a(7853),_=a.n(N),p=a(6680),E=a.n(p),h=a(4238),b=a.n(h),k=a(3907);const S="PYTW_LpXZnnDsEYU5FZ-Q",C="_2eRYnMxoXqcXTvLVWA_K5r",T="_1hU4TS5G091BAXiVWoXRwM",j="_4L1E-pJN9hD0QvfdZRRAP _38sfMDSjY3_PUv9dnU2H9I",A="_1hxTO-cY4r4Bz4Q8POf58F _1x1k1SAqtVpgY-dlVRUpwU",y="_1Lg8QjmbzveQ9ZKth0eKog",x="_1xugciLG43VNO63NfL5BPD _38sfMDSjY3_PUv9dnU2H9I",F="_1DQC9nJ8Pcm_rxmevaPiNy";var w=function(e){var t,a=e.className,l=e.filterDict,r=e.tip,s=e.tipIdPrefix,c=e.value,i=e.onChange,o=(0,n.useState)(!1),m=u()(o,2),g=m[0],f=m[1],N="select-tip".concat(s?"-".concat(s):"");return n.createElement("div",{className:b()(S,a)},n.createElement("span",{className:C,id:N},r),n.createElement("div",{className:T},n.createElement(k.z,{className:j,id:"filter","aria-labelledby":N,onClick:function(){f((function(e){return!e}))}},l[c]),g&&n.createElement("ul",{className:A,role:"listbox"},v()(t=d()(l)).call(t,(function(e){var t=u()(e,2),a=t[0],l=t[1],r=a===c;return n.createElement("li",{key:a,className:y,role:"option","aria-selected":r},n.createElement(k.z,{className:b()(x,E()({},F,r)),onClick:function(){f(!1),i(a)}},l))})))))};const R={root:"_2WuesV3NgTJtFKL2zCrI-4",label:"_2M2EPKNTG7Leb3SHE7FaW6",field:"_2ku0tW2m0j8PKBaA9a-Npt",field_adjacent:"_3qSimoGV3R282wJWNCvp4- _2ku0tW2m0j8PKBaA9a-Npt",tipChar:"_1Tw-ltkSwgz0bk5DawCGVQ"};var U=function(e){var t=e.className,a=e.forwardedRef,l=e.inputMode,r=e.legend,s=e.tipChar,c=e.value,i=e.onChange,o=!!s;return n.createElement("div",{className:b()(R.root,t)},o&&n.createElement("span",{className:R.tipChar,"aria-hidden":"true"},s),n.createElement("label",{className:R.label,"aria-label":r},n.createElement("input",{ref:a,className:R[o?"field_adjacent":"field"],inputMode:l,type:"text",value:c,onChange:i})))};U.displayName="TextInput";var P=(0,n.forwardRef)((function(e,t){return n.createElement(U,o()({},e,{forwardedRef:t}))}));P.displayName="TextInput";var B=a(2488),D=a.n(B);const M={root:"zAz4DaPHJNOOu8Akv_t2R",adaptiveRow:"_2Y5NON0TiEtmWif_8PUhFo",amountMeter:"_23f5yfg1ENXS3I0nY1Ib9W",filter:"_2tSHuzGlRH_xqjqcCSJfSK _2Y5NON0TiEtmWif_8PUhFo",filterControl:"GvKZJguDX_XtjuQtJtFQY",filterControl_first:"_1BcFMOJBNC_xlMrAQ8Nojc GvKZJguDX_XtjuQtJtFQY",filterControl_last:"_3k0bydy0-PryPZ4mnLqQpq GvKZJguDX_XtjuQtJtFQY",filterControlGroup:"_2z5wU9a0OOxwiYiaMHi4q-",searchbar:"_2cGwpNYmU82aPHiI_H50i",sorting:"_2zvrJrOovE-M86aHlRhuIF _2Y5NON0TiEtmWif_8PUhFo",sortingTip:"_1zx6-pXBvY3W4F-BW3_f-d",sortingControls:"_148mKKW7Z0z7v1dkShpB0o",sortingButton:"_3061pO-3cyqBQf_-Bnmuy5",hasDarkTheme:"hasDarkTheme"};var Y,L,Q=function(e){var t,a,l,r=e.totalAmount,s=e.visibleAmount,c=e.isFiltered,i=s===r;return n.createElement("p",{className:M.amountMeter},i?D()(t="Всего ".concat(r,", показаны все")).call(t,c?" совпадения":""):D()(a=D()(l="Показано: ".concat(s," из ")).call(l,r)).call(a,c?" совпадений":""))};Q.displayName="ControlBar-AmountMeter";var Z=(Y={},E()(Y,s.sd.CAPTION,"заголовку"),E()(Y,s.sd.HASHTAG,"хэштегу"),E()(Y,s.sd.URL,"URL-адресу"),Y),z=(L={},E()(L,s.ae.NEW,"новые"),E()(L,s.ae.OLD,"старые"),L),J="sorting-group-label",O=function(e){switch(e){case s.sd.HASHTAG:return"#";case s.sd.URL:return"://";default:return}},G=function(e){var t,a=e.className,l=e.filterTarget,r=e.searchString,s=e.sortingTarget,c=e.totalAmount,i=e.visibleAmount,m=e.onFilterToggle,g=e.onSearch,f=e.onSortingToggle,N=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e;null===(e=N.current)||void 0===e||e.focus()}),[]),n.createElement("div",{className:b()(M.root,a)},n.createElement("div",{className:_()(M)},n.createElement(w,{tip:"Искать по:",filterDict:Z,value:l,onChange:m})),n.createElement(P,{ref:N,className:M.searchbar,inputMode:"search",legend:"Введите текст для поиска",tipChar:O(l),value:r,onChange:g}),n.createElement("div",{className:M.sorting},n.createElement("span",{className:M.sortingTip,id:J},"Сортировка:"),n.createElement("div",{className:M.sortingControls,"aria-labelledby":J,role:"radiogroup"},v()(t=d()(z)).call(t,(function(e){var t=u()(e,2),a=t[0],l=t[1],r=a===s;return n.createElement(k.z,{key:a,className:M.sortingButton,disabled:r,"aria-checked":r,role:"radio",onClick:function(){f(a)}},"Сначала ".concat(l))})))),n.createElement(Q,o()({isFiltered:""!==r},{totalAmount:c,visibleAmount:i})))};const V="_1vXft4U0TfxpM241fhXQ1i";var W=function(){return n.createElement("div",{className:V,role:"status"},n.createElement("span",{className:"Spinner","aria-label":"Пожалуйста, подождите..."}))},I=a(9049),K=a(3061),X=a.n(K);const H={root_series:"_2fsNVYXGjrlKQl1YJVt-fA",langBadge:"PbwDyk3DJZ8F9tUdS5zZA",langBadge_en:"_1r8DYO-tzk8CoxG7b24lDf PbwDyk3DJZ8F9tUdS5zZA",langBadge_ru:"_1if0SmhlcuegU_BhbludmG PbwDyk3DJZ8F9tUdS5zZA",legend:"_1EMojvA2QD4TF9axzEx3hh",link:"MJZew1Zh9vpm3ubiokKzi _2YRy5ZTdOji5EvHveiydPd",seriesButton:"_3MTFhNeZBoCRFCZLgrjqZ7",isExpanded:"_1C21nrd859dClEpAOyNNsm",seriesList:"_1km0_59fwZ11pjivDlW4WM _1x1k1SAqtVpgY-dlVRUpwU",seriesItem:"_2UFj1RjVwEI5apTwn9La87",tag:"_1wNch5wbeiQpJnyy-P_djc",tags:"mz9JZh_zYlezFgehpPFVB _1x1k1SAqtVpgY-dlVRUpwU"};var q=function(e){var t=e.lang,a=void 0===t?"":t,l=e.legend,r=void 0===l?"":l,s=e.tags,c=void 0===s?[]:s;return n.createElement(n.Fragment,null,Boolean(a)&&n.createElement(n.Fragment,null," ",n.createElement("span",{className:b()(H["langBadge_".concat(a)])},a)),c.length>0&&n.createElement("ul",{className:H.tags},v()(c).call(c,(function(e,t){return e?n.createElement("li",{className:H.tag,key:t}," #".concat(e)):null}))),Boolean(r)&&n.createElement("span",{className:H.legend}," ‒ ".concat(r)))};q.displayName="SubjectsItem-Appendix";a(1603);var $=function(e){var t=e.caption,a=e.lang,l=e.url;return n.createElement("a",{className:H.link,href:l,hrefLang:a,lang:a},t)};$.displayName="SubjectsItem-Link";var ee=[s.Ge.ENTER,s.Ge.SPACE],te=function(e){var t=e.className,a=e.subject,r=a.caption,s=a.lang,i=a.legend,o=a.series,m=a.tags,g=!!(0,l.v9)(c.gL.searchString),d=(0,n.useState)({isExpanded:!1}),f=u()(d,2),N=f[0],_=f[1],p=(0,n.useRef)(!0),h=p.current?g:N.isExpanded,k=function(){p.current?_({isExpanded:!g}):_((function(e){return{isExpanded:!e.isExpanded}})),p.current&&(p.current=!1)};return n.createElement("li",{className:b()(H.root_series,t,E()({},H.isExpanded,h))},n.createElement("div",{className:H.series},n.createElement("span",{className:H.seriesButton,role:"button","aria-expanded":h,onClick:k,onKeyDown:function(e){X()(ee).call(ee,e.key)&&k()},tabIndex:0},r),n.createElement(q,{lang:s,legend:i,tags:m})),h&&n.createElement("ul",{className:H.seriesList},v()(o).call(o,(function(e){var t=e.caption,a=e.lang,l=e.tags,r=e.legend,c=e.url;return n.createElement("li",{key:c,className:H.seriesItem},n.createElement($,{caption:t,lang:s,url:c}),n.createElement(q,{lang:a,legend:r,tags:l}))}))))};te.displayName="SubjectsItem_series";var ae=function(e){var t=e.className,a=e.subject,l=a.caption,r=a.lang,s=a.legend,c=a.tags,i=a.url;return n.createElement("li",{className:t},n.createElement($,{caption:l,lang:r,url:i}),n.createElement(q,{lang:r,legend:s,tags:c}))};ae.displayName="SubjectsItem_single";var ne=function(e){var t,a=e.subject.caption;return t=e.subject,Boolean(t.series)?n.createElement(te,{key:a,className:e.className,subject:e.subject}):n.createElement(ae,{key:a,className:e.className,subject:e.subject})};const le={root:"_2gQSsF7Jmssoz0krbWbMjX",button:"_2CS_-VO-uG3fQW4Q2YMf9U",fallbackMessage:"_3nDv7vTOQuyWOBUwfQE73_",list:"_2SYdC893TqhleTE-Zic-0r _1x1k1SAqtVpgY-dlVRUpwU",item:"KjfZV2mSRYaisZl00g-Qc",item_last:"j0Fv9Vw4B3AV5P1FJNWTT KjfZV2mSRYaisZl00g-Qc"};var re=function(e){var t=e.message;return n.createElement("p",{className:le.fallbackMessage},t)};re.displayName="Subjects-FallbackMessage";var se=function(e){var t=e.className,a=e.list,l=e.hasFetchError,r=e.isLastPage,s=e.onShowMoreClick;return l?n.createElement(re,{message:"Ошибка загрузки"}):a.length?n.createElement("div",{className:b()(le.root,t)},n.createElement("ul",{className:le.list},v()(a).call(a,(function(e,t,a){return ne({className:le[t===a.length-1?"item_last":"item"],subject:e})}))),!r&&n.createElement(I.c,{className:le.button,onClick:s},"Показать ещё")):n.createElement(re,{message:"Ничего не найдено"})};const ce="RDThbx2k4ToAILx6We_3R _2XT7XadKSvE3Grmu7tzUOk",ie="_2cUK_6eRHpop1C_tbkCMzI",oe="_uribNx8mPJ0-GLKNNy5d",me="_1dXQjpokxyHaA1OKy5_Rw1 G4TjbQS-mR8dv5ZARge0A",ue="_3Bt2kh3Ohkqz10J0DcGdic";var ge=function(){var e=(0,l.v9)(c.mM.error),t=(0,l.v9)(c.gL.filterName),a=(0,l.v9)(c.gL.page),i=(0,l.v9)(c.gL.searchString),o=(0,l.v9)(c.it),m=(0,l.v9)(c.gL.sortingName),u=(0,l.v9)(c.vs),g=(0,l.v9)(c.mM.isComplete),d=(0,l.v9)(c.L6),f=(0,l.I0)(),v=d?o:s.v9*a;return(0,n.useEffect)((function(){f((0,r.O8)())}),[f]),n.createElement("main",{className:ce},n.createElement("div",{className:ie},n.createElement("h1",{className:me},"Полезные материалы по Computer Science")),g?n.createElement(n.Fragment,null,n.createElement(G,{className:oe,filterTarget:t,searchString:i,sortingTarget:m,totalAmount:o,visibleAmount:v,onFilterToggle:function(e){f((0,r.cT)(e))},onSearch:function(e){f((0,r.vN)(e.target.value))},onSortingToggle:function(e){f((0,r.nY)(e))}}),n.createElement(se,{className:ue,list:u,hasFetchError:!!e,isLastPage:d,onShowMoreClick:function(){f((0,r.Sg)())}})):n.createElement(W,null))}}}]);