!function(e){function t(t){for(var r,i,c=t[0],o=t[1],s=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);for(u&&u(t);p.length;)p.shift()();return l.push.apply(l,s||[]),n()}function n(){for(var e,t=0;t<l.length;t++){for(var n=l[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={0:0},l=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://yialo.github.io/cs-reading-whitelist/";var c=window.webpackJsonp=window.webpackJsonp||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=o;l.push([313,1]),n()}({143:function(e,t,n){},313:function(e,t,n){"use strict";n.r(t);n(142),n(143),n.p,n.p,n.p,n.p;var r=n(0),a=n.n(r),l=n(56),i=n.n(l),c=n(57),o=n(61),s=n(58),u=n.n(s),f=n(59),p=n.n(f),g=n(31),d=n.n(g),m=n(32),h=n.n(m),b=n(29),v=n.n(b),E=n(33),_=n.n(E),y=n(44),j=n.n(y),S=n(25),T=n.n(S),N=n(18),L=n.n(N),F=(n(197),n(202),n(30)),O=n.n(F),R=n(138),C=n.n(R),q=n(1),w=n.n(q),x=n(60),M=n.n(x),P=n(139),k=n.n(P),D=n(140),I=n.n(D);n(296);function J(e){var t,n=e.classNames,r=e.inputMode,l=e.legend,i=e.onChange,c=e.value;return a.a.createElement("label",{className:M()(t=["text-input"]).call(t,n).join(" "),"aria-label":l},a.a.createElement("input",{className:"s_input text-input__field",onChange:i,type:"text",inputMode:r,value:c}))}J.defaultProps={classNames:[]},J.propTypes={classNames:w.a.oneOfType([w.a.arrayOf(w.a.string),w.a.string]),inputMode:w.a.string.isRequired,legend:w.a.string.isRequired,onChange:w.a.func.isRequired,value:w.a.string.isRequired};var U=J,A={caption:"заголовок",hashtag:"хэштег"};function B(e){var t,n=e.filterTarget,r=e.onFilterToggle,l=e.onSearch,i=e.searchString;return a.a.createElement("form",{className:"control-bar page__filter",onSubmit:function(e){e.preventDefault()}},a.a.createElement("div",{className:"filter control-bar__filter"},a.a.createElement("p",{className:"filter__tip"},"Тип сортировки:"),a.a.createElement("div",{className:"filter__controls"},O()(t=I()(A)).call(t,(function(e,t){var l,i=k()(e,2),c=i[0],o=i[1],s=n===c;return a.a.createElement("button",{key:M()(l="".concat(c,"-")).call(l,t+1),className:"s_button filter__control",type:"button",disabled:s,onClick:function(){r(c)}},o)})))),a.a.createElement("p",{className:"control-bar__searchbar"},a.a.createElement(U,{onChange:l,inputMode:"search",legend:"Введите текст для поиска",value:i})))}B.propTypes={filterTarget:w.a.string.isRequired,onFilterToggle:w.a.func.isRequired,onSearch:w.a.func.isRequired,searchString:w.a.string.isRequired};var G=B;function H(e){return a.a.createElement("p",{className:"subjects__fallback-message"},e.message)}H.propTypes={message:w.a.string.isRequired};var W=H;var z=function(){return a.a.createElement("div",{className:"subjects__preloader",role:"status"},a.a.createElement("span",{className:"spinner","aria-label":"Пожалуйста, подождите..."}))};function K(e){var t=e.caption,n=e.lang,r=e.legend,l=e.tags,i=e.url;return(a.a.createElement("li",{className:"subjects__item"},a.a.createElement("a",{className:"subjects__link",href:i,lang:n},t)," ",a.a.createElement("span",{className:"subjects__lang-badge subjects__lang-badge--".concat(n)},n),r?" - ".concat(r):"",a.a.createElement("ul",{className:"s_list subjects__tags"},O()(l).call(l,(function(e,t){return a.a.createElement("li",{className:"subjects__tag",key:t}," #".concat(e))})))))}K.defaultProps={legend:"",tags:[]},K.propTypes={caption:w.a.string.isRequired,lang:w.a.string.isRequired,legend:w.a.string,tags:w.a.arrayOf(w.a.string),url:w.a.string.isRequired};var Q=K;function V(e){var t=e.fetchError,n=e.filterName,l=e.filteredList,i=e.isFetchComplete,c=e.searchString,o=e.subjectList,s=e.onFetchComplete,u=e.onFetchError,f=e.onFilterToggle,p=e.onSearch;function g(e){var t=e.target.value;p(t,o,n)}return Object(r.useEffect)((function(){var e="/response/subjects.json?".concat(C()());window.fetch(e).then((function(e){return e.json()})).then((function(e){s(e.data)})).catch((function(e){u(e)}))}),[]),a.a.createElement("main",{className:"page__content"},a.a.createElement("h1",{className:"page__heading",lang:"en"},"Computer Science Reading Whitelist"),i?a.a.createElement(a.a.Fragment,null,a.a.createElement(G,{filterTarget:n,onFilterToggle:function(e){f(c,o,e)},onSearch:g,searchString:c}),a.a.createElement("div",{className:"subjects page__subjects"},t?a.a.createElement(W,{message:"Ошибка загрузки"}):l.length>0?a.a.createElement("ul",{className:"s_list subjects__list"},O()(l).call(l,(function(e){return a.a.createElement(Q,{key:e.url,caption:e.caption,lang:e.lang,legend:e.legend,tags:e.tags,url:e.url})}))):a.a.createElement(W,{message:"Ничего не найдено"}))):a.a.createElement(z,null))}V.defaultProps={fetchError:null,filteredList:[],subjectList:[]},V.propTypes={fetchError:w.a.instanceOf(Error),filterName:w.a.oneOf(["caption","hashtag"]).isRequired,filteredList:w.a.arrayOf(w.a.object),isFetchComplete:w.a.bool.isRequired,searchString:w.a.string.isRequired,subjectList:w.a.arrayOf(w.a.object),onFetchComplete:w.a.func.isRequired,onFetchError:w.a.func.isRequired,onFilterToggle:w.a.func.isRequired,onSearch:w.a.func.isRequired};var X,Y=V,Z=(n(298),n(136),n(303),n(304),n(141)),$=n.n(Z),ee="FILTER_LIST",te="TOGGLE_FILTER",ne="SUBJECTS_FETCH_COMPLETE",re="SUBJECTS_FETCH_ERROR",ae=function(e,t,n){return""===e?t:v()(t).call(t,(function(t){var r,a=new RegExp(e,"gi");switch(n){case"caption":return t.caption.match(a);case"hashtag":return $()(r=t.tags).call(r,(function(e){return e.match(a)}));default:return!0}}))},le={filterList:function(e,t,n){var r=ae(e,t,n);return{type:ee,payload:{filteredList:r,textToSearch:e}}},toggleFilter:function(e,t,n){var r=ae(e,t,n);return{type:te,payload:{filterName:n,filteredList:r,textToSearch:e}}},showSubjectsList:function(e){return{type:ne,payload:e}},showFetchError:function(e){return{type:re,payload:e}}};function ie(e,t){var n=j()(e);if(_.a){var r=_()(e);t&&(r=v()(r).call(r,(function(t){return h()(e,t).enumerable}))),n.push.apply(n,r)}return n}function ce(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)T()(n=ie(Object(r),!0)).call(n,(function(t){L()(e,t,r[t])}));else if(d.a)p()(e,d()(r));else{var a;T()(a=ie(Object(r))).call(a,(function(t){u()(e,t,h()(r,t))}))}}return e}var oe={fetchError:null,filterName:"caption",filteredList:[],isFetchComplete:!1,searchString:"",subjectList:[]},se=(X={},L()(X,ee,(function(e,t){return ce({},e,{filteredList:t.filteredList,searchString:t.textToSearch})})),L()(X,te,(function(e,t){return ce({},e,{filterName:t.filterName,filteredList:t.filteredList,textToSearch:t.textToSearch})})),L()(X,ne,(function(e,t){return ce({},e,{filteredList:t,subjectList:t,isFetchComplete:!0})})),L()(X,re,(function(e,t){return ce({},e,{fetchError:t,isFetchComplete:!0})})),L()(X,"DEFAULT",(function(e){return e})),X),ue=function(e,t){var n;return(null!==(n=se[t.type])&&void 0!==n?n:se.DEFAULT)(e,t.payload)};function fe(e,t){var n=j()(e);if(_.a){var r=_()(e);t&&(r=v()(r).call(r,(function(t){return h()(e,t).enumerable}))),n.push.apply(n,r)}return n}var pe=Object(o.b)((function(e,t){var n,r=function(e){for(var t=1;t<arguments.length;t++){var n,r=null!=arguments[t]?arguments[t]:{};if(t%2)T()(n=fe(Object(r),!0)).call(n,(function(t){L()(e,t,r[t])}));else if(d.a)p()(e,d()(r));else{var a;T()(a=fe(Object(r))).call(a,(function(t){u()(e,t,h()(r,t))}))}}return e}({},t);return T()(n=j()(oe)).call(n,(function(t){r[t]=e[t]})),r}),(function(e){return{onFilterToggle:function(){e(le.toggleFilter.apply(le,arguments))},onFetchComplete:function(t){e(le.showSubjectsList(t))},onFetchError:function(t){e(le.showFetchError(t))},onSearch:function(){e(le.filterList.apply(le,arguments))}}}))(Y);pe.displayName="connected(App)";var ge=pe;function de(){var e=[ue,oe];var t=c.b.apply(void 0,e);return(a.a.createElement(o.a,{store:t},a.a.createElement(ge,null)))}de.displayName="withStore(".concat(ge.displayName,")");var me=de;document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementById("app-root"),t=a.a.createElement(a.a.StrictMode,null,a.a.createElement(me,null));i.a.render(t,e)}))}});