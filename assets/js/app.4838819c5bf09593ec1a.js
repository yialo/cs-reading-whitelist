!function(e){function t(t){for(var n,c,o=t[0],i=t[1],s=t[2],f=0,m=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);m.length;)m.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(l.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={0:0},l=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/cs-reading-whitelist/";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var u=i;l.push([210,1,2]),a()}({125:function(e,t,a){e.exports={root:"_3B6VDikvxwefW_olt_SfHW",hasDarkTheme:"hasDarkTheme",themeToggle:"FceVENp3Yx1eukKSbNVRb _1AmIxeyl-A_1oU4h5dbNPO"}},126:function(e,t,a){e.exports={root:"_34oIFnghr8DaMN7AEsvKo9",field:"_3avYeOt1Pq4zYR9T-BLZUG _3y6bnRDzdqtWVl2EclAsJl"}},127:function(e,t,a){e.exports={root:"_2rf_Q2K26T0u7ZOLvCQwCO",hasDarkTheme:"hasDarkTheme",header:"_3UmJpinBfJTx9D3eih_q8P",main:"_2LGhsWi6Jbudt_8DFO4JTl"}},131:function(e,t,a){e.exports={"Page-body":"Page-body","Page-overlay":"Page-overlay",isHidden:"isHidden","Page-root":"Page-root",spinner:"spinner"}},205:function(e,t,a){e.exports={preloader:"_2NdiWCySrmlAhoClf0GSf3"}},210:function(e,t,a){a(211),e.exports=a(402)},402:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"fetchSubjects",(function(){return A})),a.d(n,"searchInList",(function(){return P})),a.d(n,"toggleFilter",(function(){return w})),a.d(n,"toggleTheme",(function(){return C}));a(130),a(131);var r=a(0),l=a.n(r),c=a(90),o=a.n(c),i=a(14),s=a(74),u=a(24),f=(a(221),a(197)),m=a(10),p=a.n(m),d=(a(132),a(226),a(122)),h=a.n(d),g=a(198),v=a.n(g),b=a(38),E=a.n(b),N=(a(152),a(199)),y=a.n(N),_="LIST_SEARCH",O="LIST_FILTER_TOGGLE",S="FETCH_COMPLETE",j="FETCH_ERROR",k="THEME_TOGGLE",D="caption",x="hashtag",T="/cs-reading-whitelist/",M={HOME:T,CLASSNAMES:"".concat(T,"classnames")},P=function(e){return{type:_,payload:e}},w=function(e){return{type:O,payload:e}},C=function(){return{type:k}},A=function(){return function(){var e=y()(h.a.mark((function e(t){var a,n,r,l,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E()(a="".concat("/cs-reading-whitelist/","response/subjects.json?")).call(a,v()()),e.prev=1,e.next=4,window.fetch(n);case 4:return r=e.sent,e.next=7,r.json();case 7:l=e.sent,c=l.data,t({type:S,payload:c}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:j,payload:e.t0});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}()},F=(a(179),a(28)),L=a.n(F),B=a(76),I=a.n(B),G=a(57),W=a.n(G),J=[[M.HOME,"My reading"],[M.CLASSNAMES,"Classnames"]],R="AppNavMenu-list",H=function(e){var t=e.className,a=Object(r.useState)(!1),n=I()(a,2),c=n[0],o=n[1];return l.a.createElement("nav",{className:p()(W.a.root,t)},l.a.createElement("button",{"aria-controls":R,"aria-expanded":c,"aria-label":"Меню",className:W.a.button,type:"button",onClick:function(){o((function(e){return!e}))}}),l.a.createElement("ul",{className:W.a.list,id:R},L()(J).call(J,(function(e){var t=I()(e,2),a=t[0],n=t[1];return l.a.createElement("li",{key:n},l.a.createElement(s.b,{activeClassName:W.a.link_active,className:W.a.link,to:a,exact:!0},n))}))))};H.defaultProps={className:""};var Q=function(e){var t=e.className,a=e.isDark,n=e.onToggle;return l.a.createElement("button",{"aria-label":"Перейти к ".concat(a?"светлой":"тёмной"," теме"),className:t,type:"button",onClick:n},"Go ".concat(a?"light":"dark"))};Q.defaultProps={className:""};var U,q=a(200),Y=a.n(q),K=a(201),Z=a.n(K),z=function(e,t){var a,n=Object(i.b)();return Object(r.useMemo)((function(){return Z()(e)?L()(e).call(e,(function(e){return Object(u.bindActionCreators)(e,n)})):Object(u.bindActionCreators)(e,n)}),t?E()(a=[n]).call(a,Y()(t)):[n])},V=(a(336),a(190),a(191),a(341),a(202)),X=a.n(V),$=a(20),ee=a.n($),te=a(203),ae=a(53),ne=a.n(ae),re=a(54),le=a.n(re),ce=a(32),oe=a.n(ce),ie=a(33),se=a.n(ie),ue=a(34),fe=a.n(ue),me=a(35),pe=a.n(me),de=a(55),he=a.n(de),ge=a(11),ve=a.n(ge);function be(e,t){var a=he()(e);if(pe.a){var n=pe()(e);t&&(n=ee()(n).call(n,(function(t){return fe()(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)se()(a=be(Object(n),!0)).call(a,(function(t){ve()(e,t,n[t])}));else if(oe.a)le()(e,oe()(n));else{var r;se()(r=be(Object(n))).call(r,(function(t){ne()(e,t,fe()(n,t))}))}}return e}var Ne,ye={error:null,list:[],isComplete:!1},_e=(U={},ve()(U,S,(function(e,t){return Ee(Ee({},e),{},{list:t,isComplete:!0})})),ve()(U,j,(function(e,t){return Ee(Ee({},e),{},{error:t,isComplete:!0})})),ve()(U,"DEFAULT",(function(e){return e})),U);function Oe(e,t){var a=he()(e);if(pe.a){var n=pe()(e);t&&(n=ee()(n).call(n,(function(t){return fe()(e,t).enumerable}))),a.push.apply(a,n)}return a}function Se(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)se()(a=Oe(Object(n),!0)).call(a,(function(t){ve()(e,t,n[t])}));else if(oe.a)le()(e,oe()(n));else{var r;se()(r=Oe(Object(n))).call(r,(function(t){ne()(e,t,fe()(n,t))}))}}return e}var je={filterName:"caption",searchString:""},ke=(Ne={},ve()(Ne,_,(function(e,t){return Se(Se({},e),{},{searchString:t})})),ve()(Ne,O,(function(e,t){return Se(Se({},e),{},{filterName:t})})),ve()(Ne,"DEFAULT",(function(e){return e})),Ne);function De(e,t){var a=he()(e);if(pe.a){var n=pe()(e);t&&(n=ee()(n).call(n,(function(t){return fe()(e,t).enumerable}))),a.push.apply(a,n)}return a}function xe(e){for(var t=1;t<arguments.length;t++){var a,n=null!=arguments[t]?arguments[t]:{};if(t%2)se()(a=De(Object(n),!0)).call(a,(function(t){ve()(e,t,n[t])}));else if(oe.a)le()(e,oe()(n));else{var r;se()(r=De(Object(n))).call(r,(function(t){ne()(e,t,fe()(n,t))}))}}return e}var Te={isDark:!1},Me=Object(u.combineReducers)({fetch:function(e,t){var a,n=t.type,r=t.payload;return(null!==(a=_e[n])&&void 0!==a?a:_e.DEFAULT)(null!=e?e:ye,r)},list:function(e,t){var a,n=t.type,r=t.payload;return(null!==(a=ke[n])&&void 0!==a?a:ke.DEFAULT)(null!=e?e:je,r)},theme:function(e,t){var a=null!=e?e:Te;return t.type===k?xe(xe({},a),{},{isDark:!a.isDark}):a}}),Pe={error:function(e){return e.fetch.error},fullList:function(e){return e.fetch.list},isComplete:function(e){return e.fetch.isComplete}},we={filterName:function(e){return e.list.filterName},searchString:function(e){return e.list.searchString}},Ce=function(e){return e.theme.isDark},Ae=Object(te.a)([Pe.fullList,we.searchString,we.filterName],(function(e,t,a){return""===t?e:ee()(e).call(e,(function(e){var n,r=new RegExp(t,"gi");switch(a){case"caption":return e.caption.match(r);case"hashtag":return X()(n=e.tags).call(n,(function(e){return e.match(r)}));default:return!0}}))})),Fe=a(125),Le=a.n(Fe),Be=function(e){var t=e.className,a=Object(i.c)(Ce),r=z(n).toggleTheme;return l.a.createElement("header",{className:p()(Le.a.root,t)},l.a.createElement(H,null),l.a.createElement(Q,{className:Le.a.themeToggle,isDark:a,onToggle:r}))};Be.defaultProps={className:""};var Ie=a(3),Ge=a(204),We=a.n(Ge),Je=a(126),Re=a.n(Je),He=function(e){var t=e.className,a=e.inputMode,n=e.legend,r=e.value,c=e.onChange;return l.a.createElement("label",{className:p()(Re.a.root,!!t&&t),"aria-label":n},l.a.createElement("input",{className:Re.a.field,inputMode:a,type:"text",value:r,onChange:c}))};He.defaultProps={className:""};var Qe,Ue=a(43),qe=a.n(Ue),Ye=(Qe={},ve()(Qe,D,"заголовок"),ve()(Qe,x,"хэштег"),Qe),Ke="filter-group-label",Ze=function(e){var t,a=e.className,n=e.filterTarget,r=e.searchString,c=e.onFilterToggle,o=e.onSearch;return l.a.createElement("form",{className:p()(qe.a.root,a),onSubmit:function(e){e.preventDefault()}},l.a.createElement("div",{className:ee()(qe.a)},l.a.createElement("p",{className:qe.a.tip},l.a.createElement("span",{id:Ke},"Тип сортировки:")),l.a.createElement("div",{className:qe.a.controls,role:"radiogroup","aria-labelledby":Ke},L()(t=We()(Ye)).call(t,(function(e,t){var a,r=I()(e,2),o=r[0],i=r[1],s=n===o;return l.a.createElement("button",{key:E()(a="".concat(o,"-")).call(a,t+1),className:qe.a.control,disabled:s,role:"radio","aria-checked":s,type:"button",onClick:function(){c(o)}},i)})))),l.a.createElement("p",{className:qe.a.searchbar},l.a.createElement(He,{inputMode:"search",legend:"Введите текст для поиска",value:r,onChange:o})))};Ze.defaultProps={className:""};var ze=a(205),Ve=a.n(ze),Xe=function(){return l.a.createElement("div",{className:Ve.a.preloader,role:"status"},l.a.createElement("span",{className:"spinner","aria-label":"Пожалуйста, подождите..."}))},$e=a(44),et=a.n($e),tt=function(e){var t=e.caption,a=e.className,n=e.lang,r=e.legend,c=e.tags,o=e.url;return l.a.createElement("li",{className:p()(et.a.root,a)},l.a.createElement("a",{className:et.a.link,href:o,lang:n},t)," ",l.a.createElement("span",{className:p()(et.a["langBadge_".concat(n)])},n),l.a.createElement("span",{className:et.a.legend},r?" - ".concat(r):""),l.a.createElement("ul",{className:et.a.tags},L()(c).call(c,(function(e,t){return l.a.createElement("li",{className:et.a.tag,key:t}," #".concat(e))}))))};tt.defaultProps={className:"",legend:"",tags:[]};var at=a(56),nt=a.n(at),rt=function(e){var t=e.message;return l.a.createElement("p",{className:nt.a.fallbackMessage},t)},lt=function(e){var t=e.className,a=e.list;return e.hasFetchError?l.a.createElement(rt,{message:"Ошибка загрузки"}):a.length?l.a.createElement("div",{className:p()(nt.a.root,t)},l.a.createElement("ul",{className:nt.a.list},L()(a).call(a,(function(e,t,a){return l.a.createElement(tt,{key:e.url,caption:e.caption,className:nt.a[t===a.length-1?"item_last":"item"],lang:e.lang,legend:e.legend,tags:e.tags,url:e.url})})))):l.a.createElement(rt,{message:"Ничего не найдено"})};lt.defaultProps={className:""};var ct=a(58),ot=a.n(ct),it=function(e){var t=e.className,a=Object(i.c)(Pe.error),c=Object(i.c)(we.filterName),o=Object(i.c)(Ae),s=Object(i.c)(we.searchString),u=Object(i.c)(Pe.isComplete),f=z(n),m=f.fetchSubjects,d=f.searchInList,h=f.toggleFilter;return Object(r.useEffect)((function(){m()}),[m]),l.a.createElement("main",{className:p()(ot.a.root,t)},l.a.createElement("div",{className:ot.a.header},l.a.createElement("h1",{className:ot.a.headline,lang:"en"},"Computer Science Reading Whitelist")),!u&&l.a.createElement(Xe,null),u&&l.a.createElement(l.a.Fragment,null,l.a.createElement(Ze,{className:ee()(ot.a),filterTarget:c,searchString:s,onFilterToggle:h,onSearch:function(e){d(e.target.value)}}),l.a.createElement(lt,{className:ot.a.subjects,list:o,hasFetchError:a})))};it.defaultProps={className:""};var st=function(){return l.a.createElement("div",null,l.a.createElement("p",{style:{marginTop:"0",marginBottom:"0",padding:"1rem 2rem",fontSize:"2rem",fontStyle:"italic"}},"Under construction"))},ut=function(){return l.a.createElement(Ie.d,null,l.a.createElement(Ie.b,{exact:!0,path:M.HOME,component:it}),l.a.createElement(Ie.b,{path:M.CLASSNAMES,component:st}),l.a.createElement(Ie.b,null,l.a.createElement(Ie.a,{to:M.HOME})))},ft=a(127),mt=a.n(ft),pt=function(){var e=Object(i.c)(Ce);return Object(r.useEffect)((function(){var e;null==(e=document.getElementById("overlay"))||e.classList.add("isHidden")}),[]),l.a.createElement("div",{className:p()(mt.a.root,{hasDarkTheme:e})},l.a.createElement(Be,{className:mt.a.header}),l.a.createElement(ut,null))},dt=(a(381),a(77)),ht=a.n(dt),gt=a(206),vt=a.n(gt),bt=a(207),Et=a.n(bt),Nt=a(120),yt=a.n(Nt),_t=a(208),Ot=a.n(_t),St=a(209),jt=a.n(St),kt=a(128),Dt=a.n(kt);function xt(e){var t=function(){if("undefined"==typeof Reflect||!ht.a)return!1;if(ht.a.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(ht()(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Dt()(e);if(t){var r=Dt()(this).constructor;a=ht()(n,arguments,r)}else a=n.apply(this,arguments);return jt()(this,a)}}var Tt,Mt,Pt=function(e){Ot()(a,e);var t=xt(a);function a(){var e,n;vt()(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=t.call.apply(t,E()(e=[this]).call(e,l)),ve()(yt()(n),"state",{error:null}),n}return Et()(a,[{key:"render",value:function(){return this.state.error?l.a.createElement("p",null,"Something went wrong in React app:("):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}]),a}(l.a.Component),wt=Object(u.applyMiddleware)(f.a),Ct=Object(u.createStore)(Me,wt),At=function(){return l.a.createElement(l.a.StrictMode,null,l.a.createElement(Pt,null,l.a.createElement(s.a,null,l.a.createElement(i.a,{store:Ct},l.a.createElement(pt,null)))))};Tt=Object(r.createElement)(At),Mt=document.getElementById("app-root"),o.a.render(Tt,Mt)},43:function(e,t,a){e.exports={root:"_1BIOgCeMijsvrL0ADDmpav",control:"_2opnrqRjXkh9cQPQGtnxW2 _1AmIxeyl-A_1oU4h5dbNPO",controls:"IPLbVqBqlatZupZRZn-Ua",filter:"_2_BVMfVWPMMU2rWMOjTEnq",searchbar:"_1W3XfzkZwbwkHRaHTcsOm2",tip:"GLyWJJ2jZSm3QZjcNfv5C"}},44:function(e,t,a){e.exports={root:"_3g2r1wlZrbbStOPNLdUmpx",langBadge:"_3QZBPEvF3lw3RPCbXoaosr",langBadge_en:"_2-zwZXUxrK005MDko0Wcb4 _3QZBPEvF3lw3RPCbXoaosr",langBadge_ru:"YbGjyI91WLvgt-5IobDVm _3QZBPEvF3lw3RPCbXoaosr",legend:"_3at2pu1g9-QQnify_iKjNx",link:"_2fxJ_d2p0tgGlZycQtieuD",hasDarkTheme:"hasDarkTheme",tag:"_2S0QHBRpcP52V-Fn-COQPn",tags:"_2vVz9SXtH34nFomoJjc_cU yYb7YSpYBNGcJBKMktNKx"}},56:function(e,t,a){e.exports={root:"_1MMmEFw8Q1oU-OAXboAn_S",button:"_2i7-9J1oDKKt1Uk1IfJLDC",fallbackMessage:"_2nA4NLyeeu2AS6DlYbPknH",item:"_1qcSeAW2hxIh9tDtcOmMSQ",item_last:"_3mluMnIMsNVqK_irpccwY2 _1qcSeAW2hxIh9tDtcOmMSQ",list:"_1r11myDOWwftOJMyhxf2zM yYb7YSpYBNGcJBKMktNKx"}},57:function(e,t,a){e.exports={root:"GKE4gXdwkk-tAd_zQj8G9",button:"_1gYASY4j52qDC7vNDgWzgm _1AmIxeyl-A_1oU4h5dbNPO",list:"_1g1wpGzxjJ52qxH3tjWLO3 yYb7YSpYBNGcJBKMktNKx",link:"_39F4FkFruj5-IznrajrZbQ",hasDarkTheme:"hasDarkTheme",link_active:"_25tj2S0BTmjHZAV8qTDK67"}},58:function(e,t,a){e.exports={root:"F47-NF_Duqw20v4ksiO-g _2LGhsWi6Jbudt_8DFO4JTl",hasDarkTheme:"hasDarkTheme",header:"_XwealDIUvi1m59WxwIqB",filter:"_2mmA85z8AD_IzG1kEdN16-",headline:"_3O10ky3p1QGuUC0BiP7PnI",subjects:"M7XEM7IcutWz7qMhsccVq"}}});