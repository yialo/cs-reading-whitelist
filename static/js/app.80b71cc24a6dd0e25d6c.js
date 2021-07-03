(self.webpackChunk=self.webpackChunk||[]).push([[143],{1952:(e,t,a)=>{"use strict";var s=a(8669),r=a(8682),n=a(7788),l=a(1620),c=a(4086),i=(a(2933),a(9189)),o=a(4609);const E="Vo5yrqTZ2QBPWs8Ks_v9m";class d extends s.Component{constructor(...e){super(...e),(0,o.Z)(this,"state",{error:null})}static getDerivedStateFromError(e){return{error:e}}render(){return this.state.error?s.createElement("p",{className:E},"Something went wrong in React app:("):this.props.children}}var m=a(2912);const u={error:null,list:[],isComplete:!1};var p=a(8040);const h={searchString:"",page:1,filterName:p.sd.CAPTION,sortingName:p.ae.NEW},g={isDark:!1},N=(0,c.UY)({fetch:(e,t)=>{const a=e??u;switch(t.type){case m.a.FETCH.COMPLETE:return{...a,list:t.payload,isComplete:!0};case m.a.FETCH.ERROR:return{...a,error:t.payload,isComplete:!0};default:return a}},list:(e,t)=>{const a=e??h;switch(t.type){case m.a.LIST.SEARCH:return{...a,page:1,searchString:t.payload};case m.a.LIST.FILTER_TOGGLE:return{...a,filterName:t.payload,page:1};case m.a.LIST.SORTING_TOGGLE:return{...a,sortingName:t.payload};case m.a.LIST.NEXT_PAGE:return{...a,page:a.page+1};default:return a}},theme:(e,t)=>{const a=e??g;switch(t.type){case m.a.THEME.TOGGLE:return{...a,isDark:!a.isDark};default:return a}}});var v=a(4238),T=a.n(v),y=a(9633),C=a(2218);const S=(0,s.lazy)((()=>a.e(639).then(a.bind(a,9398)))),f=(0,s.lazy)((()=>a.e(804).then(a.bind(a,278)))),L=()=>s.createElement(s.Suspense,{fallback:s.createElement(C.p,null)},s.createElement(y.rs,null,s.createElement(y.AW,{path:p.Z6.HOME,exact:!0},s.createElement(S,null)),s.createElement(y.AW,{path:p.Z6.NAMING,exact:!0},s.createElement(f,null)),s.createElement(y.AW,null,s.createElement(y.l_,{to:p.Z6.HOME}))));var w=a(5704);const G="t89e7EVhS2aNpsCvkEC20",O="ZAe8xSDCYl49x3ZTAfrKa _2YRy5ZTdOji5EvHveiydPd",R="_3hcGTse5Dg_2O1h17Mfuop _1x1k1SAqtVpgY-dlVRUpwU",k=[{legend:"GitHub",url:"https://github.com/yialo/cs-reading-whitelist"},{legend:"Twitter",url:"https://twitter.com/xarroalex"},{legend:"CodeSandbox",url:"https://codesandbox.io/u/yialo/sandboxes"},{legend:"CodePen",url:"https://codepen.io/yialo/pens/public?grid_type=list"}],A=()=>s.createElement("footer",{className:G},s.createElement("ul",{className:R},k.map((({legend:e,url:t},a)=>s.createElement("li",{key:a},s.createElement("a",{className:O,href:t},e))))));var _=a(1435);const H="_166teuLEexhtFf46FJZc4Q",M="Qa-8ManAVgwz06DoZx8Sy",I="_2wMcmOSyCS6xUCHhyNkRgy",P="_1bBUBZWj6aWSnWO0P34Tsm _1x1k1SAqtVpgY-dlVRUpwU",Z="i6c1Z6sKnGJ5ihjCYWDXE",b="_3dsi79x9hHaOZyvAGGXFPf",x=s.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),F=s.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),D=({isExpanded:e})=>s.createElement("svg",{"aria-hidden":"true",className:I,viewBox:"0 0 24 24",width:"100%",height:"100%"},s.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),e?x:F),z=[[p.Z6.HOME,"Reading"],[p.Z6.NAMING,"Naming"]],U="AppNavMenu-list",W=({className:e})=>{const[t,a]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const e=e=>{e.key===p.Ge.ESCAPE&&a((e=>e&&!e))};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),s.createElement("nav",{className:T()(H,e,{isCollapsedScreenSm:!t})},s.createElement("button",{"aria-controls":U,"aria-expanded":t,"aria-label":"Меню",className:M,type:"button",onClick:()=>{a((e=>!e))}},s.createElement(D,{isExpanded:t})),s.createElement("ul",{className:P,id:U},z.map((([e,t])=>s.createElement("li",{key:t},s.createElement(l.OL,{activeClassName:b,className:Z,to:e,exact:!0},t))))))};var j=a(9049);const X="uC7slNcg8lSR9_yFtYoZP",V=({className:e,isDark:t,onToggle:a})=>s.createElement(j.c,{className:T()(X,e),"aria-label":`Перейти к ${t?"светлой":"тёмной"} теме`,onClick:a},"Go "+(t?"light":"dark")),Y="_34aayqzjuUEWXEiPrt9USY",B="_2nkkaeRzJ9Mtw5LkpX6U2g",q=({className:e})=>{const t=(0,n.v9)(w.FS.isDark),a=(0,n.I0)();return s.createElement("header",{className:T()(Y,e)},s.createElement(W,null),s.createElement(V,{className:B,isDark:t,onToggle:()=>{a((0,_.X8)())}}))},Q="dEe8ERd6tJ5nNCjCwCvFw",J="_10T-8t1zqNGGZEbBei-Ial",K=()=>{const e=(0,n.v9)(w.FS.isDark);return(0,s.useEffect)((()=>{(()=>{const e=document.getElementById("overlay");null==e||e.classList.add("isHidden")})()}),[]),s.createElement("div",{className:T()(Q,{hasDarkTheme:e})},s.createElement(q,{className:J}),s.createElement(L,null),s.createElement(A,null))},$=(0,c.md)(i.Z),ee=(0,c.MT)(N,$),te=()=>s.createElement(s.StrictMode,null,s.createElement(d,null,s.createElement(n.zt,{store:ee},s.createElement(l.UT,null,s.createElement(K,null)))));(()=>{const e=document.getElementById("app-root");r.render(s.createElement(te,null),e)})()},2912:(e,t,a)=>{"use strict";var s,r,n;a.d(t,{a:()=>l}),function(e){e.COMPLETE="fetch:complete",e.ERROR="fetch:error"}(s||(s={})),function(e){e.SEARCH="list:search",e.FILTER_TOGGLE="list:filter-toggle",e.SORTING_TOGGLE="list:sorting-toggle",e.NEXT_PAGE="list:next-page"}(r||(r={})),function(e){e.TOGGLE="theme:toggle"}(n||(n={}));const l={FETCH:s,LIST:r,THEME:n}},3907:(e,t,a)=>{"use strict";a.d(t,{z:()=>o});var s=a(9595),r=a(8669),n=a(4238),l=a.n(n);const c="_1iS_k3KGDGTjLeEP7Q0j5-",i=({children:e,className:t,forwardedRef:a,type:n="button",...i})=>r.createElement("button",(0,s.Z)({ref:a,className:l()(c,t),type:n},i),e),o=(0,r.forwardRef)(((e,t)=>r.createElement(i,(0,s.Z)({},e,{forwardedRef:t}))));o.displayName="Button"},9049:(e,t,a)=>{"use strict";a.d(t,{c:()=>o});var s=a(9595),r=a(8669),n=a(4238),l=a.n(n),c=a(3907);const i="_1jV8VblGe9e6XqdrXFRMUw",o=({className:e,...t})=>r.createElement(c.z,(0,s.Z)({className:l()(i,e)},t))},2218:(e,t,a)=>{"use strict";a.d(t,{p:()=>c});var s=a(8669),r=a(4238),n=a.n(r);const l="_2WwIaZ5Fr9A9TEMFCQkew9",c=({className:e})=>s.createElement("div",{className:n()(l,e),role:"status"},s.createElement("span",{className:"Spinner","aria-label":"Пожалуйста, подождите..."}))},8040:(e,t,a)=>{"use strict";a.d(t,{Ge:()=>s,sd:()=>r,ae:()=>n,Z6:()=>l,v9:()=>c});const s={ENTER:"Enter",ESCAPE:"Escape",SPACE:" "};let r,n;!function(e){e.CAPTION="caption",e.HASHTAG="hashtag",e.URL="url"}(r||(r={})),function(e){e.NEW="new",e.OLD="old"}(n||(n={}));const l={HOME:"/cs-reading-whitelist/",NAMING:"/cs-reading-whitelist/naming"},c=10},1435:(e,t,a)=>{"use strict";a.d(t,{vN:()=>r,cT:()=>n,nY:()=>l,Sg:()=>c,X8:()=>i,O8:()=>o});var s=a(2912);const r=e=>({type:s.a.LIST.SEARCH,payload:e}),n=e=>({type:s.a.LIST.FILTER_TOGGLE,payload:e}),l=e=>({type:s.a.LIST.SORTING_TOGGLE,payload:e}),c=()=>({type:s.a.LIST.NEXT_PAGE}),i=()=>({type:s.a.THEME.TOGGLE}),o=()=>async e=>{const t=`/cs-reading-whitelist/data/subjects.json?${Date.now()}`;try{const a=await window.fetch(t),{data:r}=await a.json();e({type:s.a.FETCH.COMPLETE,payload:r})}catch(t){e({type:s.a.FETCH.ERROR,payload:t})}}},5704:(e,t,a)=>{"use strict";a.d(t,{mM:()=>n,gL:()=>l,FS:()=>c,it:()=>E,vs:()=>d,L6:()=>m});var s=a(1503),r=a(8040);const n={error:e=>e.fetch.error,fullList:e=>e.fetch.list,isComplete:e=>e.fetch.isComplete},l={filterName:e=>e.list.filterName,page:e=>e.list.page,searchString:e=>e.list.searchString,sortingName:e=>e.list.sortingName},c={isDark:e=>e.theme.isDark},i=(0,s.P1)([n.fullList,l.searchString,l.filterName],((e,t,a)=>{const s=t.toLowerCase();return""===s?e:e.filter((e=>{switch(a){case r.sd.CAPTION:var t;return e.caption.toLowerCase().includes(s)||(null===(t=e.series)||void 0===t?void 0:t.some((e=>e.caption.toLowerCase().includes(s))));case r.sd.HASHTAG:var n;return e.tags.some((e=>e.toLowerCase().includes(s)))||(null===(n=e.series)||void 0===n?void 0:n.some((e=>{var t;return null===(t=e.tags)||void 0===t?void 0:t.some((e=>e.toLowerCase().includes(s)))})));case r.sd.URL:var l,c;return(null===(l=e.url)||void 0===l?void 0:l.toLowerCase().includes(s))||(null===(c=e.series)||void 0===c?void 0:c.some((e=>e.url.toLowerCase().includes(s))));default:return!0}}))})),o=(0,s.P1)([i,l.sortingName,l.page],((e,t)=>t===r.ae.NEW?[...e].reverse():e)),E=(0,s.P1)([o],(e=>e.length)),d=(0,s.P1)([o,l.page],((e,t)=>{const a=t*r.v9;return e.slice(0,a)})),m=(0,s.P1)([E,l.page],((e,t)=>t===Math.ceil(e/r.v9)))}},e=>{"use strict";e.O(0,[143],(()=>(e.E(639),e.E(804))),5);var t=t=>e(e.s=t);e.O(0,[514,216],(()=>(t(3084),t(1952))));e.O()}]);